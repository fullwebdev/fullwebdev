# Comparing different rendering approaches and solutions

Standards alone fails to offer a simple and intuitive way to write and render HTML templates using JavaScript.
Most of the time, using the DOM API leads to poor performances.
To write performant modern web apps, we first need to understand how browser rendering works, and then to compare different rendering approaches.

Following this idea, Stefan Krause created [js-framework-benchmark](https://github.com/krausest/js-framework-benchmark){target=\_blank} to compare rendering libraries and framwork's performances.
This project is remarkable and can be very useful sometimes.

For my part, I wanted to focuse on more fundamental topics.
Comparing libraries and frameworks wasn't enough.
So I forked this project ([fullwebdev/benchmark](https://github.com/fullwebdev/benchmark){target=\_blank}) and added some new "Vanilla JS" implementations.

Right now, more than 15 different approaches were added and compared...

![Mean scores of "Vanilla" projects](/illustrations/plots/benchmarks/all/en/mean-vanilla-modern.png)

...along with ~50 libraries and frameworks (most of which was created for [js-framework-benchmark](https://github.com/krausest/js-framework-benchmark){target=\_blank}).

![Mean scores of all projects](/illustrations/plots/benchmarks/all/en/mean.png)

::: tip
Go check the [results table](/rendering/benchmark/table) for more details.
:::
