---
title: "Advanced Commands"
description: ""
lead: ""
date: 2022-01-25T14:41:39+01:00
lastmod: 2022-01-25T14:41:39+01:00
draft: false
images: []
weight: 110
toc: true
---

---------------------------

## Users and Groups

List all users in the system and their primary group:

    awk -F: '{print $1, $4}' /etc/passwd

List all users and their respective group memberships:

    for user in $(awk -F: '{print $1}' /etc/passwd); do groups $user; done

List all users who belong to a specific group:

    getent group <groupname> | cut -d: -f4 | tr ',' '\n'

List all groups that a user belongs to:

    groups <username>

Create a new user and add them to a specific group:

    sudo useradd -m <username> && sudo usermod -aG <groupname> <username>

List all groups on the system along with the GID (group ID) and group members:

    awk -F: '{print "Group name: " $1 "\n" "GID: " $3 "\n" "Members: " $4 "\n"}' /etc/group

Count the number of users on the system:

    awk -F: 'END{print NR " users"}' /etc/passwd

Delete a user from the system along with their home directory and mail spool:

    sudo userdel -r <username>

Change the primary group of a user:

    sudo usermod -g <groupname> <username>


------------------------------------------

## Search

Find all files owned by a specific user in a directory and its subdirectories:
     
      find /path/to/directory -user username -print

Find all files modified in the last N days in a directory and its subdirectories:

      find /path/to/directory -type f -mtime -N -print

Find all empty files in a directory and its subdirectories:
     
      find /path/to/directory -type f -empty -print

Count the number of files in a directory and its subdirectories:
     
      find /path/to/directory -type f | wc -l

Delete all files with a specific extension in a directory and its subdirectories:
      
      find /path/to/directory -type f -name "*.ext" -delete


Find all files in a directory and its subdirectories that have 
not been accessed in the last 30 days and delete them:



    find /path/to/directory -type f -atime +30 -delete

Find all empty directories in a directory and its subdirectories 
and delete them:



    find /path/to/directory -type d -empty -delete

Find all files with a specific extension in a directory and its 
subdirectories and copy them to another directory:



    find /path/to/source -name '*.txt' -exec cp {} /path/to/
destination \;

Find all files in a directory and its subdirectories that are 
larger than a specific size and display their names and sizes:



    find /path/to/directory -type f -size +10M -exec ls -lh {} \;

Find all files in a directory and its subdirectories that were 
modified in the last 24 hours and compress them:

    find /path/to/directory -type f -mtime -1 -exec gzip {} \;

Search for a pattern in all files in the current directory and 
its subdirectories and display the matching lines with the file 
names:

    grep -rn 'pattern' .


Search for a pattern in all files in the current directory and 
its subdirectories and display the matching lines with the file 
names and line numbers:



    grep -rni 'pattern' .

Find all files in a directory and its subdirectories that have a 
specific owner and group and change their permissions:



    find /path/to/directory -user username -group groupname -exec 
    chmod 644 {} \;

Search for a pattern in a file and display the line numbers:

    grep -n 'pattern' file.txt

Search for a pattern in all files in the current directory and its subdirectories and display the matching lines:


    grep -r 'pattern' .

Search for a pattern in all files with a specific extension in the current directory and its subdirectories and display the matching lines:


    grep -r 'pattern' --include='*.txt' .

----------------------------------

## System Information

Display the top 10 processes consuming the most memory:
    
    ps aux --sort=-%mem | head -n 11
Display the amount of free memory in gigabytes:
    
    free -h | awk '/Mem:/ {print $4 " free"}'

Display the amount of free disk space in gigabytes for each mounted filesystem:
    
    
    df -h --output=source,size,avail | awk '{print $1 " " $2 " " $3}'


Display the operating system name and version:

    uname -sr

Display the processor architecture:

    uname -m

detailed information about the system including the kernel version, hostname, machine hardware name, processor type, operating system name, and other system related details

    uname -a


Display the number of CPU cores:

    grep -c ^processor /proc/cpuinfo

Display the total amount of RAM in GB:

    free -h | awk '/^Mem:/ {print $2}'

------------------------------

## System Management

Check if a specific port is open on a remote host:
   
    nc -zv <hostname> <port>

Monitor a log file in real-time and display new entries as they are added:
    
    tail -f /path/to/logfile

Display a list of all installed packages on Debian-based systems:
  
    dpkg-query -W -f='${Package}\n' | sort

Create a compressed tar archive of a directory:
  
    tar -czvf archive.tar.gz /path/to/directory

Extract the contents of a compressed tar archive:
  
    tar -xzvf archive.tar.gz

--------------------------------------

## Networking

Monitor network traffic in real-time using tcpdump:

    sudo tcpdump -i <interface> -n -v -w /path/to/output.pcap

Find the IP address of a specific hostname using dig:

    dig +short <hostname>

Create an SSH tunnel to forward traffic from a local port to a remote port:

    ssh -L <localport>:<remotehost>:<remoteport> <username>@<sshserver>

Scan a range of IP addresses for open ports using nmap:

    nmap -p <port> <iprange>

Transfer a file securely between two hosts using scp:

    scp /path/to/localfile <username>@<remotehost>:/path/to/remote/location

### Firewall

Display the current status of the firewall:

    systemctl status firewalld

List all rules in the firewall:

    firewall-cmd --list-all

Add a new rule to allow incoming traffic on a specific port:

    firewall-cmd --add-port=8080/tcp --permanent && firewall-cmd --reload

Add a new rule to block incoming traffic on a specific port:

    firewall-cmd --add-rich-rule='rule family="ipv4" source address="192.168.1.0/24" port port="22" protocol="tcp" reject' --permanent && firewall-cmd --reload

Delete a rule from the firewall:

    firewall-cmd --remove-port=8080/tcp --permanent && firewall-cmd --reload

Flush all rules from the firewall:

    firewall-cmd --flush && firewall-cmd --reload

Display the current status of the iptables firewall:

    iptables -L -n

Block all incoming traffic from a specific IP address using iptables:

    iptables -A INPUT -s 192.168.1.100 -j DROP

Block all incoming traffic on a specific port using iptables:

    iptables -A INPUT -p tcp --dport 8080 -j DROP

Allow incoming traffic on a specific port using iptables:

    iptables -A INPUT -p tcp --dport 22 -j ACCEPT

Block all incoming traffic except on specific ports using iptables:

    iptables -A INPUT -p tcp ! --dports 22,80,443 -j DROP

Display the current NAT rules in iptables:

    iptables -t nat -L -n

Add a new NAT rule to forward traffic from a specific port to a specific IP address and port:

    iptables -t nat -A PREROUTING -p tcp --dport 8080 -j DNAT --to-destination 192.168.1.10:80

Delete a NAT rule from iptables:

    iptables -t nat -D PREROUTING 1
