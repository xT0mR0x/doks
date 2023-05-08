---
title: "Basic Linux Commands"
description: ""
lead: ""
date: 2022-01-25T14:41:39+01:00
lastmod: 2022-01-25T14:41:39+01:00
draft: false
images: []
type: docs
weight: 100
toc: true
---



------------------------------------------------------------------

## Processes


**`ps`** -     Lists the running processes on the system.

**`top`** -      Shows system resource usage, including running processes.

**`pgrep`** -        Finds the process ID of a running process based on its name.

**`kill`** -      Terminates a running process.

**`pkill`** -       Terminates one or more running processes based on their name.

**`killall`** -           Terminates all running processes with a given name.

**`nice`** -       Changes the priority of a process.

**`renice`** -         Changes the priority of a running process.

**`top`** -    Shows system resource usage, including running processes.

**`htop`** -     Shows system resource usage, including running processes, in a more interactive and colorful way than top.

**`ps aux`** -         Lists all running processes on the system, including those started by other users.

**`pstree`** -         Shows a tree of running processes.

**`lsof`** -      Lists open files associated with a process.

**`strace`** -         Traces system calls and signals of a running process.

**`uptime`** -         Shows the system load and uptime.

-------------------------------------------------------------------

## Users and Groups

**`useradd`** - Creates a new user account.

**`userdel`** - Deletes a user account.

**`passwd `** - Changes the password for a user account.

**`usermod`** - Modifies user account settings.

**`groupadd`** - Creates a new group.

**`groupdel`** - Deletes a group.

**`groupmod`** - Modifies group settings.

**`adduser `** -  Creates a new user account.

**`deluser `** -  Deletes a user account.

**`addgroup`** -   Creates a new group.

**`delgroup`** -   Deletes a group.

**`id`** - Displays user and group information.

**`groups`** - Shows the groups a user belongs to.

**`newgrp`** - Changes the current group.

### crontab

[!] cron is a time-based job scheduler in Unix-like operating systems, including Linux. It allows users to schedule jobs or commands to run periodically at specific times or intervals.
crontab is a command-line utility used to manage cron jobs. It allows users to create, edit, and delete cron jobs in their user-specific crontab files.
Cron jobs are useful for automating routine tasks or running scheduled maintenance jobs, such as backups, updates, or data processing.

**`crontab -e`** - Edits the user's crontab file.

**`crontab -l`** - Lists the user's crontab file.

**`crontab -r`** - Removes the user's crontab file.

**`crontab -u username -e`** - Edits another user's crontab file as root.

**`crontab -u username -l`** - Lists another user's crontab file as root.

**`crontab -u username -r`** - Removes another user's crontab file as root.

**`crontab -c directory`** - Specifies the directory where the crontab files are stored.

-------------------------------------------------------------------------

## Networking


**`ifconfig`** - display information about network interfaces on the system, such as IP address, netmask, and MAC address.

**`ip`** - a more modern command that replaces ifconfig, which can be used to configure network interfaces, routes, and tunnels.

**`ping`** - send ICMP packets to a host to check its availability and response time.

**`traceroute`** - trace the route taken by packets from the local host to a remote host 
showing the network hops along the way.

**`netstat`** - display network connections, routing tables, and interface statistics.

**`ss`** - a newer command that provides similar functionality to netstat, but with a faster and more efficient implementation.

**`route`** - display or manipulate the IP routing table.

**`host`** - resolve a hostname to its IP address, or vice versa.

**`dig`** - a DNS lookup utility that provides detailed information about DNS queries and responses.

**`nslookup`** - another DNS lookup utility that is simpler and more user-friendly than dig.

**`arp`** - display or modify the ARP cache, which maps IP addresses to MAC addresses.

**`iwconfig`** - display or configure wireless network interfaces and settings.

**`iwlist`** - display wireless networks in range and their properties.

**`iptables`** - a powerful tool for configuring and managing firewall rules and NAT settings.

**`tcpdump`** - capture and analyze network traffic in real time.

**`nc`** - a versatile utility for networking tasks, such as creating TCP/UDP connections, sending and receiving data, and port scanning.

**`curl`** - a command-line tool for transferring data from or to a server using various protocols, such as HTTP, FTP, and SMTP.

