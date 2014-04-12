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

But let's look at bugs from a different angle. In XDSD we
say that "bugs are welcome". This means that we encourage everybody
to find bugs and report them. We want our team to see bugs
as something that we want to enter our project. Why?

Because we understand that there are two categories of bugs: visible
and hidden. When more bugs become visible, more of them get fixed, less
of them annoy our users.

In order to motivate all team members to make more bugs visible, we're
paying for them. In XDSD projects we are paying 15 minutes
for every bug found, no matter who finds it and where.

## Planned Bugs

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
to reality &mdash; we can use as a target.
