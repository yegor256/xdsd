---
layout: article
title: "Incremental Refinement of an Architecture"
date: 2014-04-07
author:
  name: Yegor Bugayenko
  avatar: http://www.gravatar.com/avatar/70942ffdd8084b5a51e17e3c0996d53c?s=300
categories: blog
disqus: true
tags: architecture pdd process
---

In this short (supposed to be) article I'll explain how a high-level
functional requirement should be transferred through all stages, until
fully implemented in source code and tested.
Let's follow a traditional RUP-enspired order or stages:

{% pic http://img.xdsd.org/2014/04/rup-chart.png 586 IBM, Rational Unified Process %}
{% endpic %}

In simple words, this diagrams says that every feature should be:

 * analyzed from business point of view
 * formally documented in requirements
 * visualized in architecture
 * designed in components and modules
 * implemented in classes and unit tests
 * manually tested, and
 * deployed to production

Now, the question is: how to do these seven steps in small increments,
delivering a working system after every one of them. Truly incremental
process means that we can stop after every micro step and have a working
system. More
