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

Lots of difference between each regex engine, but we can find some feature that appeared in most of them.
Here I want to recommend a online regex tester: [regex101](https://regex101.com/)

### lazy && greedy

```
regexG = /.+/
regexL = /.+?/
text = "abcde"
```
Greedy regexG will match all the string "abcde" and lazy regexL will only match "a" in the text.

### capture groups && back reference 

```
capture group (abc)
non-capture group (?:abc)

back reference /a(,)b\1/
```

### Look around
```
positive lookahead(?=abc)
negative lookahead(?!abc)
positive lookbehind(?<=abc)
negative lookbehind(?<!abc)
```

### recursive patterns
which support recursive, perl, ruby, PHP...
Here we use PHP for example:
```
regex = {(?:[^{}]+|(?R))*}
text = body { color: #888; } @media (min-width: 768px) { body { color: #333; } } code { color: blue; }
```

difference from back reference.
````
regex = (sens|respons)e and \1ibility
text = sense and responsibility
````

```
regex = (sens|respons)e and (?1)ibility
text = sense and responsibility
```

## Performance

```
bad: (a|e|i|o|u) 
good: [aeiou] 

bad: (a+)*b 
good: a+b
```


