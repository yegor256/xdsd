---
layout: article
title: "How XDSD Is Different"
date: 2014-04-17
author:
  name: Yegor Bugayenko
  avatar: http://www.gravatar.com/avatar/70942ffdd8084b5a51e17e3c0996d53c?s=300
categories: blog
disqus: true
tags:
  - process
  - human factor
description: |
  The article presents most important and critical
  differences between XDSD and traditional software
  development methodologies, including Agile
keywords:
  - extremely distributed development
  - motivation of programmers
  - project management
  - effective project management
---

eXtremely Distributed Software Development (XDSD) is a methodology
that significantly differs from traditional ways of working
in software development teams. Most of the differences
are so critical that newcomers get confused. This article
should help you to bootstrap once you join a project managed
by XDSD principles, either as a developer or a project sponsor.

## We Pay Only For Closed Tasks

Unlike many other projects, in XDSD we pay only for closed tasks
and only the budget agreed upon. Let me explain by example. Let's say,
you are a Ruby programmer and you a get a new task, that says
that you should fix a broken unit test.

The task will say that its budget is 30 minutes. In most cases the
budget is half an hour. Sometimes it may be an hour or fifteen minutes.

Let's say that your rate on the contract is $50 per hour. This means
that when you fix the broken test you will get $25.

This also means that it doesn't matter how much you will actually
spend to fix the test. It can be five minutes or five hours. You will
still get $25. Moreover, it doesn't matter how long will it take. If you
finish it in an hour or in a month.

And if you fail to fix the unit test and close the task, you will get zero.
More details you can get from an article about
[No Obligations Principle]({% post_url 2014/2014-04-13-no-obligations-principle %})
and
[Definition of Done]({% post_url 2014/2014-04-15-definition-of-done %}).

{% picture http://img.xdsd.org/2014/04/revolver-avi-with-dollar.jpg 0 Revolver (2005) by Guy Ritchie %}

This is one of the most important differences between XDSD and
all other methods. Many people get confused when they see this
in action. And some people leave our projects because of that. They
simply are used to being paid by the end of the month, no matter how much
they deliver. We're strongly against this unfairness. We want
people who deliver more results get more cash in their pockets, and
those who can't deliver get less.

## We Deliver Unfinished Components

Since most of our tasks are half an hour in size, we encourage
developers to deliver unfinished components. More about this
concept you can learn from this article about
[Puzzle Driven Development]({% post_url 2014/2014-04-12-puzzle-driven-development-by-roles %}).

## No Informal Communications

In XDSD we don't use any informal communication channels you may
be used to in other projects. We never use emails, we never talk
on Skype, we don't do any meetings or phone calls. We don't have
any mailing lists. We communicate only in ticket tracking system (in most
projects it is Github Issues).

Moreover, we discourage horizontal communications between developers
outside of a single task scope. When a task is assigned to you, your
single point of contact (and your only customer) is the author
of the task. You talk to him in the ticket,
in order to clarify task requirements.
When requirements are clear, you deliver the result to him, and
he closes the task. Then, the project manager pays you.

{% picture http://img.xdsd.org/2014/04/goodfellas-paulie-talking.jpg 0 Goodfellas (1990) by Martin Scorsese %}

We're very strict about this principle &mdash; no informal communications.
However, it doesn't mean that
we are not interested in your opinions and criticism. Instead,
we encourage everybody to report their suggestions and
bugs. We even pay for them, read below.

Since we don't have any formal communications, members of
our project teams don't need to work at specific times. They work
in their time zones and when it's convenient for them, including
weekends.

## We Pay For Bugs

[Bugs are welcome]({% post_url 2014/2014-04-13-bugs-are-welcome %})
in all XDSD projects, unlike in many other software teams. We ask
everybody in a project to report every bug found, and every
suggestion you come up with.

We pay for every properly reported bug.

We believe that the more bugs we can find, the higher the quality
of the end product. Some of new developers get surprised when
they receive a task that sounds like "you have to find 10 bugs in class A".
Their first natural reaction is "what if there are no bugs?"

We believe that any software has an unlimited amount of bugs. It is
just a matter of time and effort to discover them.

## Only Pull Request

We never grant access to the `master` branch to anyone. No matter
how long you work in the project, you will always have to
submit your changes through pull requests (most of our projects
are done in Github).

It's not because we don't trust our developers, but because
we don't trust anybody :)

## No Compromises About Code Quality

Before we can merge any changes from anyone to the `master`
branch, we check the entire code base with unit tests
and static analyzers. Unit testing is a very common component
in modern software development. You should not be surprised by that.

However, static analysis and its strictness sometimes frustrates
some of newcomers. That's understandable. We pay much more
attention to the quality and uniformity of our source code than most
of our competitors &mdash; software development teams.

What is even more important is that we never make compromises. If
your pull request violates at least one rule of the static analyzer,
it won't be accepted. And it doesn't matter how small and innocent
that violation may look. This merging process is fully automated
and can't be passed around.
