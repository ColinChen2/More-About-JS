# Regular Expression
# Chapter 3: Regex in JS

## Learn regex in js with MDN

I recommend to look up the [MDN regex Document](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp)


## Basic using in JS

1.Singleton: 
* [Character Classes](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp#character-classes)
* [Character Sets](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp#character-sets)
* [Boundaries](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp#boundaries)

2.Alternation: 
* [Alternation](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp#alternation)

3.Concatenation: we use it everywhere, except you only match only one character.

4.Iteration:
* [Quantifiers](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp#quantifiers)

## Import feature in JS

Here we use the match method to test regex in JS, The match method always return a Array! 
But we just get the match pattern result as final result.

### lazy && greedy
In JS, Default rules use greedy pattern and first match.
Before, I'm confused greedy with flag g(global). So, look at the example below:

```
var s = "acb aob alb"

s.match(/a.b/) -> "acb"
s.match(/a.*b/) -> "acb aob alb"
s.match(/a.*?b/) -> "acb"

s.match(/a.b/g) -> ["acb", "aqb", "aub"]
s.match(/a.*b/g) -> ["acb aob alb"]
s.match(/a.*?b/g) -> ["acb", "aqb", "aub"]
```

Greedy focus on the match pattern, flag g focus on match result.

### capture groups && back reference
In JS, (X) capturing group, (?:x) non-capturing group. 
Why need capture group, we use them to match. So, we always use them in two ways:

```
var s = "apple, orange,"
var re = /apple(,)\sorange\1/)
var reg = /(\w+),\s(\w+),/

s.match(re) -> "apple, orange,"
s.replace(reg, "$1; $2") -> "apple; orange"

```

### Look around

In JS, only lookahead!
```
// get colin but only in colin.chen not colin.li or other colin

"colin.chen".match(/colin(?=.chen)/)
```

### recursive patterns
Not support!



