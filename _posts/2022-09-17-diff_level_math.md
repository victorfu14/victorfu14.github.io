---
layout: post
title:  高中数学, undergrad数学, grad数学
categories: Misc
excerpt: 数学的直觉在不同级别上的串联
published: true
---

为了准备GRE的Math Subject而复习一些零碎的topic，零零碎碎的计算题给我一种回到了高考题的样子，突然觉得有一种轮回的感觉。

前天做组合课的作业，求解用power sum symmetric polynomial表示Cauchy identity时的系数。（如下图）

![problem](/assets/images/2022-09-17/problem.png)

一番级数展开之后突然就卡机了，然后去翻RP Stanley的enumerative combinatorics，丝毫不知道他用的exponential formula和cycle在干什么。于是决定硬凑系数，凑了一会儿发现不知道怎么去掉分母上partition length的阶乘，突然想到左边的展开式不是按大小order的。

大概是这个意思：一个partition lambda是一个非严格递减的正整数sequence, like (6, 5, 5, 4, ...). 然后这道题等式的右边sum over partition，左边sum over所有自然数。

![step1](/assets/images/2022-09-17/step1.png)
<p style="text-align: center; font-size: 0.8em; color: #828282">(左边， sum over 无穷和的从1到无穷次方)</p>

![rhs](/assets/images/2022-09-17/rhs.png)
<p style="text-align: center; font-size: 0.8em; color: #828282">(右边，sum over 所有partition)</p>

所以左边k次方占开的时候，$p_n$的积并不一定ordered by n. 因此，要考虑有多少种这样的乱序。这时候我的脑子里突然蹦出来了高中数学老师兼班主任杨春松的经典话语：“分堆送人问题！”然后我丢入了multinomial formula，于是系数成功消掉了。So yeah, 一点calculus的无穷级数加上一个高中老师的灵魂话语让我解完了一道grad数学课的作业题。That&#39;s how math works sometimes.

---

我高中的时候并不喜欢数学。而且不是因为不了解没学过而不喜欢，而是恰巧因为学了而不喜欢。

高中提前招生提前上课的时候我曾经告诉自己要学数学竞赛，要学数学，数学 is the basis of every scientific discipline (pun intended).

然而开始上数学课时候，各种不等式技巧，辅助线技巧，让我很沮丧。我没有足够的时间（或能力）去思考一个问题，于是做题就变成了欣赏别人不知道哪里来的intuition，然后自己做一些一些机械的运用。加上数学竞赛的氛围太过于competitive，我觉得can&#39;t find a way to fit in. 于是我带着化学竞赛选拔的好成绩加上老师的邀请，跑去了隔壁。

跌跌撞撞兜兜转转到了大学，我来到了太平洋的另一边（partially拜高考数学考炸了所赐），学着化学工程。我想着我要转CS，但是也不忘去看看同学的数学honor课作业。结果发现一看到题，我脑子里曾经机械记住的不等式技巧直接无缝对接上了。我又去office hour和教授讨论，教授对我的解法表示赞许。教授想的解法远没有玩弄一个不等式技巧来的方便。我突然感到了很高兴也很有自信。虽然我觉得真正打动我要学数学的主要原因是3b1b把pure math里关于“intuition”的部分真正展示给了我，但是我觉得那半个学期空降honor section office hour的快乐给了我很大的自信。

于是我来到了UMich学数学/CS，然而又一次我感到很沮丧。有很大一部分是因为疫情的原因，但是自己也再一次陷入了高中听数学竞赛的苦恼之中：被技巧和定理搞得眼花缭乱，自己又看不见intuition了，若是稍微拉下一点进度，就根本丧失了自己理解的时间。最明显的是代数的sequence，因为同时伴随着上了很多其他technical的课，学得很差。People are also very competitive, although mostly in a non-toxic way. 但是honor sequence上来的一部分学生总喜欢抱着特定的期望上课，喜欢在discord里过度评价老师的进度和课程的内容，让我同样再次不知道怎么fit in。但是这次I feel like I had a chip on my shoulder，所以我就硬学下去了。

然后一点又一点的，当初的沮丧会退掉，记忆会留下，然后在你不指望被数学女神光顾的时候突然让你惊喜（就像之前那道题一样）。从高中，到本科，到（将来的）研究生，我从来没有真正知道我为什么喜欢数学，没有真正知道我到底应该怎么学数学，但是我一直在学着数学，一直在跌跌撞撞的往前摸索着，沉浸在一个哪怕是很小的等号成立的快乐里。

也许没有高中短暂的一点高强度exposure我会快乐地慢慢地学起数学，却在进大学之后失去学数学的信心；也许没有honor sequence的敲打我就会难以理解代数的核心价值。所以可能每一次沮丧都是为了之后的醒悟作铺垫吧。

借用2017年苏锡常镇语文一模的作文题：

<blockquote>
删除我经历过的任何一个瞬间，我都不能成为今天的自己。
</blockquote>

作文的要求很像学数学的经历：文体不限，诗歌除外。