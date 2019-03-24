---
layout: release-note
category: release-notes
title: Release 0.1.X
---

Welcome to the Alpha release of Gong! The goal is to build a customizable XMPP
chat client with a modern UI. For more information please visit the [GitHub](https://github.com/gongchat/gong) page.

If you find any issues or have any feature requests please leave a post at [github.com/gongchat/gong/issues](https://github.com/gongchat/gong/issues).

### Release 0.1.2

- Fix horizontal scroll bar for messages with long words.
- Update message now says "Install After Restart" instead of "Later".
- Can no longer open Gong twice, instead will focus on current Gong instance.
- Added license
- Added show option in tray for Windows
- Routing of messages has been improved. When Gong encounters a user that is
  logged into more than one chat client it will now send messages to the client
  that it last received a message from. Before Gong relied on the XMPP server to
  prioritize which client to send a message too.
- Remove tray icon from Linux. The tray icon will only be used for status purposes moving forward. See the Electron [docs](https://electronjs.org/docs/api/tray#class-tray) for more details.
- Included a .deb installation file for Linux users and is now the default file type for this site. Some users may have had issues adding Gong to the favorites bar with the previously format.

### Release 0.1.1

- Fix messages not updating when changing channels.
- Fix exception when removing channels.