---
layout: post
title: Cleaning up the NPM cache
date: 2015-11-22 12:30:00 +01:00
tags:
 - javascript
 - npm
 - node.js
 - package mgment.
---

Quite a while ago I realized that in my local development machines and in some continuous integration servers, the available hard disk free space was suspiciously shrinking over time. A quick research showed that directories related to the [**npm**](https://www.npmjs.com/) package manager were guilty.

Just reviewing the **npm** documentation, you stumble first on the [`npm-cache`](https://docs.npmjs.com/cli/cache) command. Thus executing:

~~~console
$ npm cache clean
~~~

should work. But that just cleans up the user cache directory, which by default is located at `$HOME/.npm` on POSIX-oriented operating systems, or at `%AppData%/npm-cache` on Windows systems. There are a bunch of temporary files stored by default in directories at:

+ `$TMPDIR/npm-*` on POSIX-oriented operating systems, or
+ `%TMP%\npm-*` (`%TEMP%\npm-*`) on Windows systems.

According to the [`npm-folders` documentation](https://docs.npmjs.com/files/folders):

> Temp files are given a unique folder under this root for each run of the program, and are deleted upon successful exit.

However (at the moment of writing this post), it does not seem that this deletion happens. A temporary workaround is to run the command:

~~~console
$ sudo rm -rf $TMPDIR/npm-*
~~~

And even better, let your computer run it automatically with a **cron job**.
