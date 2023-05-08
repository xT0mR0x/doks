---
title : "Boiler CTF" 
draft: false
images: []
---

 <img src="boiler.png" width=100%>

~ ***by Tom Rosenzweig***

---

# Questions #1

---

## File extension after anon login

**Method**

First of all, let's starts with an nmap scan. 

    nmap -sC -sV -p- 10.10.190.117


-sC : Run the default set of scripts that are associated with the most commonly used ports.

-sV : Perform version detection on open ports.

-p- : All ports

<br><br>

![](nmap.png)

<br><br>

As the scan results show, port 21 is open and running an FTP service that allows anonymous login. Three other ports are also open:


80: Apache httpd

10000: Miniserv (Webmin httpd)

55007: SSH (Usually runnnig on port 22)

<br><br>

To answer the first question we need to log in to the FTP server, via anonymous user (no password)<br>

    ftp 10.10.190.117

<br><br>

![](ftp.png)    

<br><br>

We can see the file extantion for the first question.<br>
and this text: "Whfg jnagrq gb frr vs lbh svaq vg. Yby. Erzrzore: Rahzrengvba vf gur xrl!" <br> it's meant to throw you off. you can decrypt it with ROT 13:<br> 
<br><br>

![CyberChef](rot13.png) --> [CyberChef](https://gchq.github.io/CyberChef/)

<br>

  **Answer** : txt

<br>

## What is on the highest port?

 **Answer** : ssh

<br>

## What's running on port 10000?

 **Answer**: webmin

<br>

## Can you exploit the service running on that port? (yay/nay answer)
<br>

**Method**

I went to 10.10.190.117:10000<br>
Nothing interesting there and it seems to be secured.<br>

**Answer**: nay

<br>


## What's CMS can you access?

**Method**

To answer this question, we can start by conducting a simple directory scan with **gobuster**. It is recommended to perform this scan at the start of an enumeration process, along with an nmap scan, to save time. Other tools such as feroxbuster, dirb, etc, can also be used for this purpose.

    gobuster dir -u  http://10.10.190.117/ -w /usr/share/wordlists/dirb/common.txt

![](gobuster.png)    


The output of the enumeration includes the directories/files that were discovered, their status codes, and sizes. Here is a brief explanation of the results:

**/.hta** is commonly used to store configuration settings for web servers. It is often used to restrict access to sensitive files and directories, so it is not surprising that it returns a 403 (Forbidden) status code, indicating that access to the file is not allowed.

**/.htpasswd** is a file that is used to store usernames and passwords for HTTP Basic authentication. Like the .hta file, it is often used to restrict access to sensitive resources, so it also returns a 403 status code in this case.

**/.htaccess** is a file that is used to configure various aspects of the web server, such as URL rewriting and access control. It is often used to restrict access to directories and files, so it also returns a 403 status code in this case.

**index.html** is the default file that is served when a user visits the root directory of a website. In this case, it returns a 200 (OK) status code, indicating that the file exists and can be accessed.

**joomla** is a directory that was discovered. It returns a 301 (Moved Permanently) status code, indicating that the directory has been moved to a new URL (http://10.10.178.88/joomla/).

**manual** is another directory that was discovered. It also returns a 301 status code, indicating that it has been moved to a new URL (http://10.10.178.88/manual/).

**robots.txt** is a file that is used to provide instructions to web robots and crawlers. It returns a 200 status code in this case, indicating that the file exists and can be accessed.

**server-status** is a URL that is often used to obtain information about the status of the web server. In this case, it returns a 403 status code, indicating that access to this resource is not allowed.

<br>

Of these, joomla, manual, and robots.txt can be accessed. The manual page is just documentation of the Apache server and does not seem to be useful. robots.txt can sometimes be useful during enumeration as it can indicate the presence of sensitive or important files, but this time it's meant to throw you off.



![](robots.png)

<br><br>
You can waste your time by trying to decrypt that decimal line. the result of that:
<br><br>
![](dec.png)CyberChef
<br><br>
![](kidding.png)Crackstation

<br><br>

Let's move on to joomla. by quick look we can assume that this is the accessible CMS (Content Management System) 

 **Answer**: joomla

<br>

## The interesting file name in the folder?

At this stage, we need to go deeper and search for other places that might be vulnerable and can lead to our file. Let's run gobuster again but this time we'll include the joomla directory:

    gobuster dir -u  http://10.10.190.117/joomla -w /usr/share/wordlists/dirb/common.txt


![](gobuster2.png)

<br><br>

After exploring all these directories, a major vulnerability has been found on http://10.10.190.117/joomla/_test 

![](test.png)

sar2html is a tool that converts the system activity data collected by the SAR (System Activity Reporter) tool into an HTML format, making it easier to read and analyze.<br> that seems to be suspicious. By conducting some simple tests on it, an XSS vulnerability has been discoverd:

![](xss.png)
 
 <br><br>
Further research led to a command injection and remote code execution, which was found on the Exploit-DB website. --> [exploit-db](https://www.exploit-db.com/exploits/47204):


![](exploitdb.png)

Try this:

![](plot.png)![](file.png)

 **Answer**: log.txt

# Questions #2

---

## Where was the other users pass stored(no extension, just the name)?

**Method**

Let's move on:

    index.php?plot=;cat+log.txt

![](cat.png)

Credentials has been found! 

- username: basterd 
- password: superduperp@$$

So we already know that ssh is open on port 55007, let's try to connect.

    ssh basterd@<target-ip> -p 55007

![](ssh1.png)
![](ssh2.png)

    ls -la
    cat backup.sh
![](ssh3.png)    

Credentials: 
- stoner
- superduperp@$$no1knows
  
 **Answer**: backup

## user.txt

**Method**

Connect to stoner


![](ssh4.png)


    cat user.txt
    
 **Answer**: You made it till here, well done.

## What did you exploit to get the privileged user?

**Method**

By viewing the questions we know that we need to find the root.txt.
Let's use the `find` command to see the path of the file.

    find / -name root.txt
    cat /root/root.txt

![](ssh5.png)


Permission is denied. <br> One way to bypass it is to use a common misconfiguration in the **find** command by leveraging its ability to execute arbitrary commands with root privileges, using the **-exec** option. 

Let's start by creating an empty file named "pwnd" (you can name it what ever you want).
we can use vi editor for that
![](priv.png)

Insert a single period ``.`` into the file then save and quit: ``ESC``, ``:wq!``.

Run this command:

     find pwnd -exec cat /root/root.txt \;

Since the find command is running with root privileges, the cat command is also executed with root privileges, which allows us to read the contents of the root.txt file.

![](end.png)

 **Answer**: find

## root.txt

 **Answer**: It wasn't that hard, was it?

<br><br>

---


