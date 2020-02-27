---
layout: page
title: About
permalink: /about/
---
This is the base Jekyll theme. You can find out more info about customizing your Jekyll theme, as well as basic Jekyll usage documentation at [jekyllrb.com](https://jekyllrb.com/)

You can find the source code for Minima at GitHub:
[jekyll][jekyll-organization] /
[minima](https://github.com/jekyll/minima)

You can find the source code for Jekyll at GitHub:
[jekyll][jekyll-organization] /
[jekyll](https://github.com/jekyll/jekyll)


[jekyll-organization]: https://github.com/jekyll

### Gradient descent algorithm

$$
\theta_j := \theta_j - \alpha\frac{\partial}{\partial\theta_j}J(\theta_0,\theta_1,...,\theta_i)
$$

- $\alpha$: learning rate
- Simultaneous update

### Linear Regression

$h_\theta(x) = \theta_0 + \theta_1x$

Cost function: $J(\theta_0,\theta_1) = \frac{1}{2m}\sum\limits_{i=1}^{m}(h_\theta(x^{(i)})-y^{(i)})^2$
$$
\frac{\partial}{\partial\theta_0}J(\theta_0,\theta_1) = \frac{1}{m}\sum_{i=1}^{m}(h_\theta(x^{(i)})-y^{(i)})\\
\frac{\partial}{\partial\theta_1}J(\theta_0,\theta_1) = \frac{1}{m}\sum_{i=1}^{m}(h_\theta(x^{(i)})-y^{(i)})x^{(i)}\\
$$

repeat until convergence: {

$\theta_j := \theta_j - \alpha\frac{1}{m}\sum\limits_{i=1}^m(h_\theta(x^{(i)})-y^{(i)})\cdot x_j^{(i)}$ (for j:=0…n)

}

### Normal equation

$$
\theta = (X^TX)^{-1}X^Ty\\
x^{(i)} = \begin{bmatrix}
x^{(i)}_0\\
x^{(i)}_1\\
x^{(i)}_2\\
\vdots \\
x^{(i)}_n\\
\end{bmatrix}\
X(design\ matrix) = \begin{bmatrix} (x^{(1)})^T \\
(x^{(2)})^T \\
\vdots \\  
(x^{(n)})^T \\
\end{bmatrix}
$$

Octave:

```octave
pinv(X'*X)*X'*y
```

### Logistic regression cost function

$$
Cost(h_\theta(x),y) =
	\begin{cases}
		-log(h_\theta(x)), & \text{if}\ y=1 \\
		-log(1-h_\theta(x), & \text{if}\ y=0 \\
	\end{cases}\\
	\Leftrightarrow -ylog(h_\theta(x))-(1-y)log(1-h_\theta(x)
$$

_\*maximum likelihood estimation/convexity_

### Evaluating a Hypothesis

Sample: 70% training/30% testing

60% training set/20% cross validation/20% testing

Testing error: same as cost function

or use misclassification error
$$
error(h_\theta(x), y) =
\begin{cases}
	1, & round(h_\theta(x)) \not= y \\
	0, & round(h_\theta(x)) = y
\end{cases}
$$

| OPTIONS                         | EFFECTS             |
| :------------------------------ | :------------------ |
| Getting more training examples  | Fixes high variance |
| Trying smaller sets of features | Fixes high variance |
| Adding features                 | Fixes high bias     |
| Adding polynomial features      | Fixes high bias     |
| Decreasing λ                    | Fixes high bias     |
| Increasing λ                    | Fixes high variance |

### Neuron Network Walkthrough
