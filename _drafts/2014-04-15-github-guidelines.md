---
layout: article
title: Github Guidelines
date: 2014-04-13
author:
  name: Yegor Bugayenko
  avatar: http://www.gravatar.com/avatar/70942ffdd8084b5a51e17e3c0996d53c?s=300
categories: blog
disqus: true
tags:
  - github
  - tasks
description: |
  This step-by-step manual helps you to start working
  with a project hosted on Github, in XDSD spirit
keywords:
  - github
  - XDSD in Github
---

This manual explains your workflow, when working with XDSD project,
hosted on [Github.com](http://www.github.com).

You start when a Github issue is assigned to you. You will get
a message from a project manager. You will know the number of the
issue, its title, its description, and its buget in hours (usually 30 minutes).

If you don't agree with the budget, don't
hesitate to ask for a raise. As soon as you are comfortable with the budget and
you understand the scope of work, say it in the ticket and start working.
Be aware that anything you spend on top of the budget won't be paid!

## 1. Fork

You don't have write access to the repository in Github, even though you’re part
of the development team. In order to contribute with changes, you should fork
the repository (create your private copy of it), make changes there and submit
them for review using "a pull request".

After pull request review, repository owner will merge
your changes into the main repository. This is how main
development stream is protected against accidental damages.

This article explains how to fork a repository:
[fork-a-repo](https://help.github.com/articles/fork-a-repo)

This one explains how to download and install Git on your computer:
[set-up-git](https://help.github.com/articles/set-up-git)

Don't forget to add your private SSH key to Github:
[generating-ssh-keys](https://help.github.com/articles/generating-ssh-keys)

## 2. Branch

Once you have a fork of our repository in your account, clone it to your laptop
and checkout master branch, for example:

{% highlight bash linenos=table %}
git clone git@github.com:yegor256/jcabi.git
git checkout master
{% endhighlight %}

Now it's time to branch (`123` is the number of Github issue you're going to work
with, and the name of the branch):

{% highlight bash linenos=table %}
git checkout -b 123
{% endhighlight %}

By convention, we use the same name for the branch as the name of the issue
you're working with.

## 3. Changes

All task-related questions should be discussed in the Github issue. We don't
use emails, Skype, phone calls or meetings. All questions should be asked
right in Github issues.

Don't hesitate to submit new issues if you need help or something is not clear.

It's a very common situation, when you get a task, which you can't implement.
Don't panic. This happens mostly when you just joined the project and
don't have enough information yet. Don't try to figure this out yourself. Rule
of thumb is this: "if something is not clear, it is our fault, not yours".

If you don’t understand how project is designed, it is a fault of project designer.
Submit a bug report, asking for an explanation of a design concept. You will be
paid for this report, and the information you get back will be shared between
all other developers. Read this article:
[Bugs Are Welcome]({% post_url 2014/2014-04-13-bugs-are-welcome %}).

Don't expect anyone to help you. The only source of help is
the source code itself. If it doesn't
explain everything that you need &mdash; it is a bug, which should be reported.

## 4. Commit and Push

Make the changes you want to make, using your text editor or IDE. It's a good
practice to commit changes as often as you make them. Don't accumulate changes
for long.

{% highlight bash linenos=table %}
git commit -am '#123: the description of the changes'
git push origin 123
{% endhighlight %}

If you have questions about the scope of work, post them to the Github issue and
wait for the answer. If you think that the existing code needs improvements,
don't hesitate to submit a new issue to Github. Don't try to fix all problems in
one branch. Let other programmers take care of them.

## 5. Pull Request

Create a pull request in Github as this article explains:
[using-pull-requests](https://help.github.com/articles/using-pull-requests)

Post its number to the original issue and wait for feedback.

## 6. Code Review

In some time your pull request will be reviewed by someone
from the project team. In most cases, you will get some
negative comments, and you will have to fix them. Your
pull request won't be merged into `master`, until your
changes satisfies the reviewer.

Be patient, and listen to him carefully. However, don't think
that your reviewer is always right. If you think that your
changes are valid, insist and ask for a better review from someone else.

## 7. Merge

When everything looks clear for the reviewer, he will inform
our automated merge bot, which will pick your pull request
and will try to merge it into `master` branch.

Very often this operation fails, for different reason. It doesn't
matter what the reason is, it is your responsibility to make
sure that your branch is merged.

If you can't merge your branch because of failures in tests that
don't belong to your task, don't try to fix them. Instead,
report a problem as a new bug and wait for its resolution.

Remember, until it is merged, you are not paid.

## 8. Payment

Once your changes are merged, go back to the Github issue and
ask its author to close it.

Once the issue is closed a project manager will pay you within
a few hours, through Odesk or PayPal.
