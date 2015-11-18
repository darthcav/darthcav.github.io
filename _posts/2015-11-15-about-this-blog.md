---
layout: post
title: About this blog
date: 2015-11-15 10:00:00 +01:00
tags:
 - blogging
 - jekyll
 - github
 - bootstrap
 - responsive design
---

I decided over the weekend to start with some kind of blogging experience using GitHub pages. Within this post, I will describe briefly the configurations basics of my personal website in [GitHub Pages](https://pages.github.com/) and a couple of hurdles I found on my way. As a main disclaimer, I am not a Ruby developer, so I had to experiment as I went along.

## The Basics

Like the famous blog post from Tom Preston-Werner [``Blogging Like a Hacker''](http://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html), I did not want to use one of those terrible (security-wise) PHP engines and I did want to get full control of the layout and the styles. Bearing in mind the hosting issue mentioned earlier, I had no other choice but to select [Jekyll](http://jekyllrb.com/).

The second issue arises through the use of the different Jekyll plug-ins, which may or may not be compatible with GitHub Pages. For the moment, apart from the standard packages installed by Jekyll, these are the list of plug-ins that I am using:

- `github-pages`: obviously!
- `jekyll-github-metadata`: to access the metadata of my GitHub repositories
- `netrc`: to use a `$HOME/.netrc` file for authentication with the GitHub API
- `redcarpet`: as a markup parser

After installation `gem update` these packages:

- `jemoji`
- `jekyll-mentions`
- `jekyll-redirect-from`

This is necessary to solve some versions incompatibility.

## Code highlighting

<div class="alert alert-warning" role="alert">
  <strong>Warning:</strong> many blogs and discussions in <a href="https://stackoverflow.com/">Stack Overflow</a> recommend to use <code>rouge</code> as a syntax highlighter. Just ignore them, it is not supported by GitHub. Stick to the traditional <code>pygments.rb</code>.
</div>

GitHub uses [Linguist](https://github.com/github/linguist) to create its syntax highlighting. You can find out which keywords are valid in this [YAML file](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml).

Using the standard code delimiters, your code snippets will be surrounded with a `<div>` element with the class `highlight`, plus many other changes. I took the  default CSS available at [https://github.com/richleland/pygments-css](https://github.com/richleland/pygments-css) and customized some components.

## Themes and responsive design

I personally did not like most of the available themes for the blogs. Thus I decided to modify the standard templates and created one based upon [Bootstrap](http://getbootstrap.com/). In particular I am testing in this blog the new features released in the [alpha (at the moment of writing) version 4](http://v4-alpha.getbootstrap.com/).

## Debug

To debug any issue, just start Jekyll in verbose mode:

~~~bash
$ jekyll serve --verbose
~~~

And that's all for the moment!