**`wget`** - a similar tool to curl that downloads files from the web using HTTP, HTTPS, and FTP.

**`ssh`** - connect to a remote server securely using the SSH protocol.

**`scp`** - transfer files between hosts over SSH.

**`sftp`** - a secure alternative to FTP for transferring files over SSH.

**`telnet`** - a basic tool for connecting to a remote server over a network, but with limited security and encryption features.

**`ncat`** - an improved version of nc with added features, such as SSL encryption and 

**`proxy`** - support.

**`ifup/ifdown`** - bring up or down a network interface, respectively.

**`nmcli`** a command-line tool for managing NetworkManager, a service that provides network configuration and connection management.

**`mtr`** - a network diagnostic tool that combines the functionality of ping and traceroute, showing the latency and loss rate of each network hop.

**`iftop`** - display network traffic in real time, sorted by the amount of data transferred per interface.

**`nmap`** - a powerful network scanner and mapper that can be used for security testing and network exploration.

**`iptraf`** - a console-based network monitoring utility that provides various statistics and charts on network traffic.

**`tc`** - a tool for configuring advanced traffic control settings, such as bandwidth throttling, packet filtering, and QoS.

**`ssldump`** - capture and analyze SSL/TLS traffic in real time.

**`socat`** - a versatile tool for creating various types of network connections, such as TCP/UDP clients and servers, SSL tunnels, and port forwarders.

**`dnstracer`** - trace the path of DNS queries from the local host to the authoritative server, showing the DNS servers along the way.

**`dnswalk`** - a DNS diagnostic tool that checks for common DNS misconfigurations and security issues.

**`hping3`** - a command-line packet crafting and analysis tool that can send various types of packets, such as ICMP, TCP, and UDP, with custom headers and payloads.

**`ipset`** - a tool for managing large sets of IP addresses or port numbers, used for efficient firewall rules and routing.

**`netcat`** - a networking tool that can be used for various tasks, such as creating TCP/UDP connections, sending and receiving data, and port scanning.

**`arping`** - send ARP packets to a host to check its availability and MAC address.

**`iftunnel`** - create a tunnel interface between two hosts, allowing traffic to be routed over an intermediate netwrok.


**`ethtool`** - display or modify the settings of network interfaces, such as speed, duplex, 
and flow control.

**`ipmiutil`** - a collection of utilities for managing IPMI (Intelligent Platform Management 
Interface) devices, such as servers and network appliances.

**`ngrep`** - a command-line network packet analyzer that can filter and search for packets 
based on various criteria, such as protocol, port, and payload.

**`tcpflow`** - capture and store TCP streams between hosts, allowing them to be analyzed or 
reconstructed later.

**`pktstat`** - display statistics on packet traffic, showing the number and size of packets sent and received per interface.

**`siege`** - a HTTP and HTTPS load testing and benchmarking tool, used for measuring the performance and scalability of web servers and applications.


###### [!] Note that some of these commands require administrative privileges to run, and may not be installed on your system by default. You may need to install them using your package manager or from the source code.

--------------------------------------

## Directory

**`cd`** - change the current working directory

**`pwd`** - display the current working directory

**`mkdir`** - create a new directory

**`rmdir`** - remove an empty directory

**`ls`** - list the files and directories in the current directory.

**`ls -l`** - list the files and directories in long format, showing permissions, ownership, size, and modification time.

**`ls -a`** - list all files and directories, including hidden files and directories.

**`ls -lh`** - list the files and directories in long format, showing size in a human-readable format.

**`ls -h`** - list the files and directories with file sizes in a human-readable format.

-------------------------------------------------------------

## Files
 
**`cat`** - concatenate files and display the output

**`head`** - display the first few lines of a file

**`tail`** - display the last few lines of a file

**`less`** - Displays the contents of a file one page at a time.

**`cp`** - copy files or directories

**`mv`** - move or rename files or directories

**`rm`** - remove files or directories

**`ln`** - create hard or symbolic links between files or directories

**`touch`** - create an empty file or update the modification time of an existing file

**`diff`** - compare two files line by line

**`sed`** - stream editor for filtering and transforming text

------------------------------------

