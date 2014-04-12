---
layout: article
title: "Bugs Are Welcome"
date: 2014-04-11
author:
  name: Yegor Bugayenko
  avatar: http://www.gravatar.com/avatar/70942ffdd8084b5a51e17e3c0996d53c?s=300
categories: blog
disqus: true
tags:
  - bugs
  - process
  - principles
description: The article explains why bugs are very welcome in XDSD
keywords:
  - defects planning
  - management of programmers
  - software testing
  - test planning
  - test plan
  - test script
---

A traditional understanding of a software defect (aka "bug") is that it is
something negative. It is something that we want to avoid in our
projects. We want our projects to be "bug-free". Our customers are asking
us to develop software that doesn't have bugs. And we, as users,
expect software to work without bugs.

{% picture http://img.xdsd.org/2014/04/charlie-and-chocolate-factory-chewing-breakfast.jpg 0 Charlie and the Chocolate Factory (2005) by Tim Burton %}

But let's look at bugs from a different angle. In XDSD we
say that "bugs are welcome". This means that we encourage everybody
to find bugs and report them. We want our team to see bugs
as something that we want to enter our project. Why?

Because we understand that there are two categories of bugs: visible
and hidden. When more bugs become visible, more of them get fixed, less
of them annoy our users. By discovering bugs we make them visible.
This is the primary job of a software tester &mdash; to make bugs visible.
Obviously, their visibility positively affects the quality of the product.
Because we can fix them before our users start complaining.

In order to motivate all team members to make more bugs visible, we're
paying for them. In XDSD projects we are paying 15 minutes
for every bug found, no matter who finds it and where.

## We Plan Bugs

We go even further. We're planning the amount of hidden bugs in
every project, using our experience with previous projects
and expert judgement.

Let's say we're starting to develop a web system, which is similar to
the one we've done last year. We know that in the previous project
our users and our team together reported 500 bugs.

It's logical to assume that the new project will have a similar
amount of bugs. Thus, our task is to make that 500 bugs visible before
they hit the production platform and our users call us. Thus,
we're making it one of the project goals: "discover 500 bugs".

Of course, our estimate may be wrong, but if we have historical records
of a few dozens projects and in all of them number 500 is close
to reality &mdash; we can use it as a target.

## What Is a Bug?

Let's try to give a non-ambiguous definition to a bug (of a software defect).
Something can be reported as a bug and be paid for if and only if:

 * it is [reproducible](http://en.wikipedia.org/wiki/Reproducibility)
 * it refers to already implemented functionality
 * is can be fixed in a reasonable amount of time
 * it doesn't duplicate an already reported bug

Reproducibility of a bug is very important, and it is a responsibility
of a bug reporter to make sure the bug is reproducible. Until it is proven
that the bug can be reproduced &mdash; it's not a bug and it's not paid.

A bug is not a task. It has to refer to an existing functionality,
and explain how and when it doesn't work as expected.
