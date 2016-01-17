---
layout: post
title: Activating the hidden Administrator account under Windows
date: 2015-11-18 18:30:00 +01:00
tags:
 - windows
 - quick tip
 - administration
---

Sometimes you buy (or the IT guys of your company give you) a new computer with a pre-installed Windows. You happen to have an account with administrator rights, but the login screen does not display the damned **Administrator** account.

To solve that, simply open a **Console Prompt** and type:

~~~bat
net users Administrator /active:yes
~~~

<span lang="fr">Et voilà!</span> your Administrator account is there.
