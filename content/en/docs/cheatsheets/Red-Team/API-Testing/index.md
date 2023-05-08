---
title: "API Testing"
description: ""
lead: ""
draft: false
images: []
weight: 60
markmap:
colorFreezeLevel: 2
---



<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body>
	<header>

</header>

<main>
<div class="diagram-container">
<div class="step step-1">

## Top 10 API Vulnerabilities

</div>
</div>

---
<br>
<div class="diagram-container">
<div class="step step-1">
<section>
<h2>1. Broken Object Level Authorization</h2>
<p>Flawed access control allowing access to sensitive objects, such as unencrypted user data.</p>
<p><strong>Example:</strong> A user can access other user's data by modifying the URL parameters to the server.</p>

</div>
</div>
<br><br><br>

---

<br><br><br>

<div class="diagram-container">
<div class="step step-1">
<section>
<h2>2. Broken Authentication</h2>
<p>Vulnerability in the authentication mechanism, allowing unauthorized access to user accounts, such as through brute-force attacks.</p>
<p><strong>Example:</strong> A website that allows users to log in using a weak password, such as "password123," is vulnerable to a brute-force attack.</p>
</section>
</div>
</div>
<br><br><br>

---

<br><br><br>

<div class="diagram-container">
<div class="step step-1">
<section>
<h2>3. Broken Object Property Level Authorization</h2>
<p>Weakness in access control allowing modification of object properties, such as changing the ownership of a file.</p>
<p><strong>Example:</strong> An application that allows users to modify their account permissions via the URL is vulnerable to unauthorized changes by malicious users.</p>
</section>
</div>
</div>
<br><br><br>

---

<br><br><br>

<div class="diagram-container">
<div class="step step-1">
<section>
<h2>4. Unrestricted Resource Consumption</h2>
<p>Vulnerability in resource management that allows excessive resource usage, such as overloading a server with requests.</p>
<p><strong>Example:</strong> A botnet that sends multiple requests to a web server, consuming all available resources and causing a denial-of-service attack.</p>
</section>
</div>
</div>
<br><br><br>

---

<br><br><br>

<div class="diagram-container">
<div class="step step-1">
<section>
<h2>5. Broken Function Level Authorization</h2>
<p>Flawed access control allowing unauthorized access to sensitive functions, such as the ability to delete user data.</p>
<p><strong>Example:</strong> An application that allows any user to delete content without proper authentication or authorization.</p>
</section>
</div>
</div>
<br><br><br>

---

<br><br><br>

<div class="diagram-container">
<div class="step step-1">
<section>
<h2>6. Server-Side Request Forgery</h2>
<p>Exploiting server-side functionality to perform unauthorized requests, such as accessing internal resources or bypassing access controls.</p>
<p><strong>Example:</strong> A malicious user crafting a request to an application to access sensitive files on the server, such as a database password file.</p>
</section>
</div>
</div>
<br><br><br>


---

<br><br><br>

<div class="diagram-container">
<div class="step step-1">
<section>
<h2>7. Security Misconfiguration</h2>
<p>Configuration errors leading to vulnerabilities, such as an application running with default passwords or debug mode enabled.</p>
<p><strong>Example:</strong> A web server that allows directory listing, which can reveal sensitive files and directories to attackers.</p>
</section>
</div>
</div>
<br><br><br>

---

<br><br><br>

<div class="diagram-container">
<div class="step step-1">
<section>
<h2>8. Lack of Protection from Automated Threats</h2>
<p>Absence of measures to prevent automated attacks and bots, such as rate-limiting and CAPTCHA.</p>
<p><strong>Example:</strong> An application that does not have rate-limiting or CAPTCHA protection, allowing attackers to perform a large number of requests or account registrations automatically.</p>
</section>
</div>
</div>
<br><br><br>

---

<br><br><br>

<div class="diagram-container">
<div class="step step-1">
<section>
<h2>9. Improper Assets Management</h2>
<p>Mismanagement of digital assets leading to vulnerabilities, such as leaving sensitive data in publicly accessible locations.</p>
<p><strong>Example:</strong> An organization that stores sensitive data on a public cloud storage service with weak or no access controls, allowing anyone to access the data.</p>
</section>
</div>
</div>
<br><br><br>

---

<br><br><br>

