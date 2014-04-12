---
layout: article
title: "PDD by Roles"
date: 2014-04-11
author:
  name: Yegor Bugayenko
  avatar: http://www.gravatar.com/avatar/70942ffdd8084b5a51e17e3c0996d53c?s=300
categories: blog
disqus: true
tags: architecture srs pdd process
description: How Puzzle Driven Development is seen by different project roles
keywords:
  - puzzle driven development
  - software requirements specification
  - project planning
  - project roles
---

In this article I'll try to show a project being managed
with a spirit of Puzzle Driven Development (PDD), from points
of view of different project members.

Basically, there are six key roles in any software team:

 * Project Manager &mdash; gives tasks and pays on completion
 * System Analyst &mdash; documents product owners' ideas
 * Architect &mdash; defines how system components interact
 * Designer &mdash; implements most complex components
 * Programmer &mdash; implements all components
 * Tester &mdash; finds and reports bugs

Everybody, except a project manager, affect the project in two
ways: they fix it and they break it at the same time. Let me explain
by a simple example.

## "Fix and Break"

Let's assume for the sake of simplicity that a project is a simple
software tool written by myself for my close friend. I created the
first draft version 0.0.1 and delivered it to him. For me, the project
is done. I've completed my work, and hopefully will never get
back to it again.

However, the reality is different. In a few hours,
I'm getting a call from my friend,
and he is saying that a few bugs were found in the tool. He is asking me
to fix them. Now I can see that my project is not done. It's broken.
It has a few bugs in it. A few tasks to finish.

I'm going to fix the project, by removing the bugs. I implement
a new version of the software, name it 0.0.2 and ship it to my friend. Again,
my project is done. It is fixed and should be closed.

This scenario will be repeated again and again until my friend stops
calling me. In other words, until he stops breaking my project.

It is obvious that the bigger the breakage introduced by my friend into
my project, the higher the quality of the software delivered at the end. Version
0.0.1 was a very preliminary version, although I considered it final at
the beginning. In a few months, when hundreds of bugs are reported and
fixed, version 3.5.17 will be much more mature and stable.

This is the result of this "fix and break" approach.

