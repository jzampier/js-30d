//!Regex
//? Creating a pattern with RegExp constructor
//Without flag
// let pattern = 'love'
// let regEx = new RegExp(pattern)

//Regex with global flag and case insensitive flag
// let flag = 'gi'
// let regEx2 = new RegExp(pattern, flag)
// console.log(regEx2);

//Declaring a pattern using RegExp obj
//let regEx3 = new RegExp('love','gi')

//? Creating a pattern --without-- RegExp Constructor
//With global flag and case insensitive flag
//let regEx4 = /love/gi

//! RegExp Object Methods
//? .test() Tests for a match in a string. it returns true or false.
// const str = 'I love JavaScript'
// const pattern = /love/
// const result = pattern.test(str)
// console.log(result);

//? .match Array containing all of the match .match()
//* Busca no texto o padrao que voce quer
// const str = 'I love JavaScript';
// const pattern = /lovE/i;
// let result = str.match(pattern);
// console.log(result);

//? . search() Tests for a match in a string. Returns index of the match or -1
//? if fails on searching
// result = str.search(pattern);
// console.log(result);

//? .replace() Search and replaces the matched substring with a replacement substring
// const txt =
//   'Python is the most beautiful language that a human begin has ever created.\
// I recomend python for a first programing language';
// let matchReplaced = txt.replace(/Python/gi, 'JavaScript');
// console.log(matchReplaced);
// const txt =
//   '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
// T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
// p%e%o%ple.\
// I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
// D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.';
// let matches = txt.replace(/%/g, '');
// console.log(matches);

/* [] A set of characters
    [a-c] means, a or b or c
    [a-z] means, any letter a to z
    [A-Z] means, any character A to Z
    [0-3] means, 0 or 1 or 2 or 3
    [0-9] means any number 0 to 9
    [A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
\ uses to escape special characters
    \d mean: match where the string contains digits (numbers from 0-9)
    \D mean: match where the string does not contain digits
.  any character except new line character(\n)
^ starts with
    r'^substring' eg r'^love', a sentence which starts with a word love
    r'[^abc] mean not a, not b, not c.
$ ends with
    r'substring$' eg r'love$', sentence ends with a word love
* zero or more times
    r'[a]*' means a optional or it can occur many times.
+ one or more times
    r'[a]+' means at least once or more timesF
? zero or one times
    r'[a]?' means zero times or once
\b word bounder, matches with the beginning or ending of a word
{3} Exactly 3 characters
{3,} At least 3 characters
{3,8} 3 to 8 characters
| Either or
    r'apple|banana' mean either of an apple or a banana
() Capture and group */

//? Square Bracket []
// const pattern = '[Aa]pple';
// const txt =
//   'Apple and banana are fruits. An old cliche says an apple a day \
// keeps the doctor away has been replaced by a banana a day keeps the doctor far \
// far away';
// const matches = txt.match(pattern);
// console.log(matches);

// const pattern2 = /[Aa]pple/g;
// console.log(txt.match(pattern2));
// const pattern3 = /[Aa]pple|[Bb]anana/g;
// console.log(txt.match(pattern3));

//? Escape character(\) in RegExp
// const pattern = /\d/g;
// const txt = 'This regular expression example was made in January 12,  2020.';
// const matches = txt.match(pattern);
// console.log(matches);

//? One or more times +
// const pattern2 = /\d+/g;
// console.log(txt.match(pattern2));

//? Period(.)
// const txt = 'Apple and banana are fruits';
// const pattern = /[a]./g; //. means any character expect new line character(\n)
// console.log(txt.match(pattern));

// const pattern2 = /[a].+/g; //. means any character , + any character one or more times
// console.log(txt.match(pattern2));

//? Zero or more times(*)
//Pattern may noto occur or it can occur many times
// const pattern3 = /[a].*/g;
// console.log(txt.match(pattern3));

//? Zero or one times(?)
//Pattern may not occur or it can occur once
// const txt2 =
//   'I am not sure if there is a convention how to write the word \
// e-mail. Some people write it email others may write it as Email or E-mail.';

// const pattern4 = /[Ee]-?mail/g; //? means optional
// console.log(txt2.match(pattern4));

//?Quantifier in RegExp
// const txt = 'This regular expression example was made in December 6,  2019.';
// const pattern = /\b\w{4}\b/g; //  exactly words with 4 characters
// console.log(txt.match(pattern));

// const pattern2 = /\b[a-zA-Z]{4}\b/g; // exactly words with 4 characters without numbers
// console.log(txt.match(pattern2));

// const pattern3 = /\d{4}/g; // a number with 4 digits
// console.log(txt.match(pattern3));

// const pattern4 = /\d{1,4}/g; // a number with 1 to 4 digits
// console.log(txt.match(pattern4));

//? Cart ^
//* Starts with ^
// const pattern6 = /^This/g; // ^ means starts with
// console.log(txt.match(pattern6));

//* Negation [^blablabla]
// const pattern7 = /[^A-Za-z,. ]+/g; // ^ in set means negation, not A to Z, not a to z, no space, no comma, no period.
// console.log(txt.match(pattern7));

//? Exact match
// Should have ^ starting and $ at the end /^[A-Z][a-z]{3,12}$/
// let pattern8 = /^[F-L][a-z]{4,12}$/;
// let name = 'Julio';
// let result = pattern8.test(name);
// console.log(result);

//!Exercises
//! Level 1
/* 1 Calculate the total annual income of the person from the following text.
‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro
online courses per month.’ */

/* 2 The position of some particles on the horizontal x-axis -12, -4, -3 and 
-1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. 
Extract these numbers and find the distance between the two furthest particles.*/

/* 3 Write a pattern which identify if a string is a valid JavaScript variable*/
