---
layout: article
title: "PDD, Management By Disturbance"
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



Let's assume that a "project" is something that satisfies
a number of constraints or rules. Like a living organism
that
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

## System Analyst

A product owner submits an informal feature request, which usually
starts with "it would be nice to have..." I'm a system analyst and my
job is to translate her English words into formal specifications in SRS,
understandable both by programmers and herself. It's not my responsibility
to implement the feature.

My task is done when a new version of the SRS is signed by the
Change Control Board. I'm an interpreter of product owners, translating
from their language to a formal language of the SRS document.

Besides feature requests from product owners I often receive
complains about the quality of SRS. The document may be not clear
enough for any member of the team. It's my job to resolve that problems
and fix the SRS.

In both cases (a feature request or a bug) I can make changes to the
SRS myself immediately, if I have enough time. However, it's not always
possible. In that case I will simply introduce new puzzles, and will wait
for their resolution.

However, I don't want the product owner to wait for that puzzles resolution.
Moreover, I don't know when will they be resolved.


## Architect

I'm an architect and my task is to implement a requirement formally specified
in the SRS. PM is expecting a working feature from me, which I can deliver
only when the architecture is clear, classes are designed and implemented.

I can introduce the following puzzles:

 * SRS doesn't explain requirements properly
 * UML diagrams are not clear enough
 * Components are not implemented
 *

When all of my puzzles are resolved, I can get back to the main task
and finish feature implementation. Obviously, this may take long time,
days or even weeks. But the cost of the main task is less than an hour.
What is the point of all this hard work? I'll earn my hours from
all that bugs reported.

Once again, my main task will be closed and paid when System Analyst
changes its state to "implemented" in the SRS.


## Designer

TBD...


## Programmer

TBD...


## Tester

TBD...