{% picture http://img.xdsd.org/2014/04/time-and-mess-diagram.jpg %}

The diagram shows the relation between time and mess in the project.
The bugs my friend is reporting to me are breaking the project, increasing
its instability (or simply its messiness). My new versions that resolve
the bugs are fixing the project. Your Github commit dynamics should
resemble this graph, for example:

{% picture http://img.xdsd.org/2014/04/jcabi-github-commits-graph.png %}

When the project starts, its mess is rather low. Then it starts to grow,
reaches its peak moment, and goes down.

## Project Manager

The job of a project manager is to do as much as possible
in order to fix the project. He has to use sponsor's time and money in order
to remove all bugs and inconsistencies, and return the project back
to the "fixed" state.

{% picture http://img.xdsd.org/2014/04/pulp-fiction-mr-wolf-with-cup.jpg 0 Pulp Fiction (1994) by Quentin Tarantino %}

By saying "bugs" I mean more than just software errors, but also:

 * unclear or ambiguous requirements
 * not yet implemented features
 * functional and non-functional bugs
 * lack of test coverage
 * unresolved `@todo` markers
 * lack of risk analysis
 * etc.

The project manager gives me tasks that he wants to be done, in order
to fix the project, to stabilize it, to return it back to the
bug-free state.

My job, as a member of a software team, is to help him to do the
fixing part, and, at the same time, to do my best to break the project!
Like in the example with my friend. He was constantly breaking the
project by reporting bugs to me. This is how he helped both of us
to increase quality of the product.

I should do the same, always trying to report new bugs when I'm
working on some feature. I should **fix and break** at the same time.

Now let's take a closer look at project roles.

## System Analyst

A product owner submits an informal feature request, which usually
starts with "it would be nice to have..." I'm a system analyst and my
job is to translate owner's English into formal specifications in the SRS,
understandable both by programmers and herself. It's not my responsibility
to implement the feature.

{% picture http://img.xdsd.org/2014/04/arizona-dream-two-beers-and-two-shots.jpg 0 Arizona Dream (1992) by Emir Kusturica %}

My task is done when a new version of the SRS is signed by the
Change Control Board. I'm an interpreter of product owners, translating
from their language to a formal language of the SRS document.
My only customer is the product owner. As soon as she closes the
feature request I'll be paid.

Besides feature requests from product owners I often receive
complains about the quality of SRS. The document may be not clear
enough for some team members. It's my job to resolve that problems
and fix the SRS. These team members also are my customers. When they
close their bug reports, I'll be paid.

In both cases (a feature request or a bug) I can make changes to the
SRS myself immediately, if I have enough time. However, it's not always
possible. I can submit a bug and wait for its resolution, but I don't
want to keep my customers waiting.

This is where puzzle driven development
is helping me. Instead of submitting bug reports, I add
"[TBD](http://en.wikipedia.org/wiki/To_be_announced)" puzzles into
the SRS document. They are informal replacements of strictly
formal requirements. They satisfy my customer, since they are in
plain English, and they are understandable by technical people.

Thus, when I don't have time, I don't wait. I'm changing the SRS
using TBDs where I can't do a proper and formal description of the
requirements. Or where I simply don't know what exactly to write.


## Architect

Now I'm an architect and my task is to implement a requirement, formally specified
in the SRS. PM is expecting a working feature from me, which I can deliver
only when the architecture is clear, classes are designed and implemented.

{% picture http://img.xdsd.org/2014/04/science-of-sleep-time-machine.jpg 0 The Science of Sleep (2006) by Michel Gondry %}

Being an architect, I'm responsible for assembling of all components
together, and making sure that they fit. In most cases,
I'm not creating them myself, but I'm telling everybody how they should
be created. My work flow of artifacts is the following:

{% graphviz directed graph %}
digraph G {
  SRS -> UML;
  UML -> "Source code";
}
{% endgraphviz %}

I receive requirements from the SRS, produce UML diagrams and
explain designers how to create source code according to my diagrams.
I don't really care how source code is implemented. I'm more concerned
about interaction of components and how well the entire architecture satisfies
functional and non-functional (!) requirements.

My task will be closed and paid when system analyst
changes its state to "implemented" in the SRS. System analyst is my only
customer. I have to sell my solution to him. Project manager
will close my task and will pay me when system analyst changes
the status of the functional requirement from "specified" to "implemented".

The task sounds big, and I have only half an hour. Obviously,
puzzle driven development should help me. I will create many tickets and
puzzles, for example:

 * SRS doesn't explain requirements properly
 * Non-functional requirements are not clear
 * UML diagrams are not clear enough
 * Components are not implemented
 * Build is not automated
 * Continuous integration is not configured
 * Quality of code is not under control
 * Performance testing is not automated

When all of my puzzles are resolved, I can get back to the main task
and finish feature implementation. Obviously, this may take long time,
days or even weeks.

But the cost of the main task is less than an hour.
What is the point of all this hard work? Well, it's simple,
I'll earn my hours from all that bugs reported.
From this small half-an-hour task
I will generate many tickets, every one of them will give me extra cash.


## Designer and Programmer

The only difference between designer and programmer is the complexity
of their tasks and the hourly rate. Designers usually do more complex
and higher level implementations, while programmers implement all
low-level details.

{% picture http://img.xdsd.org/2014/04/pulp-fiction-vincent-and-jules.jpg 0 Pulp Fiction (1994) by Quentin Tarantino %}

I'm a programmer and my task is to implement a class or a method or
fix some functional bug. In most cases, I have only half an hour available.
And most of the tasks are bigger than that.

Puzzle driven development helps me to break my task into smaller sub-tasks.
I'm starting with a unit test, always. In a unit test I'm trying to
reproduce the bug or model the feature. When my test fails, I commit
it and check how much time I have left. If I still have time to make it
pass &mdash; I do it, commit the changes, and report to the project manager.

If I don't have time to implement the fix, I mark pieces of code that
are not ready yet with `@todo` markers, commit them, and report to the
project manager that I'm done.

As you see, I'm fixing the code and breaking it at the same time. I'm fixing
it with my new unit test, but breaking with `@todo` puzzles.

This is how I help the project to increase quality of the product. By
fixing and breaking at the same time.



## Tester

I'm a tester and my primary motivation is to find bugs. This may be
contradictory to what you've heard before, but we, in XDSD, are planning
to find certain amount of bugs on every stage of the project.

{% picture http://img.xdsd.org/2014/04/fear-and-loathing-adrenochrome.jpg 0 Fear and Loathing in Las Vegas (1998) by Terry Gilliam %}

As as a tester, I'm receiving tasks from my project manager, which sound
like "review feature X and find 10 bugs in it". The project manager
needs certain amount of bugs to be found in order to fix the project.
From his point of view, the project is fixed when there were, say, 200 bugs
found. That's why he is asking me to find more.

Thus, finding bugs in response to that request is my "fixing" part
of the whole picture. At the same time, I can find defects on my own
and report them. This is my "breaking" part of the mission.
