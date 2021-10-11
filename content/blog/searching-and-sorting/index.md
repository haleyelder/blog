---
title: Searching, Sorting, and So Much for No Math
date: "2021-09-16T18:00:00.121Z"
description: The title for the week mentions algorithms, but they are not what I had expected..
---

The title for the week mentions algorithms, but it was not exactly as ones I've have worked through before. Those were shorter challenges using JavaScript through one of the sections of freeCodeCamp, that was a struggle for me at the time too. This week wall all about Big O notation instead! I've also heard about this but it never really dug into the concept and understand since it's not used as much in web development. The closest you may experience time and usage issues with web development would be running out of API calls, and incur API charges for the extra usage. 

In short, Big O notation is how long a task can take based on how many operations or complex the problem is. Ideally, the problem at hand should take the least amount of time as the complexity or number of operations grows. The common example used to outline the different lines on the graph below and grasping the concept is searching through a phone book for a name. The last line I had to dig a little for the reasoning since I hardly passed Pre-calculus in high school and tried to keep as far away from math classes from then on.

- O(n) = searching one page at a time for someones name; lot of time and operations to complete
- O(n/2) = searching 2 pages at a time for the name; a little faster than one page at a time but still takes a while
- O(log&#x2082;n) = dividing the pages in half each time; significantly speeds up processing with time

![Visual graph of Big O Notation](/images/bigOgraph.png)

Another part of determining the time and complexity of an algorithm is using different types of sorting algorithms, this week focused on just three: selection, bubble, and merge. The lab for this week was a good test to determine which data set (sorted, unsorted, and randomized) belonged to which sorting type and explain whyy. [This visualizer](https://visualgo.net/en/sorting?slide=1) really helped solve me understand the different types and narrow down which was which.

Selection sort would loop over a data set, find the lowest value in the set and swap with the first. This can take some time to finish larger data sets since each loop needs to finish before deciding which value is lowest to swap and move to the next check. 

Bubble sort does a similar type of swapping of values but only compares two at a time; this sorting still needs to complete a full loop on the data set before coming back to the start of the data. This is a little faster than selection since it's doing twice as much comparisons, but can be slower if the lower value is in the near end of the data to make it to the first; it'll need to be bubbled up to the front. 

Merge sort is spliting the data into halves, comparing the data and sorting it, and continuing these operations till it's all in one order. This is one of the fastest since the data is halved but more operations may be done than expected since there still needs to be a check if the data chunk is in order or not.  

There were a lot of "if's" with these sorting algorithms for the problem where the "best case," is the lower bounds or Big Omega, and "worst case" is the upper bounds, or Big O. Usually best case is if it's already sorted the first time and worst could be a large data set of random information.

There was a lot of new information this week and took a bit to wrap my head around, I'm glad I found some additional resources to help understand. Since this one is backdated, it didnt even hold a candle to week 4 memory!

-- H