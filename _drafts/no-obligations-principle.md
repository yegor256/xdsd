---
layout: article
title: "No Obligations Principle"
date: 2014-04-11
author:
  name: Yegor Bugayenko
  avatar: http://www.gravatar.com/avatar/70942ffdd8084b5a51e17e3c0996d53c?s=300
categories: blog
disqus: true
tags:
  - process
  - principles
  - management
description: The article explains how XDSD recommends to manage responsibility
keywords:
  - responsibility of programmers
  - management of programmers
  - obligations in software project
  - project management
  - risk management
  - micro management
  - project responsibility
---

It is a very common problem in project management &mdash; how to
make team members more responsible and avoid
[micro management](http://en.wikipedia.org/wiki/Micromanagement).
We start with creating plans, drawing Gantt charts, announcing milestones,
motivating everybody and promising big bonuses on success.

## Excuses

Then everybody starts working and we're starting to hear excuses:

 * "The task is not yet ready, I was doing something else"
 * "May I take a day off tomorrow because of my birthday?"
 * "May I skip the unit test because I don't know how to fix it?"
 * "I don't know why this doesn't work, maybe someone can help me?"
 * "I tried, but this doesn't work, what can I do?"
 * "This installation takes all my time, I can't finish the task"

By that excuses team members are transferring responsibility
back to the project manager. There was a very famous article
["Management Time: Who's Got the Monkey?"](http://hbr.org/1999/11/management-time-whos-got-the-monkey/ar/1)
published in Harvard Business Review about this subject.
Highly recommend to read it. Its authors present problems as
monkeys sitting on our shoulders. When the project manager assigns
a task to a programmer &mdash; he moves the monkey from his shoulders
to the programmer's shoulders. The programmer comes back with an
excuse, saying that "I don't know what to do". Now the money is
back on the manager's shoulders. The goal of the manager is
send the monkey back and make it programmer's problem again.

One of traditionals way to transfer responsibility back to team members
is to become an aggressive manager. You have a birthday tomorrow? I don't care,
you still have to meet your deadline. You don't know how to fix the
unit test? Not my problem, it should be fixed by tomorrow, etc. We all
know multiple examples of that type of management.
I find this extremely annoying and destructive for the project. Project
environment becomes very unhealthy and good people leave.

Another traditional way is micro-management, when the project
manager checks task statuses every few hours and tells people
what to do and how to handle problems. Needless to say that this
management style ruins the team and good people leave even faster.

However, in order to keep the project in its borders and meet
all the milestones, responsibility **must be** on the shoulders of
team members. They should be responsible for their own tasks and
report back to the project manager when they are done.

Implementation problems should be solved by team members on their own.

How do we solve this in XDSD?

## I Owe You Nothing

In XDSD there is the first fundamental principle that says
the everybody should be paid for deliverables. Based on this
idea we can go even further and declare a "No Obligations" principle.

In essence, for every team member, it says: if you don’t like the task assigned
to you, or you don’t have time, or you’re simply not in the mood &mdash; don't do it.
You have no obligations to do anything. You're free to reject every second
task that a project manager gives to you, of even all of them.

On the other hand, the project manager is not obliged to keep a task assigned
to you for longer than 10 days (we think that this time frame is logical).
If you get a task and don't deliver in ten days, the project manager
can take it away from you, paying nothing. No matter how much time you
invested into it already, and why you failed.

## Where Are The Monkeys Now?

This principles helps us to separate responsibilities between the project
manager and team members. The manager is responsible for finding the right
people and giving them the right tasks. It is his management problem, if
he will be getting too many rejections from the team.

On the other hand, his team members are responsible for their tasks
and can't give any excuses any more. Well, they can, but they won't
change anything. No matter what their excuses are, the deliverables
will be purchased only from the person who manages to complete the task
in time.

## How Does This Affect Me?

When you're working with XDSD-inspired project, you should remember
about this "No Obligations" principle. You should start a task only
if you're sure that you can finish it in a few days.

You should chase your tasks and control deadlines by yourself. The project
manager will not ask you for the status, like it is happening in
traditional projects. He will just take the task away from you in ten days.
To avoid that, you should control your tasks and their deadlines.

In every task, try to be as lazy as possible and cut every corner you can.
The smaller the amount of work you will do in a task, the easier to
deliver it and pass all quality controls.

Remember that your efforts are not appreciated. Only deliverables matter.
