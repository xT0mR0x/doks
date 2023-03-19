---
title: "Go Scanner"
description: 
excerpt: "Port Scanner written in Golang"
date: 2023-03-18T19:41:26+02:00
lastmod: 2023-03-19T19:41:26+02:00
draft: false
weight: 120
images: []
categories: ""
tags: ""
contributors: ""
pinned: false
homepage: false
---

---

<br><br>

## Overview

This is a simple Golang program that performs port scanning and grabbing of a specified host.
you can download from GitHub --> [here](https://github.com/xT0mR0x/Go_Pentesting/tree/main/GoScanner)


Builtin packages:


`"flag"` package to parse command line arguments

`"fmt"` package to print output

`"net"` package to perform network operations

`"os"` package to exit the program

`"strings"` package to manipulate strings

`"sync"` package to synchronize goroutines

Start by importing the necessary packages and defining two types to indicate whether to scan a range of ports or all ports.

    package main

    import (
        "flag"
        "fmt"
        "net"
        "os"
        "strings"
        "sync"
        "time"
    )

    // types used to indicate whether to scan a range of ports or all ports
    type portRange struct {
        startPort int
        endPort   int
    }

    type portAll struct {
        allPorts bool
    }



`portRange`: This type represents a range of ports that will be scanned by the program. It has two fields: `startPort` and `endPort`, which indicate the starting and ending ports of the range, This type is used when the user specifies a range of ports to scan using the `-s` (start port) and `-e` (end port) command-line options.

`portAll`: This type represents a flag that indicates whether to scan all available ports on the target host or not. It has a single field: `allPorts`, which is a boolean value that is set to true if the user specifies the `-a` (all ports) command-line option, indicating that all available ports on the target host should be scanned.

Next, the `scanPort` function takes a host name and a port number, attempts to establish a connection, and then sends an HTTP GET request to the server. If the connection is successful, it reads the response and retrieves the server banner by sending an HTTP HEAD request. It then formats the result and sends it to a channel for output.

    func scanPort(host string, port int, wg *sync.WaitGroup, results chan<- string, counter *int, mutex *sync.Mutex) {
        defer wg.Done()

        address := fmt.Sprintf("%s:%d", host, port)
        conn, err := net.DialTimeout("tcp", address, time.Second*30)
        if err != nil {
            return
        }
        defer conn.Close()

        fmt.Fprintf(conn, "GET / HTTP/1.0\r\n\r\n")
        response := make([]byte, 1024)
        _, err = conn.Read(response)
        if err != nil {
            return
        }

        // os banner grabbing
        banner := ""
        fmt.Fprintf(conn, "HEAD / HTTP/1.0\r\n\r\n")
        // Making sure that the servers os is sent back in the response.
        _, err = conn.Read(response)
        if err != nil {
            // if we fail to get the version, tell us that in the result
            banner = "[no version returned]"
        } else {
            // if we succeed to get version, let us know what version
            banner = strings.TrimSpace(string(response))
        }

        result := fmt.Sprintf("\n\nPort %d is open - %s - %s", port, banner, strings.TrimSpace(string(response)))
        mutex.Lock()
        *counter++
        mutex.Unlock()
        results <- result
    }

It takes in the following parameters:

`host`: the IP address or hostname of the host to be scanned.

`port`: the port number to be scanned.

`wg`: a pointer to a WaitGroup object which is used to wait for all goroutines to finish before exiting the program.

`results`: a channel that will be used to send the result of the scan to the main goroutine.

`counter`: a pointer to an integer that will be used to keep track of the number of ports that have been scanned.

`mutex`: a pointer to a Mutex object which is used to synchronize access to the counter variable.


The `scanAllPorts`/`scanPortRange` function scans all available ports within the given range asynchronously by calling the `scanPort` function for each port.

    func scanAllPorts(host string, startPort int, endPort int, wg *sync.WaitGroup, results chan<- string, counter *int, mutex *sync.Mutex) {
        // Logic to scan all available ports asynchronously
        for i := startPort; i <= endPort; i++ {
            wg.Add(1)
            go scanPort(host, i, wg, results, counter, mutex)
        }
    }

    func scanPortRange(host string, portRange portRange, wg *sync.WaitGroup, results chan<- string, counter *int, mutex *sync.Mutex) {
        // Logic to scan a range of ports asynchronously
        for i := portRange.startPort; i <= portRange.endPort; i++ {
            wg.Add(1)
            go scanPort(host, i, wg, results, counter, mutex)
        }
    }

## Main

The main function declares variables to store the command-line arguments, including the target host (`host`), the starting port (`startPort`), the ending port (`endPort`), and a boolean flag to determine whether to scan all ports (`allPorts`).


    var host string
    var pr portRange
    var pa portAll
    flag.StringVar(&host, "u", "localhost", "The host to scan")
    flag.IntVar(&pr.startPort, "s", 1, "The starting port to scan")
    flag.IntVar(&pr.endPort, "e", 100, "The ending port to scan")
    flag.BoolVar(&pa.allPorts, "a", false, "Scan all ports")
    flag.Parse()

It checks whether the `-a` flag is set to true. If it is, the program sets the `startPort` and endPort to 1 and 65535, to scan all available ports.


    if pa.allPorts {
        pr.startPort = 1   // start port
        pr.endPort = 65535 // end port
    }

It creates a wait group, a channel to receive the results of the port scans, a `mutex` to prevent race conditions, and a counter to keep track of the number of open ports.


    var wg sync.WaitGroup
    results := make(chan string)
    mutex := &sync.Mutex{}
    count := 0
    It starts a fixed number of workers (determined by numWorkers) to scan the ports asynchronously using the scanPort() function.


    numWorkers := 20 // number of threads

    // Logic to spawn off a fixed number of workers to scan ports
    portsPerWorker := (pr.endPort - pr.startPort) / numWorkers

    for i := 0; i < numWorkers; i++ {
        go func(workerId int) {
            // Logic to assign start/end ports for each worker to ensure no
            // port is scanned more than once
            for port := pr.startPort + (workerId * portsPerWorker); port < pr.startPort+((workerId+1)*portsPerWorker); port++ {
                wg.Add(1)
                go scanPort(host, port, &wg, results, &count, mutex)
            }
        }(i)
    }

It waits for all workers to finish using the `wg.Wait()` function and closes the results channel.


    go func() {
        wg.Wait()
        close(results)
    }()

Then retrieves the results from the channel and prints them to the console.

    fmt.Printf("Scanning ports...\n\n")
    for result := range results {
        fmt.Println(result)
    }

Finally, it prints the number of open ports found and exits the program with a status code of 0 (indicating a successful execution).

    fmt.Printf("\n\n%d open ports found\n", count)
    fmt.Println("Scan complete... \n\n ")
    os.Exit(0)
    That's it! The main() function of this program is responsible for parsing the command-line arguments, starting the port scanning process, and printing the results.


