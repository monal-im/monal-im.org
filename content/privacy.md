---
title: "Privacy"
date: 2022-03-12T08:08:57+01:00

tags: []
author: "Monal"
---



# Monal-im.org (Website)
A user’s IP address will be logged in the HTTP server logs. All server logs are purged every two weeks and there isn’t any way for us to associate this information with any particular individual.

# Monal (App)
Monal for iOS and macOS will register for APNS push notifications via a server to server (s2s) connection from your XMPP server to our push server.
Your XMPP JID alongside with a push identifier and secret token from apple, that is only valid for this app, will be saved and logged in the push-server logs.
While we don’t intend to track you.
All server logs are purged every two weeks.
Our logs allow us to see the following details:
* Your JID (including your server’s hostname)
* Time when you register for push notifications
* Your apple push node and push token that was generated for Monal by Apple
* Time when your XMPP server triggered a push notification to your Monal device

To fulfill its duty, our push server has to hold some information associated with an Apple push token, until Apple marks the token a deleted, which usually means you have uninstalled the app (Info: Apple confirms if a token is still valid on every push).
In detail these information consists of:
* The Apple push token
* The timestamp of the last push error
* The timestamp of the last successful push
* The timestamp of the registration of your device with Monal’s push-server
* The timestamp when the registration was renewed
* A random UUID identifying your device
* A random secret used by your XMPP server to authenticate a push

Additionally, your local device will contain a log file with all sent and received raw XMPP messages as well as debug logs.
It does contain sensible personal data! This file will never be transferred to us, except if you explicitly (manually) send it to us (e.g. via mail).

All apps do track crashes and usage data anonymously. This is opt-in only and controlled by iOS and macOS global settings.
If a user decides not to send any data to developers, no crash logs are sent to Monal developers.


## GDPR Subject Access Requests (SAR)
European GDPR allows users to request a copy of all data retained about them. Please send GDPR requests to info@monal-im.org. As by GDPR we need to validate your JID before answering to your inquiry. Therefore, we will provide you a JID you must send a confirmation to, before we can answer your request and send you all retained data related to your JID.
