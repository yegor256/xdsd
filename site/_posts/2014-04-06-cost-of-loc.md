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

Yes, I know, "line of code" (LoC)
is a [very wrong metric](http://stackoverflow.com/questions/966800/mythical-man-month-10-lines-per-developer-day-how-close-on-large-projects).
There were [tons of articles](http://blog.codinghorror.com/diseconomies-of-scale-and-lines-of-code/)
written about it, including famous books.

However, I want to compare two projects I've recently taken participation in,
and show some very interesting numbers.

## Project #1: traditionally co-located

The first software project I was part of,
was done by a traditionally co-located group of programmers.
There were about 20 of them (I'm not counting managers, analysts,
product owners, SCRUM masters, etc.) The project is a web auctioning site, with
pretty high traffic (over two million page views per day).

<p><img src="http://img.xdsd.org/2014/04/brazil-crowded-office.jpg"
  style="width: 600px;"
  alt="Brazil (1985) by Terry Gilliam"/></p>

The code base size was about 200k lines, where 150k was PHP, 35k in JavaScript and the
rest in CSS, XML, Ruby, and something else. I'm counting only non-empty and
non-comment lines of code, using
[`cloc.pl`](http://cloc.sourceforge.net/).

It was a commercial project, so I can't disclose its name.

The team was co-located in one office in Europe, where everybody were
working "from nine till five". We had meetings, lunches, desk-to-desk chats,
and a lot of informal communications. All tasks were tracked in JIRA.

## Project #2: extremely distributed

The second project was an open source Java product, developed by an
[extremely distributed](http://www.xdsd.org)
team of about 15 developers. We didn't have any chats, or
any other informal communications. We discussed everything in
tickets, using Github issue tracking. Code base was significantly smaller
with about 30k lines, where 90% was in Java and the rest in XML.

<p><img src="http://img.xdsd.org/2014/04/shaolin-temple-jet-li.jpg"
  style="width: 600px;"
  alt="Shaolin Temple (1982) by Chang Hsin Yen"/></p>

Both projects hosted their code bases in Github. Both teams
were developing in [feature branches](http://martinfowler.com/bliki/FeatureBranch.html),
even small fixes.

Both teams were using build automation, continuous integration, pre-flight
builds, static analysis, and code reviews. Both projects satisfied
the requirements of their users. I'm mentioning this in order to emphasize
that both produces produced valueable and useful lines of code. There was
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
was paying $25-35 per hour, for completed tasks only, according to one of
the principles of [XDSD](http://www.xdsd.org).

The first one, in three months produced 59k new lines and removed
29k changes in `master` branch, which in total equals to 88k. The
project spent about 10,000 hours to produce these lines
(20 programmers, 3 months, 170 working hours per month), which means $350k.
Thus, the project has paid **$3.98 per LoC**.

Taking into account other expenses a company has to pay in order to
maintain such a team, we can easily double this number and we'll get
very close to what people say about their projects
(that's all I've found in public access, so far):

 * $12&ndash;103: [crazyontap.com](http://www.crazyontap.com/topic.php?TopicId=242135)
 * $15&ndash;40: [betterembsw.blogspot.nl](http://betterembsw.blogspot.nl/2010/10/embedded-software-costs-15-40-per-line.html)
 * over $5: [joelonsoftware.com](http://discuss.joelonsoftware.com/default.asp?biz.5.467536.25)

The second project, in the same three months produced 45k new lines and removed 9k, which
in total equals to 54k. To complete this work we've spent $7k
(approximately 200 working hours).

Thus, the project has paid **$0.13 per LoC**. That also means
that programmers were writing approximately 270 lines per hour
or over 2,000 per day.
[The Mythical Man-Month](http://en.wikipedia.org/wiki/The_Mythical_Man-Month)
is talking about 10 lines per day, which is 200 times
less than we saw in our project.

If you're curios, I'm using this script to get the numbers from git:

{% highlight bash linenos=table %}
git log "--since=3 months" --pretty=tformat: --numstat \
  | gawk '{ add += $1; subs += $2; } END { printf "added: %s removed: %s\n",add,subs,loc }' -
{% endhighlight %}

You can validate the numbers, the second project is in Github:
[jcabi/jcabi-github](https://github.com/jcabi/jcabi-github).

## What does it all mean?

What I'm trying to say by these numbers is that distributed
programming is much more effective, money-wise, than a co-located team.

Again, I can hear you saying that "line of code" is not a proper metric.
But, come on, $0.13 vs. $3.98? Thirty times more expensive? It's not about
numbers any more. It's about waste of money. Big time.

Of course, this result can't be achieved just by telling your programmers
to work from home and never come to the office. XDSD is not about that.
[XDSD](http://www.xdsd.org) is about strict quality principles, which should
be followed by the entire team.

And when these principles are in place &mdash; you pay thirty times less.
