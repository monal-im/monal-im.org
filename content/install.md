---
title: "Install"
date: 2022-03-12T08:09:44+01:00

tags: []
author: "Monal"
---

|        | iOS                                                      | macOS                                                    | macOS (homebrew)                            |
|--------|----------------------------------------------------------|----------------------------------------------------------|---------------------------------------------|
| Stable | [App Store](https://apps.apple.com/app/id317711500)      | [App Store](https://apps.apple.com/app/id1637078500)     | brew install \-\-cask monal                                            |
| Beta   | [Testflight Invitation](https://testflight.apple.com/join/lLLlgHpB) | [Testflight Invitation](https://testflight.apple.com/join/tGH2m5vf) | brew install \-\-cask monal@beta |
| Alpha  | upon request to [info@monal-im.org](mailto:info@monal-im.org)<br>Then download from our [alpha download site](https://downloads.monal-im.org/monal-im/alpha/)<br><br>You can get updates about alpha releases by joining this channel: [monal-alpha@chat.yax.im](xmpp:monal-alpha@chat.yax.im?join)              |                                                          | brew tap monal-im/homebrew-monal-alpha<br>brew install \-\-cask monal-alpha<br><br>You can get updates about alpha releases by joining this channel: [monal-alpha@chat.yax.im](xmpp:monal-alpha@chat.yax.im?join) |

# Features
Monal currently covers the following chat features:

* Decentralised and federated chat standard [XMPP](https://xmpp.org/)
* Private and group messaging
* Privacy-respecting push notifications
* Encrypted private and group chats (state-of-the-art encryption ([OMEMO](https://conversations.im/omemo/))
* Message history
* Free selection of your XMPP account provider
* Voice messaging
* Message archiving
* Upload of files, videos and images (HTTP Upload)
* Audio and Video calls
* Many settings and a design to offer privacy settings in the app to the need of the user
* A detailed and technical listing of your supported features (so called XMPP Extensions) can be found in our [DOAP file](https://github.com/monal-im/Monal/blob/develop/monal.doap).

## Planned features

* User-interface overhaul

## Implemented XEPs

You can check the complete list of supported XEPs at <a href="https://xmpp.org/software/monal-im/">https://xmpp.org/software/monal-im/</a>

{{< implemented_features >}}

## Planned XEPs

{{< planned_features >}}
