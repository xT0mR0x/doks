---
title: "Create a socket connection"
description: ""
lead: ""
draft: false
images: []
weight: 110
toc: true
---

---

## What is a socket?
A socket is a software abstraction that allows programs to communicate with each other over a network. It is a combination of an IP address and a port number, which together identify a specific network connection between two machines.

In general, there are two types of sockets: TCP sockets and UDP sockets. TCP sockets are used for reliable, connection-oriented communication, while UDP sockets are used for fast, unreliable, connectionless communication.

## Lets Start!

So first, we import the socket library, which provides us with functions for creating and working with network sockets.


    import socket 

Next, we define a function called main() that will contain the main logic of our program.

Inside the `main()` function, we start by creating a new socket object called `s` using the `socket.socket()` function. We specify that we want to use the `AF_INET` protocol (IPv4) and the SOCK_STREAM socket type.


    def main():
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM) 
       

    if __name__ == '__main__':
        main()

Next step is to set the value of the host variable to 'localhost', which is a hostname that refers to the local machine.
We set the value of the port variable to 5000, which is the port number that we want to connect to on the local machine.


    def main():
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM) 
        host = 'localhost'
        port = 5000


    if __name__ == '__main__':
        main()


Now we can use the `connect_ex()` method of the s socket object to attempt to connect to the server at the specified host and port. The `connect_ex()` method returns a result code that indicates whether the connection was successful or not.

    def main():
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM) 
        host = 'localhost'
        port = 5000 
        result = s.connect_ex((host, port))
    


    if __name__ == '__main__':
        main()

Next, we print out the value of the result variable using the `print()` function, which formats the string with the value of result using the `format()` method.     

We close the socket connection using the s.close() method.

And finally, we check if the script is being run as the main program using the if __name__ == '__main__': statement, and if so, we call the main() function to run the program.


## Result

    def main():
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM) 
        host = 'localhost'
        port = 5000 
        result = s.connect_ex((host, port))
        print('Result is {}'.format(result))
        s.close()


    if __name__ == '__main__':
        main()


Congratulation! you created a socket connection 

 <a href="/docs/tutorials/pythonsecurity/portscanner.md/"> &rarr; Create a port scanner</a>
