---
title: "ROS Security Audit"
date: 2024-04-15
resources:
- src: "pentest_1.pdf"
  title: "Monal IM penetration test report 2024 1.0"
  params:
    icon: pdf

tags: []
author: "Thilo Molitor"
---

<a href="https://www.radicallyopensecurity.com/">Radically Open Security (ROS)</a> kindly performed a security audit of some parts of Monal.  
Specifically they audited the usage of our XML query language and the implementations of <a href="https://xmpp.org/extensions/xep-0388.html">SASL2</a>, <a href="https://datatracker.ietf.org/doc/html/rfc5802">SCRAM</a> and <a href="https://xmpp.org/extensions/xep-0474.html">SSDP</a>.

The results in a nutshell: *no security issues found*, read the full report here: {{< pdfLink "pentest_1.pdf" "This Pentest Report" >}}.


