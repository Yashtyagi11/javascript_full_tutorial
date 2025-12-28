const name = "yash";
const greeting = "hello";
console.log(greeting + name + "!");   // string concatenation
console.log(`${greeting} my name is ${name}!`); // string interpolation


console.log(name.length); // length of the string
console.log(name.toUpperCase()); // convert to uppercase
console.log(name.toLowerCase()); // convert to lowercase
console.log(name.charAt(0)); // character at index 0
console.log(name.indexOf("a")); // index of character 'a'
console.log(name.slice(1, 3)); // slice from index 1 to 3
console.log(name.replace("ash", "ish")); // replace 'ash' with 'ish'    
console.log(name.split("")); // split into array of characters
console.log(name.includes("ash")); // check if 'ash' is in the string
console.log(name.startsWith("ya")); // check if string starts with 'ya'
console.log(name.endsWith("sh")); // check if string ends with 'sh'
console.log(name.repeat(3)); // repeat the string 3 times
console.log(name.trim()); // remove whitespace from both ends
console.log(name.concat(" Tyagi")); // concatenate with another string
console.log(name.padStart(10, "*")); // pad the start to length 10 with '*'
console.log(name.padEnd(10, "-")); // pad the end to length 10 with '-'
console.log(name.localeCompare("yash")); // compare with another string
console.log(name.normalize()); // normalize the string
console.log(name.valueOf()); // get the primitive value of the string
console.log(String.fromCharCode(121, 97, 115, 104)); // create string from char codes
console.log(name.match(/a/g)); // match all occurrences of 'a'
console.log(name.search("s")); // search for 's' in the string
console.log(name.substr(1, 3)); // substring from index 1 of length 3
console.log(name.toString()); // convert to string
console.log(name.anchor("nameAnchor")); // create an anchor element with the name 'nameAnchor'
console.log(name.big()); // create a big text
console.log(name.blink()); // create blinking text
console.log(name.bold()); // create bold text
console.log(name.fixed()); // create fixed-width text
console.log(name.fontcolor("red")); // create text with font color red
console.log(name.fontsize(5)); // create text with font size 5
console.log(name.italics()); // create italic text
console.log(name.link("http://example.com")); // create a hyperlink
console.log(name.small()); // create small text
console.log(name.strike()); // create strikethrough text
console.log(name.sub()); // create subscript text
console.log(name.sup()); // create superscript text
console.log(name.raw`Raw string: \n ${name}`); // create a raw string
console.log(name.toLocaleUpperCase()); // convert to locale-specific uppercase
console.log(name.toLocaleLowerCase()); // convert to locale-specific lowercase
console.log(name.matchAll(/a/g)); // match all occurrences of 'a' with iterator
console.log(name.replaceAll("a", "o")); // replace all occurrences of 'a' with 'o'
console.log(name.trimStart()); // remove whitespace from the start
console.log(name.trimEnd()); // remove whitespace from the end
console.log(name.at(1)); // character at index 1 using at()
console.log(name.codePointAt(1)); // Unicode code point at index 1
console.log(String.raw`Raw string: \n ${name}`); // create a raw string using String.raw
console.log(name.endsWith("sh", 4)); // check if string ends with 'sh' considering only first 4 characters
console.log(name.includes("a", 2)); // check if 'a' is in the string starting from index 2
console.log(name.indexOf("s", 2)); // index of character 's' starting from index 2
console.log(name.lastIndexOf("a")); // last index of character 'a'
console.log(name.localeCompare("Yash", undefined, { sensitivity: 'base' })); // compare with another string ignoring case
console.log(name.normalize("NFD")); // normalize the string using NFD form
console.log(name.padStart(10)); // pad the start to length 10 with spaces
console.log(name.padEnd(10)); // pad the end to length 10 with spaces
console.log(name.repeat(0)); // repeat the string 0 times
console.log(name.slice(-3)); // slice last 3 characters
console.log(name.substr(-3, 2)); // substring from 3rd last character of length 2
console.log(name.__proto__); // access the prototype of the string object
