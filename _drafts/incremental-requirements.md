---
layout: article
title: Incremental Requirements Development With Requs
date: 2014-04-25
author:
  name: Yegor Bugayenko
  avatar: http://www.gravatar.com/avatar/70942ffdd8084b5a51e17e3c0996d53c?s=300
categories: blog
disqus: true
tags:
  - requs
  - requirements
  - incremental
description:
  Requirements engineering can be done incrementaly with
  Requs open source controlled natural language
keywords:
  - requs
  - requirements engineering
  - requirements development
  - incremental requirements development
---

Requirements engineering is one of the most important disciplines
in software development. Maybe even more important than architecture,
design or coding itself. Joy Beatty and Karl Wiegers in
[Software Requirements](http://www.amazon.com/Software-Requirements-Developer-Best-Practices/dp/0735679665)
argue that a cost of mistake made in a requirements specification
is significantly higher than a bug made in source code. I totally agree.

In XDSD projects we are specifying requirements using [Requs](http://www.requs.org),
a [controlled natural language](http://en.wikipedia.org/wiki/Controlled_natural_language)
that sounds like English, and, at the same time, is parseable
by computers. A simple requirements document in Requs may look like:

{% highlight text linenos=table %}
Department has employee-s.
Employee has name and salary.
UC1 where Employee gets raise: "TBD".
{% endhighlight %}

This Software Requirements Specification (SRS) defines two types
(`Department` and `Employee`) and one
method `UC` (aka "use case").
Requs syntax is explained [here](http://www.requs.org/syntax.html).

The main and the only goal of a requirements engineering in any XDSD project
is to create a complete and non-ambiguous SRS document. The person who is
doing it is called "system analyst". This article explains his or her main
tasks and discusses possible pitfalls.

## Tasks

We modify SRS incrementally. And our increments are very small. Say, we have
a sample document I mentioned above, and I'm a system analyst in the project.
All my tasks will sounds like "there is a bug in SRS, let's fix it".
Even if it is a suggestion, it will still start with a complain about
incompleteness of the SRS, for example:

 * UC1 doesn't explain how exactly an employee gets a raise
 * Does salary of an employee has some limits? Can it be negative?
 * How many employees a department can have? Can it be zero?
 * Can an employee get a decrease?

All of these
[bugs]({% post_url 2014/2014-04-13-bugs-are-welcome %})
will be addressed to me. I need to fix them by improving
the SRS. My workflow is the same in every task:

 1. Understand what is required
 2. Change the SRS
 3. Close the task

Let's go step by step.

## Requirements Providers

As a system analyst, my job is to understand what product owners
(aka "requirements providers") want and document their wishes. In most cases,
they are very vague and chaotic. My job is to make them complete
and unambiguous. That's why the first step is about understanding
what is required.

First of all, I need to find out who is the product owner. He will sign
the SRS, so I should pay maximum attention to his opinions. However, my job
is not only to listen, but also to suggest. A good system analyst can
provoke a creative thinking of a product owner, at least
by asking right questions.

OK, now I know who is the product owner, and I want to talk to him. In XDSD,
we don't do any meetings, phone calls, or any other informal communications.
My only mechanism to get the information I'm interested in is &mdash; tickets.

I will submit **new** tickets, addressing them to the product owner. Well, there
can be many product owners in a project. So I will submit tickets, clearly
stating at their first sentence that they are questions to one of the product
owners. They will find out who is the best person to answer.

Thus, while working with a single task, I will submit many questions and
get many interesting answers. I'll do all this in order to improve my
understanding of the product its owners are developing.

When I understand how the SRS should be fixed, it is time to make changes in
Requs files.

## Requs Files

The SRS document is generated automatically on every continuous integration
build cycle. It is compiled from pieces. All pieces are `.req` files. They
usually are located in `src/main/requs` directory in a project repository.

My job, as a system analyst, is to make changes to some of these files
and submit a pull request for review.
[Github Guidelines]({% post_url 2014/2014-04-15-github-guidelines %}) explain
how to work with Github. In short, I have to:

 * clone the repository,
 * checkout its copy to my computer,
 * make changes,
 * commit my changes,
 * push them to my remote fork, and
 * submit a pull request

It doesn't really matter which files I edit, Requs automatically compose
together all files with `req` extension. I can even add new files to
the directory &mdash; they will be picked up. I can even add sub-directories
with files.

## Local Build

Before submitting a pull request I will try to validate that my changes
are syntactically and grammatically valid. I will compile Requs files into
the SRS document, the same way our continuous integration server is compiling
them.

Before I can compile, I will install
[JDK7](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html) and
[Maven](http://maven.apache.org/download.cgi).

Then, I will make this command line call in the project directory:

{% highlight bash linenos=table %}
mvn clean requs:compile
{% endhighlight %}

I'm expecting to see `BUILD SUCCESS` message. If not, there are some errors
and I should fix them. My pull request won't be merged and I won't be able
to close the task, if Requs can't compile the files.

Once compiled, I can open the SRS in any browser. It is in
`target/requs/index.xml`. Even though it is an XML, Google Chrome and Safari
can open it as a web page.

## Pull Request Review

Once all changes are done, I will submit a pull request. A project manager
will assign someone to review my pull request and I will get some feedback.

In most cases, there will be some corrections requested. Most probably my
request is being reviewed by another system analyst. I have to address
all comments and make sure my changes look good for the reviewer.

I will make extra changes to the same branch locally, and push to Github.
The pull request will be updated automatically, I don't need to create a new one.

Once pull request is clean enough for the reviewer, he will merge it into
the `master` branch.

## Close and Get Paid

Finally, my pull request is merged and I get back to the task owner. I tell
him that the SRS was fixed and he should be able to review it. His original
problem should be fixed by now &mdash; the SRS should provide the information
required.

He will close the task and the project manager will pay me, in a few hours.
