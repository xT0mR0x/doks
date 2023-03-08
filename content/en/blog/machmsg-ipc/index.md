---
title: "machmsg IPC programming (Objective C)"
description: 
excerpt: "Objective C server/client IPC by Tom Rosenzweig"
date: 2023-03-06T19:41:26+02:00
lastmod: 2023-03-06T19:41:26+02:00
draft: false
weight: 100
images: [72c80fd384e13fe59401a3fc3671893c3.jpg]
categories: ""
tags: ""
contributors: ""
pinned: false
homepage: false
---


## XNU Mach Message IPC

As part of an assigned task, I delved into several methods utilized for inter-process communication on XNU kernel. Despite lacking prior familiarity with Objective-C, I dedicated myself to researching and mastering it from scratch. I welcome any constructive feedback or suggestions to enhance my findings.

#### The assignment:

[!] Design the following Server/Client IPC.

Server:
	
	This server has two functionalities
		- save data sent by another process
		- send data back to process

	Other requirements:

		- Visible by other processes
			[h] bootstrap_check_in
		- Cannot be blocked by a single client
		- Communication through mach messaging
			[h] ports, RECV, SEND
		- Send/receive data up to 1024 bytes
Client:
	
	the client should be able to

		- find the server
		- send data to server
		- receive data back from server
		- check that the data is the same

------------------------------------------------------------

## XNU Kernel
The XNU kernel is the core operating system component used in macOS, iOS, tvOS, and watchOS. XNU is an acronym that stands for "X is Not Unix," and it is the result of the merger between the Mach microkernel and elements of the BSD operating system. XNU provides essential system services such as memory management, process management, security, and hardware abstraction.

## Mach IPC
Mach IPC (Inter-Process Communication) is a messaging system used to exchange data between different processes within the operating system. It is an integral part of the XNU kernel and is implemented using Mach message passing. Mach IPC is designed to be flexible and adaptable for passing messages between any two ports, whether local or remote.

## machmsg
machmsg is the core building block of Mach's IPC, designed to pass between any two ports, whether local or remote. Tasks send messages to ports, and the messages are delivered and received in the order they were sent.

----------------------------------

### Server:
## Message Structure:
A message consists of a header and a variable amount of typed data. The header contains the destination and size of the message.

	typedef struct {
	mach_msg_header_t header;
	char Message_Body[1024];
	int Message_Size;
	}Message;

	typedef struct {
	Message message;
	mach_msg_trailer_t trailer;
	} ReceiveMessage;

## Port Rights:
Tasks operate on a port to send and receive messages by getting rights for the port. A task can hold send rights for a port, allowing them to send a single message. Only one task can hold the receive capability, also known as the receive right, for a port. Port rights can be transferred between tasks via messages.


The **`send_reply`()** routine takes two arguments: a **`mach_port_name_t`** which is a name of a Mach port to send the response to, and a pointer to a Message structure containing the original message. The routine creates a new Message structure called response to hold the response to the original message. It sets several fields in the header of the response message, including the remote port to which the message should be sent, the message ID, and the size of the message. It also sets the **`Message_Size`** field and copies the message body from the original message to the response message. Finally, it sends the response message using the **`mach_msg()`** function and returns the result of the function.

	// Server response routine:
	mach_msg_return_t send_reply(mach_port_name_t port, const Message *Message1) {
	Message response = {0};
	response.header.msgh_bits =
	Message1->header.msgh_bits & MACH_MSGH_BITS_REMOTE_MASK;
	response.header.msgh_remote_port = port;
	response.header.msgh_id = Message1->header.msgh_id;
	response.header.msgh_size = sizeof(response);
	response.Message_Size = Message1->Message_Size << 1;
	strcpy(response.Message_Body, Message1->Message_Body);
		
	return mach_msg(
		/* msg */ (mach_msg_header_t *)&response,
		/* option */ MACH_SEND_MSG,
		/* send size */ sizeof(response),
		/* recv size */ 0,
		/* recv_name */ MACH_PORT_NULL,
		/* timeout */ MACH_MSG_TIMEOUT_NONE,
		/* notify port */ MACH_PORT_NULL);
	}

## Receive Right Transfer:
If a message contains a receive right for a port, then the receive right is removed from the sender and transferred to the receiver of the message. During the transfer, tasks holding send rights can still send messages to the port, and the messages form a queue until a task acquires the receive right and uses it to receive the messages.


The **`receive_msg()`** routine takes two arguments: a **`mach_port_name_t`** which is the name of the port to receive messages on, and a pointer to a ReceiveMessage structure to hold the received message. The routine calls **`mach_msg()`** to receive a message on the specified port. It sets the option to **`MACH_RCV_MSG`**, indicating that it wants to receive a message. It also specifies the size of the receive buffer and sets the timeout to **`MACH_MSG_TIMEOUT_NONE`**, indicating that the routine should wait indefinitely for a message. If **`mach_msg()`** returns a result other than **`MACH_MSG_SUCCESS`**, the routine returns the result code. Otherwise, it returns **`MACH_MSG_SUCCESS`**.


	// Message retrieval routine:
	mach_msg_return_t
		receive_msg(mach_port_name_t recvPort, ReceiveMessage *buffer) {
		mach_msg_return_t ret = mach_msg(
		/* msg */ (mach_msg_header_t *)buffer,
		/* option */ MACH_RCV_MSG,
		/* send size */ 0,
		/* recv size */ sizeof(*buffer),
		/* recv_name */ recvPort,
		/* timeout */ MACH_MSG_TIMEOUT_NONE,
		/* notify port */ MACH_PORT_NULL);
	if (ret != MACH_MSG_SUCCESS) {
		return ret;
	}

Conclusion:
Overall, Mach IPC is a robust and flexible method for inter-process communication on MacOS XNU kernel, and understanding the concepts of port rights and receive right transfer is essential for effective communication between tasks.


Some of the resources that I used which was really helpful: 
- Objective-C Essential Training on linkedin course
- Apple developer website
- IOS - EEZY TUTORIALS - https://eezytutorials.com/ios/nsfilemanager-by-example.php#.Y5ByPS8RqrA
- Damian Malarczyk Mach_msg tutorial - https://dmcyk.xyz