# Randomized Vocabulary Teaching

This is a very basic app used to randomize the treatment options for Project 2 for 88-251: Empirical Research Methods.

## Hypothesis

The question we’re trying to answer is whether verbal learning or a combination of verbal and visual learning leads to higher retention rate when trying to memorize the definitions of words. Whether you are trying to memorize the meaning of different technical words in medical school, or attempting to memorize what different words mean in a foreign language, this study focuses on which learning style will be more beneficial. Our hypothesis suggests that the combo of verbal and visual learning will lead to higher retention rates.

## Independent Variable

We will control which teaching method is provided to the students by using [this](http://vocabulary-skmehta.rhcloud.com/) website, which randomly assigns the students to a treatment option, either with pictures or without. Both treatments provide the same words, the only difference is that one provides picture corresponding to the definition.

## Dependent Variable

After being exposed to one of the treatments, the subject will take a quick quiz [here](https://docs.google.com/forms/d/1ywbZPz-fGY8qCF7nAWD0zHgRAwyrA1XCBRwc85LYzgs/viewform?c=0&w=1), evaluating the performance of their vocabulary training.

## Analysis

We will subsequently analyze the results of each group (with or without pictures), hoping to find definitive evidence to either reject, or fail to reject or hypothesis.

## Results

You can see the data in the `analysis/results` directory, and the results of a preliminary t-test , according to `analysis/t_test.R` below:

```
	Welch Two Sample t-test

data:  with_pictures$Score and without_pictures$Score
t = 1.9328, df = 25.591, p-value = 0.0644
alternative hypothesis: true difference in means is not equal to 0
95 percent confidence interval:
 -0.04595589  1.47452732
sample estimates:
mean of x mean of y 
 5.714286  5.000000 
```

We *have not* not produced a significant result so far, but may potentially something as we produce more data.