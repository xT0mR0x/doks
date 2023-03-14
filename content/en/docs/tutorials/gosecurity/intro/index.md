---
title: "Introduction"
description: ""
lead: ""
draft: false
images: []
---
Posted on March 14, 2023 

<br>
<div class="img-border">
  <img src="Index.jpeg"/>
</div>
<br>

<p style="font-family: Courier New; font-size: 50px">Secure Coding in Go<p>



**[ ! ]** This tutorial is written by Tom Rosenzweig and is based on Miki Tebeka course for secure coding in Go. the course can be found on Linkedin courses.
For the full repository and files by Miki Tebeka click --> [here](https://github.com/LinkedInLearning/secure-coding-go-3009233)

---
<br>

Go, also known as Golang, is an open-source programming language developed by Google in 2007. It is a statically typed, compiled language that is designed to be simple, efficient, and expressive. Go has gained popularity due to its powerful concurrency support, fast compilation times, and strong community support. It is often used for building scalable network servers, cloud-based applications, and system-level software. 

Go features garbage collection, memory safety, and built-in support for concurrent programming. It also has a simplified syntax and standard library, making it easy to learn and use for developers of all levels of experience.

The rise in popularity of the Go programming language has unfortunately brought with it an increase in security concerns for Go applications. This tutorial is about securing your Go application to prevent hackers from stealing data or crashing it. 


## OWASP top 10

The [OWASP Top 10](https://owasp.org/www-project-top-ten/) is a list of the most critical security risks for web applications. It's a great starting point for anyone looking to improve their web application's security. Unfortunately, these risks have been known for years and still common these days.

To simplify the list, let's divide it into four sections:

<div class="table-container">
  <table>
    <tr>
      <th>Section</th>
      <th>Risks</th>
    </tr>
    <tr>
      <th>Input Section</th>
      <td>This section covers security risks related to input validation and processing. The risks in this section include SQL injection and server-side request forgery.</td>
    </tr>
    <tr>
      <th>Output Section</th>
      <td>This section covers security risks related to the output of web applications. The risks in this section include cryptographic failures and security misconfiguration.</td>
    </tr>
    <tr>
      <th>Authentication and Authorization Section</th>
      <td>This section covers security risks related to authentication and authorization. The risks in this section include broken access control, identification and authorization, and security misconfiguration.</td>
    </tr>
    <tr>
      <th>Infrastructure Section</th>
      <td>This section covers security risks related to the infrastructure of web applications. The risks in this section include insecure design, vulnerable and outdated components, software and data integrity failures, and security logging and monitoring failures.</td>
    </tr>
  </table>
</div>