## Permission
In Linux, permissions can be set for three categories of users: the owner of the file or directory, the group that the file or directory belongs to, and everyone else. Each category can be granted three permissions: read, write, and execute. 

To modify file permissions in Linux, you can use the `chmod` command followed by a sequence of numbers or letters that indicate the desired permissions. Here are the permission commands:

### Numeric representation:

| Permission | Numeric Value | Description |
|------------|---------------|-------------|
| `---` | 0 | No permission |
| `--x` | 1 | Execute permission |
| `-w-` | 2 | Write permission |
| `-wx` | 3 | Write and execute permission |
| `r--` | 4 | Read permission |
| `r-x` | 5 | Read and execute permission |
| `rw-` | 6 | Read and write permission |
| `rwx` | 7 | Read, write, and execute permission |


- To grant **read, write, and execute** permissions to the owner of a file or directory: `chmod 700 file/directory_name`

- To grant **read and execute** permissions to the owner of a file or directory: `chmod 500 file/directory_name`

- To grant **read and write** permissions to the owner of a file or directory: `chmod 600 file/directory_name`

- To grant **read, write, and execute** permissions to the owner of a file or directory, **read and execute** permissions to the group, and no permissions to everyone else: `chmod 750 file/directory_name`

- To grant ***read and execute** permissions to the owner of a file or directory, **read and execute** permissions to the group, and read-only permissions to everyone else: `chmod 755 file/directory_name`

- To grant **read, write, and execute** permissions to the owner of a file or directory, **read and execute** permissions to the group and to everyone else: `chmod 777 file/directory_name`

### Symbolic representation:

| Permission | Symbolic Value |
|------------|----------------|
| `r` | read permission | 
| `w` | write permission |
| `x` | execute permission |
| `u` | owner |
| `g` | group |
| `o` | others |


**`chmod`** - change the permissions of files or directories

**`chown`** - change the ownership of files or directories

**`chgrp`** - change the group ownership of a file or directory

**`umask`** - set the default file permission mask for new files and directories created by the user

**`setfacl`** - set file access control lists (ACLs) for a file or directory, allowing more fine-grained permissions beyond the traditional owner/group/world permission model

### Privileges


**`sudo`** - Executes a command with superuser privileges.

**`su`** - Switches to another user account or to the superuser account.

**`chroot`** - Changes the root directory for a process.

**`setuid`** -  Sets the user ID on execution for a program.

**`setgid`** - Sets the group ID on execution for a program.

**`umask-`** - Sets the default file permissions for newly created files.

**`visudo`** - Edits the sudoers file, which controls access to the sudo command.

**`passwd`** - Changes the password for a user account.

**`gpasswd `** -  Modifies group passwords.


----------------------------------------

## Search
**`find`** - search for files or directories based on various criteria

**`grep`** - search for text patterns in files or directories

**`egrep`** - search for text using extended regular expressions

**`fgrep`** - search for text in fixed strings

**`ack`** - a tool like grep, optimized for programmers

**`ag`** - another tool like grep, optimized for searching large code repositories size, and modification time

**`locate`** - search for files and directories by name

**`whereis`** - find the location of a binary, source code, and manual page files

**`which`** - locate the executable file associated with a given command

-------------------------------------------

## Compression and Extraction

**`tar`** - create or extract compressed archive files

**`zip`** - create or extract compressed archive files in ZIP format

**`unzip`** - extract files from ZIP archives

**`gzip`** - compress or decompress files using the GZIP format

**`bzip2`** - compress or decompress files using the BZIP2 format

-----------------------------------------------

## Package Management

**`dpkg`** - a package manager for Debian-based Linux distributions, used to install, remove, and manage individual software packages.

**`apt-get`** - a command-line tool used to manage packages on Debian-based Linux distributions, used to install, remove, and upgrade software packages.

**`yum`** - a command-line tool used to manage packages on Red Hat-based Linux distributions, used to install, remove, and upgrade software packages.

**`rpm`** - a package manager for Red Hat-based Linux distributions, used to install, remove, and manage individual software packages.

**`dnf`** - a command-line tool used to manage packages on Red Hat-based Linux distributions, used to install, remove, and upgrade software packages.

**`snap`** - a package management system used in some Linux distributions to manage and install applications.

---------------------------------------------