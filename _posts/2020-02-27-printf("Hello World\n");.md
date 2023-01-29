---
layout: post
title:  printf("Hello World\n");
date:		2020-02-27 23:45:00 -0600
categories: Random
comments: false
published: true
---

{% highlight C %}

union {

​	double decimal;

​	unsigned long binary;

} val;

val.decimal = (double) 0.1;

printf("What you see is %lf, but computer's struggling with %lx", val.decimal, val.binary);

#=> prints "What you see is 0.10000, but computer is struggling with 0x3fb999999999999a"

{% endhighlight %}

Well, that is how the representation will change when you change from base 10 to base 2. So is life.

If you change a perspective, you'll probably get an entirely different experience. Sometimes you would struggle, sometimes you would be grateful.

Here's to my first personal website.

Some \\( \LaTeX \\) testing:

\\[ e^{i\pi} + 1 = 0 \\]

\\[ E=\sqrt{(pc)^{2}+(m_0c^2)^2} \\]

\\[ \Delta G = \Delta H - T \cdot \Delta S \\]

Here's to life, science and human's passion in exploring.
