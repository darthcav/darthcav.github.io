---
layout: post
title: Sending locale information in ssh connections
date: 2016-01-17 16:38:50 +01:00
tags:
 - ssh
 - locale
 - linux
 - remote administration
---

When accessing remote servers and trying to perform remote tasks,
you meet sometimes the message:

~~~console
Can't set locale; make sure $LC_* and $LANG are correct!
perl: warning: Setting locale failed.
perl: warning: Please check that your locale settings:
	LANGUAGE = "en_US:en",
	LC_ALL = (unset),
	LC_CTYPE = "en_GB.UTF-8",
	LANG = "en_US.UTF-8"
    are supported and installed on your system.
perl: warning: Falling back to a fallback locale ("en_US.UTF-8").
locale: Cannot set LC_CTYPE to default locale: No such file or directory
locale: Cannot set LC_ALL to default locale: No such file or directory
~~~

This is due to the fact that you are sending with your
`ssh` connection the locale of your local
machine to the remote server, which is not configured to support your
local configuration. This error may be quite annoying, because it can
prevent you from performing remote administration tasks with `aptitude`,
for example.

To fix that, just edit the file `/etc/ssh/ssh_config` and comment
out the line:

~~~text
# SendEnv LANG LC_CTYPE LC_NUMERIC LC_TIME LC_COLLATE LC_MONETARY LC_MESSAGES
~~~

to avoid sending any locale information in any ssh connection. After
that, restart the `sshd` service in your local machine:

~~~console
# service sshd restart
~~~

and you are done!
