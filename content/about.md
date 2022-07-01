---
title: "About"
tags: []
---

# Imprint

Thilo Molitor</br>
Vogelsbergstr. 18</br>
68642 Bürstadt</br>
Germany

eMail: info[at]monal[minus]im[dot]org

# About

Monal originates in 2002 as fork of the SworIM app.
Until 2019 it has been developed by Anu Pokharel.
Since then Thilo Molitor took over the development and joined in 2020 with Friedrich Altheide.
From initial rewrite of code in the backend the entire app has been upgraded with a modern XMPP engine, new features and future-proof setup.
Monal challenges to be the go-to XMPP chat-app for the iOS and macOS platform.

## Monal Team

**Thilo Moltor** - Since 2015 he is contributing to Monal IM, when he also started to help out with the Gajim XMPP Client written in Python.
Shortly after this, in early 2016 I started to take over maintenance for several Prosody modules as well as developing newones (i.e. *mod_smacks*, *mod_cloud_notify*, *mod_csi_battery_saver*).
Later on, in 2017 Thilo started to implement basic push support in Monal IM along with the required push-app-server.
Significantly core contribution to Monal continued since early 2020. 
- Re-implementation of connection management and integration of new XML parser
- Modern push notifications
- New XMPP parser completely eliminating some classes of (security relevant) bugs
- A generalized PEP ([XEP-0163](https://xmpp.org/extensions/xep-0163.html)) framework which is needed as foundation for the mentioned Bookmark Storage ([XEP-0048](https://xmpp.org/extensions/xep-0048.html)) and PEP Native Bookmarks ([XEP-0402](https://xmpp.org/extensions/xep-0402.html))
- See commitment after 2021 in the [release notes](https://github.com/monal-im/Monal/releases).

And of course many people from the XMPP Community!
Many thanks for your support in the recent years!
If you read this and want to support go to this page!

## Publications

### Talks
* Molitor, Thilo. **Monal development recap 2019 - 2021 and open discussion** *Berlin XMPP Meetup*, 13th October 2021, [Weblink](https://xmpp-meetup.in-berlin.de/talks/monal-2021.mp4)
* Molitor, Thilo; Altheide, Friedrich. **Modern XMPP - A story based on Monal** *Berlin XMPP Meetup*, 13th April 2022, [Weblink](https://xmpp-meetup.in-berlin.de/talks/monal-2022.mp4), [Slides](https://xmpp-meetup.in-berlin.de/talks/monal-and-push.pdf)

### XEP publications

* XEP-0353: Jingle Message Initiation</br>
  Authors: Philipp Hancke, Peter Saint-Andre, Thilo Molitor
  > This specification provides a way for the initiator of a Jingle session to propose sending an invitation in an XMPP message stanza, thus taking advantage of message delivery semantics instead of sending IQ stanzas to all of the responder's online resources or choosing a particular online resource.
