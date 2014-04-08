---
layout: article
title: "Management By Disturbance"
date: 2014-04-07
author:
  name: Yegor Bugayenko
  avatar: http://www.gravatar.com/avatar/70942ffdd8084b5a51e17e3c0996d53c?s=300
categories: blog
disqus: true
tags: architecture feature pdd process
---

In this (supposed to be) short article I'll explain how a high-level
functional requirement should be transferred through all disciplines, until
being fully implemented in source code, tested and delivered. In other
words, someone is saying "I want this new feature, ASAP!", and in some time
we have it available for end-users.

Let's follow a traditional
[RUP](http://en.wikipedia.org/wiki/IBM_Rational_Unified_Process)-enspired
list of disciplines:

{% picture http://img.xdsd.org/2014/04/rup-chart.png 586 IBM, Overall architecture of the Rational Unified Process %}

In simple words, this diagrams says that every feature should be:

 * analyzed from business point of view
 * formally documented in requirements
 * visualized in architecture
 * designed in components and modules
 * implemented in classes and unit tests
 * manually tested, and
 * deployed to production

Now, the question is: how to do these seven disciplines in small increments,
delivering a working system after every one of them. Truly incremental
process means that we can stop after every micro step and have a working
system. Moreover, we should be able to switch people between tasks. And,
of course, we should be able to implement multiple features in parallel.

Let's discuss disciplines one by one. I'll name the next seven sections by the
names of roles mainly involved produced by every discipline. In every section I'll
explain from the point of view of a person, who got a task assigned to her.
The goal is to complete the task and get paid, as usual.

Of course, the whole process is driven by the spirit of
[PDD]({% post_url 2009/2009-03-04-pdd %}).

The job of a Project Manager is to keep the project in a stable
state, which means (depending on the project, of course):

 * all requirements are specified, implemented and delivered
 * requirements specification is non-ambiguous
 * all bugs are fixed
 * all `@todo` puzzles are resolved and removed

The Project Manager gives you tasks that he needs to be done, in order
to return the project to the stable state. While resolving them
you're introducing new instability, submitting new bugs, leaving `@todo`
puzzles in project documents, etc.

## Product Manager

Someone submits a feature request, which sounds like "hey, I think it
would be good to give our users an ability to download all files together
in one click, can you do this please?"

I'm a product manager (or a business analyst), and my task is make project
sponsor happy. She will become happy as soon as
our users get an ability to download all their files in one click. The

I'm working with a software requirements document. I want to change
requirements in a way that they explain this new feature, in details. I can't
do it myself, and want to break this

## System Analyst

I'm a requirements analyst.

## Architect

I'm an architect and my task is to implement a requirement, specified
formally in SRS, saying "User can download TGZ Archive".

To implement this feature I need

## Designer

## Implementer (Programmer)

## Tester

