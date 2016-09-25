# Hasher

Let's say you have a password that you always use - we'll call this your *key*. It's a strong (and therefore hard for you to remember) password, with lots of mixed case letters and numbers.

Hasher generates a unique password for every website you visit, by *hashing* your key and the name of the site - meaning you can safely re-use the same key, but get completely different passwords for each site.

This project was inspired/based on/uses code from the excellent [Hashpass Chrome Extension](https://chrome.google.com/webstore/detail/hashpass/gkmegkoiplibopkmieofaaeloldidnko). For a more in-depth discussion on the the philosophy behind this project and a comparison between this and traditional password managers, check out the [Hashpass](https://github.com/boyers/hashpass) Github repository.

## deterministic

As long as you enter the same key+site combination, you will always (re)generate the same password. Never forget your password again.

## zero-knowledge

Hasher never saves, syncs, sends or stores anything. Everything is done clientside. Even if somebody steals your computer, they can't get your passwords.

## open

No need for proprietary encryption or database formats. No need to trust a third-party to securely store your data. Hasher is open source. Even if hasher is unavailable, your passwords are.
