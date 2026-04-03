---
title: "Upgrade ejabberd on Debian NOW"
date: 2026-04-03

tags: []
author: "Thilo Molitor"
---

Chances might be that you are running a Debian based ejabberd server.
Unfortunately push for all your Monal users on that server will break in less than 2 month.
And chances are that some of your S2S connections are already failing today.

# Some background
The Web-PKI is moving away from certificates having bot, the `TLS Web Server Authentication` and the `TLS Web Client Authentication` extended key usage enabled.
Most CAs already stopped issuing certificates with the `TLS Web Client Authentication` EKU set or will stop doing so in a few month.

Traditionally both servers of an S2S connections in XMPP authenticate to each other.
One is the server part of a TLS handshake (and needs the server EKU), the other one is the client part of the TLS handshake (and needs the client EKU).
Which one is which, solely depends upon which server starts the underlying TCP connection (that one becomes the client in *this* connection).

## The underlying problem
This mutual authentication breaks, once the client part can't present a certificate having the client EKU.
All TLS libraries fail the authentification in this case.

## The solution
Fortunately almost all TLS libraries allow users to customize the certificate validation process and ejabberd was updated in version 25.08 (August 2025)
to do exactly this: ignore the EKU when validating the certificate.
But unfortunately it was too late to go into Debian Trixie, the current stable Debian version.

# Debian
This is where the real problem starts. Many server operators use Debian because it is so extremely stable and well maintained.
Of course Debian provides point releases to upgrade packages if they have some severe bug
(like not being able to properly participate in S2S connections).
The next point release will contain a fix for the problem, but that will still take more than a month to reach servers.

## How to fix the situation
**I urge all ejabberd server operators to take one of the following steps as soon as possible:**
- Add `trixie-proposed-updates` to your `sources.list` file and update ejabberd to version `24.12-3+deb13u2`
- Install these two packages kindly built by Holger (an ejabberd developer): [https://ejabberd.messaging.one/download/s2s-fix/](https://ejabberd.messaging.one/download/s2s-fix/)
- Install the official packages by ProcessOne from here: [https://repo.process-one.net/](https://repo.process-one.net/) (caution: these packages use `/opt/ejabberd`, so you'll need to copy your config from `/etc/ejabberd` over!)
- Switch to Prosody (Prosody's fix for the S2S client EKU problem made it into Debian Trixie)
- Switch to some other distribution
- **If you absolutely don't want to take any action**, please enable at least dialback by adding `mod_s2s_dialback: {}` to the modules section of your ejabberd config. But be aware: while this will fix the S2S connection to Monal's push servers, other servers might not have turned it on (both parts must turn it on to be effective). The security of the connection will also be degraded when using dialback rather than properly verifying certificates.

# Last words
Many thanks to Holger Weiß and Philipp Huebner for fixing this bug in Debian!
