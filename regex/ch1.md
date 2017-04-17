# Regular Expression
# Chapter 1: Why need regular expression

## The history of regular expression

1. The story begins with a neuroscientist and a logician who together tried to understand how the human brain could produce complex patterns using simple cells that are bound together.
In 1943, Warren McCulloch and Walter Pitts published “A logical calculus of the ideas immanent in nervous activity”, in the Bulletin of Mathematical Biophysics 5:115-133.
2. In 1968, the Unix pioneer Ken Thompson published the article “Regular Expression Search Algorithm” in Communications of the ACM.
He also implemented Kleene’s notation in the editor QED. The aim was that the user could do advanced pattern matching in text files.
3. Larry Wall’s Perl programming language from the late 80’s helped Regular Expressions to become mainstream.

## Example to feel regular expression

Can this text can match the string?
```
text: abcdegabababaabab
match: ababaa 
```

Try grep in linux.
```linix
grep "JS" *.md
```

## Test you regular expression skill

Maybe you already know and used regular express. Now, let's have a test:

Multiple select:
```
Which regular expression(s) matches the sentence "www.microsoft.com" ?
A. ^\w+\.\w+\.\w+$
B. [w]{0,3}.[a-z]*.[a-z]+
C. .[c-w.]{3,10}[.][c-w.][.][a]|.+
D. [w][w][w][microsoft]+[com]+
E. \w*
```
链接：https://www.nowcoder.com/questionTerminal/09890d30b11145d28df93642577dc04f


## Tool to see your regex
[state diagram](https://regexper.com/)

> Note: For easy to write, we will use the 'regex' in the next chapter.