<div class="diagram-container">
<div class="step step-1">
<section>
<h2>10. Unsafe Consumption of APIs</h2>
<p>Vulnerabilities arising from insecure use of APIs, such as failing to verify input or output data.</p>
<p><strong>Example:</strong> An application that does not properly validate API input parameters, allowing an attacker to inject malicious code and execute arbitrary commands on the server.</p>
</section>
</div>
</div>
</main>

<style>
	
	p {
		font-size: 20px;
	}

</style>

<br>

---


<br><br><br>

## API Map 

[MindAPI - Map for API pentesting](https://dsopas.github.io/MindAPI/)

<img src="mindapi_play.gif" width=100%>

---

<br><br><br>

---

<br><br><br>

# API Pentesting Resources, Tools and Techniques

Source and Credit: 

- [APISEC University](https://www.apisecuniversity.com/api-tools-and-resources)

- [MindAPI - Map for API pentesting](https://dsopas.github.io/MindAPI/)

<br>

## Vulnerable APIs
---

<br>

[DVWS-node](https://github.com/snoopysecurity/dvws-node) - Damn Vulnerable Web Services is a vulnerable application with a web service and an API that can be used to learn about webservices/API related vulnerabilities.

[OWASP DevSlop Pixi](https://github.com/DevSlop/Pixi) - Pixi is a MongoDB, Express.js, Angular, Node (MEAN) stack web applica­tion that was designed with deliberately vulnerable APIs.

[OWASP Juice Shop](https://owasp.org/www-project-juice-shop/) - Juice Shop encompasses vulnerabilities from the entire OWASP Top Ten along with many other security flaws found in real-world applications.

[REST API Goat](https://github.com/optiv/rest-api-goat) - This is a "Goat" project so you can get familiar with REST API testing. There is an included Postman project so you can see how everything is meant to be called.

[VAmPI](https://github.com/erev0s/VAmPI) - VAmPI is a vulnerable API made with Flask and it includes vulnerabilities from the OWASP top 10 vulnerabilities for APIs.

[Websheep](https://github.com/marmicode/websheep)
Websheep is an app based on a willingly vulnerable ReSTful APIs.

[crAPI](https://github.com/OWASP/crAPI)
completely ridiculous API (crAPI) will help you to understand the ten most critical API security risks. crAPI is vulnerable by design, but each of the vulnerabilities can still be found in the wild. It’s a good target while learning

[vAPI](https://github.com/roottusk/vapi)
vAPI is Vulnerable Adversely Programmed Interface which is Self-Hostable API that mimics OWASP API Top 10 scenarios through Exercises.

<br>

## Tools
---

[Arjun](https://github.com/s0md3v/Arjun) - Arjun helps find query parameters for URL endpoints.


[Burp Suite](https://portswigger.net/burp) is an integrated platform/graphical tool for performing security testing of web applications. Its tools work together to support the entire testing process, from initial mapping and analysis of an application's attack surface, to finding and exploiting security vulnerabilities.


[Burp Intruder](https://portswigger.net/burp/documentation/desktop/tools/intruder/using) is a tool for automating customized attacks against web applications. It can be used to perform a huge range of tasks, from simple brute-force guessing of web directories through to active exploitation of complex blind SQL injection vulnerabilities.

[DNSdumpster](https://dnsdumpster.com/) is a free domain research tool that can discover hosts related to a domain. Finding visible hosts from the attackers perspective is an important part of the security assessment process.

[EthicalCheck](https://www.ethicalcheck.dev/) performs automated, instantaneous API security scans covering the OWASP API Top 10.

[FoxyProxy](https://getfoxyproxy.org/) is an advanced proxy management tool that completely replaces Firefox's limited proxying capabilities.


[Gobuster](https://github.com/OJ/gobuster) is a tool used to brute-force URIs (directories and files) in web sites, DNS subdomains, Virtual Host names on target web servers, Open Amazon S3 buckets.


[The Google Hacking Database (GHDB)](https://www.exploit-db.com/google-hacking-database) is a compiled list of common mistakes web/server admins make, which can be easily searched by using Google.


[JWT_Tool](https://github.com/ticarpi/jwt_tool) is a toolkit for testing, tweaking and cracking JSON Web Tokens.

[Kiterunner](https://github.com/assetnote/kiterunner) is a tool that performs traditional content discovery, and also bruteforces routes/endpoints in modern applications.


[Nikto](https://cirt.net/Nikto2) is an Open Source (GPL) web server scanner which performs comprehensive tests against web servers for multiple items, including over 6700 potentially dangerous files/programs, checks for outdated versions.


[The OWASP Amass Project](https://github.com/OWASP/Amass) performs network mapping of attack surfaces and external asset discovery using open source information gathering and active reconnaissance techniques.


[OWASP ZAP](https://owasp.org/www-project-zap) is an open-source web application security scanner. It is intended to be used by both those new to application security as well as professional penetration testers.


[Postman](https://www.postman.com/) is an API platform for developers to design, build, test and iterate their APIs.


[TruffleHog](https://github.com/trufflesecurity/trufflehog) helps discover exposed secrets.


[Wfuzz](https://www.kali.org/tools/wfuzz) is a tool designed for bruteforcing Web Applications. It can be used to find resources not linked directories, servlets, scripts, etc., bruteforce GET and POST parameters for checking different kind of injections (SQL, XSS, LDAP,etc), bruteforce Forms parameters (User/Password), Fuzzing, etc.


[mitmproxy](https://mitmproxy.org/) is a free and open source interactive HTTPS proxy.

[mitmproxy2swagger](https://github.com/alufers/mitmproxy2swagger) Converts mitmproxy captures to OpenAPI 3.0 specifications. Automatically reverse-engineer REST APIs by just running the apps and capturing the traffic.


[Nmap](https://nmap.org/) is a powerful tool for scanning ports, searching for vulnerabilities, enumerating services, and discovering live hosts. For API discovery, you should run two Nmap scans in particular: general detection and all port.

[sqlmap](https://sqlmap.org/) is an open source penetration testing tool that automates the process of detecting and exploiting SQL injection flaws and taking over of database servers.

## API Research Sites
---
<br>

[APIs Guru](https://apis.guru/) A machine-readable Wikipedia for Web APIs in the OpenAPI Specification format.

### Google Dorking

Google: try advanced searches to discover API information, for example:

| Query                                                   | Description                                                                     |
|---------------------------------------------------------|---------------------------------------------------------------------------------|
| inurl:"/wp-json/wp/v2/users"                           | Finds all publicly available WordPress API user directories.                   |
| intitle:"index.of" intext:"api.txt"                     | Finds publicly available API key files.                                         |
| inurl:"/api/v1" intext:"index of /"                     | Finds potentially interesting API directories.                                  |
| ext:php inurl:"api.php?action="                         | Finds all sites with a XenAPI SQL injection vulnerability.                      |
| intitle:"index of" api_key OR "api key" OR apiKey -pool | Lists potentially exposed API keys.                                             |
| intitle:"index of" inurl:/wp-content/plugins            | Finds publicly available directories of WordPress plugins.                      |
| inurl:/api/ filetype:json                              | Finds JSON files that are part of APIs.                                         |
| inurl:/api/ filetype:xml                               | Finds XML files that are part of APIs.                                          |
| inurl:/api/v1 filetype:php                              | Finds PHP files that are part of API version 1.                                 |
| site:github.com inurl:/api/v1                           | Searches for APIs within repositories on Github.                                 |
| site:github.com inurl:/graphql                          | Searches for GraphQL APIs within repositories on Github.                         |
| site:github.com inurl:/rest/v1                          | Searches for REST APIs within repositories on Github.                            |
| site:api.example.com ext:yaml OR ext:yml                | Searches for YAML files on the API subdomain of example.com.                     |
| site:api.example.com ext:json OR ext:xml                | Searches for JSON or XML files on the API subdomain of example.com.              |
| site:api.example.com inurl:/docs/                       | Searches for documentation on the API subdomain of example.com.                  |
| site:api.example.com inurl:/swagger.json                | Searches for the Swagger specification file on the API subdomain of example.com. |
| site:api.example.com intitle:"API Reference"            | Searches for API references on the API subdomain of example.com.                 |
| site:api.example.com intitle:"API Documentation"        | Searches for API documentation on the API subdomain of example.com.             |
| site:api.example.com intitle:"API Reference" OR intitle:"API Documentation" | Searches for API references and documentation on the API subdomain of example.com. |
| inurl:/api/auth filetype:json                           | Searches for JSON files containing authentication information.                   |
| intitle:"Welcome to JBoss EAP" intext:"API Documentation"| Searches for API documentation in the JBoss EAP application server.              |
| inurl:/rest/applications filetype:json                  | Searches for JSON files containing application data in REST APIs.                |
| inurl:/services/api/console                             | Searches for web console interfaces for APIs.                                    |
| intitle:"Swagger UI" intext:"http://petstore.swagger.io/v2/swagger.json" | Searches for Swagger UI interfaces for APIs. |
| inurl:/api/data ext:json OR ext:xml                     | Searches for JSON or XML files containing data in APIs.                          |


### Github Dorking

GitDorking is a reconnaissance technique used to search GitHub repositories for sensitive information which can be used to assist an attack against a target organization. Popular search terms include "api key", "api keys", "apikey", "authorization: Bearer", "access_token", "secret", or “token”. 

By searching the various repository tabs within GitHub, attackers can discover API endpoints, source code and potential weaknesses in the code. 

#### Code Tab
The Code tab provides insight into the current source code, readme files, and other files. It also displays information about the most recent developer who committed to the given file, when that commit happened, and the list of contributors.

Using the Code tab, attackers can review the code in its current form or search for terms such as "API", "key", or "secret". Additionally, attackers can view the commit history by using the History button found near the top-right corner. 

| Feature              | Description                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Code Tab            | Access the current source code, readme files, and other files. Displays information about the latest developer who committed to the file.        |
| Split Button        | Allows separating previous code (left) and updated code (right) to obtain a side-by-side comparison of the file versions.                           |
| History Button      | Allows attackers to view the commit history. Exploring historical commits can help identify if previous vulnerabilities are still visible. |

#### Issues Tab
The Issues tab is a space where developers can track and report bugs, tasks, and feature requests. If an issue is open, it is possible that the vulnerability might still be active within the code.

#### Pull requests tab
In the Pull requests tab, developers can collaborate on changes to the code. By reviewing these proposed changes, attackers may find an API exposure that is being fixed. If the change hasn’t been merged with the code, the API key might still be exposed in the Files changed tab. 

Through GitDorking, attackers can reveal API capabilities, documentation, and secrets, such as API keys, passwords and tokens. It can also be used to develop the profile of a target, identifying programming languages, API endpoint information and usage documentation.


[Postman Explore](https://www.postman.com/explore/apis)
Browse the largest network of APIs, workspaces, and collections by developers across the planet.


[ProgrammableWeb](https://www.programmableweb.com/apis/directory) is the go-to source for API-related information. To learn about APIs, you can use its API University.

[Public APIs Github Project](https://github.com/public-apis/public-apis) - A collective list of free APIs.

[RapidAPI](https://rapidapi.com/search) Hub Browse the best premium and free APIs on the world's largest API Hub.

[Shodan](https://www.shodan.io/) Shodan is a search engine that lets users search for various types of servers connected to the internet using a variety of filters. You can use Shodan to discover external-facing APIs and get information about your target’s open ports.


[The Wayback Machine](https://archive.org/) is a digital archive of the World Wide Web. This site allows you to check out historical changes to your target and potentially previously published APIs/endpoints.

## Password Lists
--- 

[Common User Password Profiler](https://github.com/Mebus/cupp) The aim of the CUPP is to generate common passwords based on the input that you will give for your target.

[Mentalist](https://github.com/sc0tfree/mentalist) Mentalist is a graphical tool for custom wordlist generation. It utilizes common human paradigms for constructing passwords and can output the full wordlist as well as rules compatible with Hashcat and John the Ripper.

[Rockyou.txt](https://www.apisecuniversity.com/api-tools-and-resources#) Rockyou.txt is a common password list that is included in Kali Linux. This file is located here: /usr/share/wordlists/rockyou.txt.gz

## Labs
---

### HackTheBox

- Craft
- Postman
- JSON
- Node
- Help

### TryHackMe Rooms
Bookstore: [https://tryhackme.com/room/bookstoreoc](https://tryhackme.com/room/bookstoreoc)<br>
IDOR: [https://tryhackme.com/why-subscribe](https://tryhackme.com/why-subscribe)<br>
GraphQL: [https://tryhackme.com/room/carpediem1](https://tryhackme.com/room/carpediem1) 

---
<br><br>

<br><br>


