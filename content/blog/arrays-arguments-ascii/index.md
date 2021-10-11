---
title: Arrays, Arguments, and ASCII oh my!
date: "2021-08-23T18:00:00.121Z"
description: Another course week down, but this one had a bit of a break between problem sets due to a move, a few laptop issues, and needed a little mental break after all that. 
---
Another course week down, but this one had a bit of a break between problem sets due to a move, a few laptop issues, and much needed mental break. The break was partially unintentional, but realized really needed it after a couple stressful months in both career and personal aspects of my life. Now a bit more settled in a new place and functioning laptop, full steam ahead. I even got the go ahead to be able to work on part of this course during work hours if I had most of my work done for the day; honestly it's a nice mental break during the day and something different to look forward to to work on. After a conversation about career goals and certificatesion gave the go ahead a bit of an extra push. 

Anyway, back to the code. All week two had mentioned in the header was "array," and I'm like okay I know what those are…in JavaScript, but just like everything else I've encountered so far, it'll be quite different in C. Such as below, arrays in JavaScript are a collection of numbers, strings, or objects saved to a variable...

`let groceries = ["apples","bananas","bread","milk"];`

...in C, they're a bit more specific and tricky: you need to specify the data type, name, and array size when you create it. Obviously there is much more to cover about arrays in C than I have here but it was one of my first observations having some background in JavaScript and easing into another language's fundamentals. An array of numbers can be written in at leaast two ways; one specifying the length and one does not need it below:

`int num[4] = {3,5,14,23};`

`int num[] = {3,5,14,23};`

Luckily accessing or updating the contents in an array is similar to JavaScript as they both use zero indexing (the first item is 0 not 1) and bracket notation. Such as, to access bananas in the JavaScript example would look like `groceries[2]` where the C one is `num[1] = 5`. Later on the arrays gote even more tricky where we would have to access user input data put into arrays as command line arguments to validate entries and make sure our program can process the proper data. I'll skip those explanations for now as I had to watch the short videos a few times to understand and implement myself!

The other tricky learning part of this week I got hung up on a bit was working more indept with the data type char (single characters, eg: 'a' or 's') along with an [ASCII chart](https://www.rapidtables.com/code/text/ascii-table.html) to calculate scoring for the Scrabble lab and shifting letters in a [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher). With my self explanations in my notebook, they eventually made sense. 

I had noticed as the labs and problem sets get more difficult how similar I treated them as the freeCodeCamp algorithm section; I'd be able to get most of the problem done or set up (around 80 to 90%), but stuck on the last remaining bit. From there, quite a bit of Googling, or searching and asking the Discord for help. 

I figure, in a possible 'real world' scenario, I'd be able to grab someone more senior as well to look at the problem if I was really stuck. I am now realizing my explanations at the end should be how to organize my beginning pseudocode to begin breaking down the problem; another thing to practice!

Next is week 3 and says algorithms, oi...

-- H