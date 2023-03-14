---
title: "Create a port scanner"
description: ""
lead: ""
draft: false
images: []
weight: 120
toc: true
---

---

This script is a port scanner that uses the socket library to check if ports are open on a given IP address. The script consists of a Scanner class that contains methods for scanning and writing results to a file, as well as a main function that instantiates the Scanner object and executes the scan.

Here is a step-by-step guide to understanding this script:

The script starts with importing two libraries:

    import socket
    from utils import timefunc

timefunc is a decorator that measures the time taken by a function to execute.

The Scanner class is defined next:

---


```python
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
        result = s.connect_ex((self.ip, port))
        s.close()
        return result == 0

    def write(self, filepath):
        openport = map(str, self.open_ports)
        with open(filepath, 'w') as f:
            f.write('\n'.join(openport))
 ```

The __init__ method initializes the object with an IP address and an empty list of open ports.

The __repr__ method returns a string representation of the object.

The **add_port** method adds a port number to the list of open ports.

The scan method loops through a range of ports and calls the is_open method to check if each port is open. If the port is open, it adds the port number to the list of open ports using the **add_port** method.

The **is_open** method creates a socket object and attempts to connect to the IP address and port number. If the connection is successful, it returns True, else it returns False.

The **write** method writes the list of open ports to a file.
Define the Main Function

**The main function is defined next:**

---

    @timefunc
    def main():
        ip = '10.0.13.231'
        scanner = Scanner(ip)
        scanner.scan(1, 65000)
        scanner.write('./open_ports')


The **@timefunc** decorator is used to measure the time taken by the main function to execute.

The **ip** variable is set to the IP address to be scanned.

An instance of the **Scanner** class is created and assigned to the **scanner** variable.
The scan method of the **Scanner** object is called with the range of ports to be scanned.

The write method of the **Scanner** object is called to write the list of open ports to a file.

Execute the Main Function

**The script ends with:**

    if __name__ == '__main__':
    main()



## Result

    import socket
    from utils import timefunc

    class Scanner:
        def __init__(self, ip):
            self.ip = ip
            self.open_ports = [];

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
            result = s.connect_ex((self.ip, port))
            s.close()
            return result == 0

        def write(self, filepath):
            openport = map(str, self.open_ports)
            with open(filepath, 'w') as f:
                f.write('\n'.join(openport))

    @timefunc
    def main():
        ip = '10.0.13.231'
        scanner = Scanner(ip)
        scanner.scan(1, 65000)
        scanner.write('./open_ports')

    if __name__ == '__main__':
        main()




## Example Usage

To scan an IP address, update the ip variable in the main function:

ip = '192.168.1.1'

<br>
 <a href="/docs/tutorials/pythonsecurity/grabber/"> Banner reading from open ports &rarr; </a>