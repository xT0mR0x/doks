---
title: "Python Scanner"
description: 
excerpt: "Port Scanner written in Python"
date: 2022-11-02T19:41:26+02:00
lastmod: 2023-03-06T19:41:26+02:00
draft: false
weight: 100
images: []
categories: ""
tags: ""
contributors: ""
pinned: false
homepage: false
---

---

<br>
 
## Overview 

I wrote a simple python script that scans for open ports on a given IP address, using the socket library to establish connections to the IP address and check for open ports. the program will then print out any open ports and retrieve any data available on those ports using the Grabber class. let's break it down!

You can check my GitHub repository for the full script --> [here](https://github.com/xT0mR0x/python_pentesting/tree/main/port_scanner)

## What is a Socket?

A socket is a low-level programming interface used for communication between computers over a network. It allows programs to send and receive data across the network, using either the TCP or UDP protocols. In Python, the socket library provides a set of tools for working with sockets, making it possible to create and use network sockets in your programs. With sockets, you can create client-server applications, transfer files, send messages, and more.

Let's start by importing the socket module

      import socket

## Scanner
Next, we define the Scanner class which has the following methods:


`__init__`: The constructor method that sets the target ip and initializes an empty `open_ports` list.

`__repr__`: The string representation of the object.

`add_port`: Method for adding a port to the `open_ports` list.

`scan`: Method that scans the IP address for open ports in a given range of ports.

`is_open`: Method that checks whether a given port is open or not by attempting to connect to it using a TCP socket connection.
    
    
    class Scanner:
        def __init__(self, ip):
            self.ip = ip
            self.open_ports = []

        def __repr__(self):
            return 'Scanner: {}'.format(self.ip)

        def add_port(self, port):
            self.open_ports.append(port)

        def scan(self, lowerport, upperport):
            for port in range(lowerport, upperport + 1):
                if self.is_open(port):
                    self.add_port(port)

        def is_open(self, port):
            s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            s.settimeout(0.3)
            try:
                result = s.connect_ex((self.ip, port))
                if result == 0:
                    return True
                else:
                    return False
            except socket.error:
                return False
            finally:
                s.close()


`is_open` creates a new socket object using the `socket.socket()` method and specifying the socket family (`AF_INET`) and socket type (`SOCK_STREAM`). This socket will be used to establish a connection with the target IP address on the given port.

It sets a timeout of 0.3 seconds and tries to establish a connection using `connect_ex()`. If successful, it returns True, otherwise, it returns False. If an exception occurs, it catches the error and returns False. Finally, regardless of whether the connection attempt was successful or not, the method closes the socket connection using the `close()` method of the socket object. This is done in a finally block to ensure that the socket is always closed, even if an exception is thrown. 


## Grabber
the Grabber class is used to read data from the connection. the `read` method is used to read data from the socket. It takes an optional parameter `length`, which specifies the maximum number of bytes to read. If `length` is not specified, it defaults to 1024 bytes.
`self.socket.recv(length)` reads up to length bytes of data from the socket.
If the read operation fails due to a socket error, an empty byte string is returned.
    
    class Grabber:
    
        def __init__(self, ip, port):
            self.ip = ip
            self.port = port
            self.socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            self.socket.settimeout(0.3)
            try:
                self.socket.connect((self.ip, self.port))
            except socket.error:
                self.socket.close()

        def read(self, length=1024):
            try:
                return self.socket.recv(length)
            except socket.error:
                return b''

        def close(self):
            self.socket.close()

## Main

The `main()` function is the entry point of the script. It first sets the IP address to 'localhost' and prints a message indicating that a connection has been established. It then creates an instance of the Scanner class with the given IP address and starts a scan for open ports using the `scan()` method, which takes two arguments: `start_port` and `end_port`.

    def main():
        ip = 'localhost'
        print("\nConnection established")
        print("\nScan running...\n")
        scanner = Scanner(ip)
        scanner.scan(1, 65000)

        if len(scanner.open_ports) == 0:
            print("No open ports found")
        else:
            print(f"{len(scanner.open_ports)} open ports has been detected:\n")
            for port in scanner.open_ports:
                try:
                    grabber = Grabber(ip, port)
                    response = grabber.read()
                    if response:
                        print(f"{port} : {response.decode().strip()}\n")
                    else:
                        print(f"{port} : No response\n")
                    grabber.close()
                except socket.error:
                    print(f"{port} : Unable to connect\n")

        print("Scan finished")

    if __name__ == '__main__':
        main()

Finally, the `close()` method is called on the Grabber object to close the socket connection. If an exception of type socket.error is raised while attempting to connect to a port, a message indicating that the connection was unable to be established is printed.

After the loop has completed, a message indicating that the scan has finished is printed.

The if `__name__ == '__main__':` statement at the end of the script ensures that the `main()` function is only executed if the script is run directly and not if it is imported as a module.

**[ ! ]** It's important to note that while this script serves as a simple example of port scanning and data retrieval, it may not be effective against more advanced security measures or detection systems. It's also worth emphasizing that the use of such a script for unauthorized or illegal purposes is not condoned and may result in serious consequences. This script is intended for educational purposes only, and caution should be exercised when using it for any legitimate testing or analysis.


## Output
Here is an example output of the main() function:
    
    Connection established

    Scan running...

    8 open ports has been detected:

    22 : SSH-2.0-OpenSSH_7.9p1 Debian-10+deb10u2
    80 : HTTP/1.1 400 Bad Request
    443 : 
    10000 : No response
    12345 : No response
    20000 : No response
    40000 : Unable to connect
    65000 : No response

    Scan finished
