---
title: "Banner reading from open ports"
description: ""
lead: ""
draft: false
images: []
weight: 130
toc: true
---

---

## What is Banner reading?

Banner reading is the process of retrieving information about a remote system by connecting to one of its open ports and inspecting the response that is sent back. This is typically done by sending a request to the port, and then analyzing the response received.

In the context of network security, banner reading is often used as a reconnaissance technique to gather information about a target system. By examining the information provided in the banner or response, an attacker may be able to determine the operating system, web server software, version numbers, and other details about the system. This information can be used to identify vulnerabilities in the system that can be exploited to gain unauthorized access.

## What is a Grabber?

A grabber is a software tool that is used to extract or "grab" data from a network source, typically a website or a server. In this script, the Grabber class is used to connect to a server at a specified IP address and port, read data from that server, and then close the connection.

Here are the steps in the code:

Import the socket module and the timefunc from the utils module.

    from utils import timefunc
    import socket

Define a class called "Grabber" that has three methods: init(), read(), and close().

    class Grabber:
        def __init__(self, ip, port):
            self.ip = ip
            self.port = port
            self.socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            self.socket.settimeout(0.3)
            self.socket.connect((self.ip, self.port))

        def read(self, length=1024):
            return self.socket.recv(length)

        def close(self):
            self.socket.close()

The **init()** method is called when an instance of the Grabber class is created. It takes two arguments: the IP address of the server to connect to and the port number to use. It creates a socket object, sets a timeout of 0.3 seconds, and connects to the specified server and port.

The **read()** method reads data from the socket and returns it. It takes an optional argument "length" that specifies the maximum amount of data to read at once (defaulting to 1024 bytes).

The **close()** method closes the socket connection.

Define a **main()** function that creates an instance of the Grabber class, reads data from the socket using the **read()** method, and then closes the socket using the **close()** method.
python

    def main():
        grabber = Grabber('10.0.13.231', 22)
        print(grabber.read())
        grabber.close()

The main() function creates an instance of the Grabber class, passing in the IP address "10.0.13.231" and port number 22. It then calls the **read()** method to read data from the socket and prints the result. Finally, it calls the **close()** method to close the socket connection.

Check if the script is being run as the main program (i.e., not imported as a module) and call the **main()** function if it is.


    if __name__ == '__main__':
        main()


## Result

    from utils import timefunc
    import socket

    class Grabber:
        def __init__(self, ip, port):
            self.ip = ip
            self.port = port
            self.socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            self.socket.settimeout(0.3)
            self.socket.connect((self.ip, self.port))

        def read(self, length=1024):
            return self.socket.recv(length) 

        def close(self):
            self.socket.close() 


    def main():
        grabber = Grabber('10.0.13.231', 22)
        print(grabber.read())
        grabber.close()

    if __name__ == '__main__':
        main()


## Grab and scan!

Let's perform a port scan on a target IP address and then attempt to read the banner information from any open ports that are discovered. Here's a step-by-step guide on how this script works:

Import necessary modules: The script begins by importing two modules: timefunc, which is defined in a separate utils module, and two custom modules Scanner and Grabber.

    from utils import timefunc
    from port_scanner import Scanner
    from grabber import Grabber

Define the main() function: The main() function is the entry point for the program. It is decorated with the timefunc decorator, which is used to measure the execution time of the function.

@timefunc
def main():
    # code here

Set the IP address and port range: The IP address of the target system and the port range to be scanned are defined as variables.

    ip = '10.0.13.231'
    portrange = (1, 6001)

Create a Scanner object and perform a port scan: A Scanner object is created with the target IP address and then a scan is performed on the specified port range using the scan() method of the Scanner class. The results of the scan are stored in the open_ports attribute of the Scanner object.

    scanner = Scanner(ip)
    scanner.scan(*portrange)

Loop through open ports and attempt banner reading: A for loop is used to iterate over the open_ports list of the Scanner object. Within the loop, a try block is used to attempt to create a Grabber object and read the banner information from the port using the read() method. If an exception occurs, the error message is printed to the console.

    for port in scanner.open_ports:
        try:
            grabber = Grabber(ip, port)
            print(grabber.read())
            grabber.close()
        except Exception as e:
            print("Error", e)

Run the main() function: The if `__name__` == `'__main__'` block ensures that the main() function is only executed if the script is run directly (as opposed to being imported as a module).

    
## Result 

    from utils import timefunc
    from port_scanner import Scanner
    from grabber import Grabber


    @timefunc
    def main():
        ip = '10.0.13.231'
        portrange = (1, 6001)
        scanner = Scanner(ip)
        scanner.scan(*portrange)
        for port in scanner.open_ports:
            try:
                grabber = Grabber(ip, port)
                print(grabber.read())
                grabber.close()
            except Exception as e:
                print("Error", e)


    if __name__ == '__main__':
    main()

Here's an example of what the output might look like when this script is run:

    Port 22 is open
    SSH-2.0-OpenSSH_7.6p1 Ubuntu-4ubuntu0.3
    Error timed out

In this example, the script has discovered that port 22 is open on the target system and has successfully read the SSH banner from that port. However, when attempting to read the banner from another port, the script has encountered a timeout error.

<br>
 <a href="/docs/tutorials/pythonsecurity/sshbruteforce/"> Brute forcing an SSH connection &rarr;</a>