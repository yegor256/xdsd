---
layout: article
title: "How much do you pay per line of code?"
date: 2014-04-06
author:
  name: Yegor Bugayenko
  avatar: http://www.gravatar.com/avatar/70942ffdd8084b5a51e17e3c0996d53c?s=300
categories: blog
disqus: true
---

Yes, I know, line of code is a very wrong metric. There were tons of
articles written about it, including famous books. However, I want to
compare two projects I've recently taken participation in.

## Traditionally co-located

The first one was done by a traditionally co-located group of programmers.
There were about 25 of them (I'm not counting managers, analysts,
product owners, SCRUM masters, etc.) The project is a web auctioning site, with
pretty high traffic (over two million page views per day).

The code base size was about 200k lines, where 150k was PHP, 35k in JavaScript and the
rest in CSS, XML, Ruby, and something else. I'm counting only non-empty and
non-comment lines of code, using
[`cloc.pl`](http://cloc.sourceforge.net/).

It was commercial projects, so I can't disclose their names.

The team was co-located in one office in Europe, where everybody were
working from nine till five. We had meetings, lunches, desk-to-desk chats,
and all that stuff. All tasks were tracked in JIRA.

## Extremely distributed

The second one was an open source Java product, developed by an
[extremely distributed](http://www.xdsd.org)
team of about 15 developers. We didn't have any chats, or
any other informal communications. We discussed everything in
tickets, using Github issue tracking. Code base was significantly smaller
with about 30k lines, where 90% was in Java and the rest in XML.

Both projects hosted their code bases in Github.

Both teams were using build automation, continuous integration, pre-flight
builds, static analysis, and code reviews. Both projects satisfied
the requirements of their users. I'm mentioning this in order to show
that both projects produced valueable and useful lines of code. There was
no garbage and almost no code duplication.

## Show me the money

In both projects my role was called a lead architect, and I know their
economics. Besides that, I had access to both Git repositories, so I
can measure how many new lines (or changed lines) were introduced by both
teams in, say, three months period.

Now, let's see the numbers.

The first project (the co-located one) was paying approximately &euro;50,000
annual salary to a good developer, which was about $5,600 per month
or about $35 per hour. The second one (an extremely distributed)
was paying $30-40 per hour.

The first one, in three months produced 59k new lines and removed
29k changes in `master` branch, which in total equals to 88k. The
project spent about 10,000 hours to produce these lines
(20 programmers, 3 months, 170 working hours per month) or $350k. This means that
the project paid **$3.98 per LoC**.

The second one, in three months produced 45k new lines and removed 9k, which
in total equals to 54k. To complete this work we've spent $7k
(approximately 200 working hours).
That means that the project paid **$0.13 per LoC**.

## So, what?

What I'm trying to say by these numbers is that distributed
programming is much more effective, money-wise, than co-located teams.
Again, I can hear you saying that a line of code is not a proper metric.
But, come on, $0.13 vs. $3.98? Thirty times more expensive? It's not about
metrics any more. It's about waste of money. Big time.

Of course, this result can't be achieved just by telling your programmers
to work from home and never come to the office. XDSD is not about that.
[XDSD](http://www.xdsd.org) is about strict quality principles, which should
be followed by the entire team.

And when these principles are in place &mdash; you pay thirty time less for
the same result.
