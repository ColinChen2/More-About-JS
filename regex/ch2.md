# Regular Expression
# Chapter 2: What's the Regex

## Basic Principles of Regex

When it comes the concepts of regex, you maybe say a lot: 'pattern', 'group', 'greedy', 'quantification' ...
However, we shall not discuss these here. We need it's constructs.

The patterns describable by regular expressions are built up from the following four constructs:
1. Singleton: matching a specific character.
2. Alternation: choice between two patterns.
3. Concatenation: succession of patterns.
4. Iteration: indefinite repetition of patterns.

Example.
* Singleton: . [abc]
* Alternation: a|b
* Concatenation: ab
* Iteration: (ab)*

## Standards && Engine

### Standards
The IEEE POSIX standard has three sets of compliance: 
BRE (Basic Regular Expressions) 
ERE (Extended Regular Expressions)

Standards is hard to generalize, some people think it's crappy. So people extend their RE engine to fit the needs of their application.

### Engine
Regular expression engines are the base of the implementation of regular expression matching algorithm.
There are several well known implementations. The Henry Spencer's NFA engine has been the base of most of them.

Two main kind engine:
1. DFA.
2. NFA.
    1. Traditional NFA
    2. POSIX NFA

[Comparison of regular expression engines](https://en.wikipedia.org/wiki/Comparison_of_regular_expression_engines)

## Important features

### lazy && greedy

```
regexG = /.+/
regexL = /.+?/
text = "abcde"
```
Greedy regexG will match all the string "abcde" and lazy regexL will only match "a" in the text.

### capture groups && Look around

```
capture group (abc)
non-capture group (?:abc)

positive lookahead(?=abc)
negative lookahead(?!=abc)
positive lookbehind(?<=abc)
negative lookahead(?<=abc)
```

### recursive patterns ??(need more search)

