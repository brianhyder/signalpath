# SignalPath Platform Programming Exercises

## 1. Language Rankings
| Name  | Rank |
| ------------- | ------------- |
| Node.js | 1 |
| Java | 1 |
| PHP | 1 |
| JQuery | 2 |
| Angular | 3 |
| Perl | 3 |
| Python | 4 |
| Ruby | 4 |
| Golang | 4 |
| Scala | 4 |
| Chef | 4 |
| Clojure | 4 |
| Haskell | 4 |

## 2. Hex To Base64
This program (written in Node.js) is meant to take in a hex encoded string and transform it into a base64 encoded string.  The program operates by first converting the hex into an itermediary format (binary encoded string).  Lastly, it takes the string and process 6 characters at a time (representing 6 bits) until the encoding is complete.

*Prerequisites:*
1. Node.js (program build with version [8.9.4](https://nodejs.org/dist/v8.9.4/))

*Run the Program:*
1. `node hextobase64/hexToBase64.js N` where N is the hex encoded string to be converted.

*Assumptions:*
1. An input will be provided AND it will be a valid hex encoded string.

## 3. Special Math
This program (written in Scala) acts as a modified version of the fibonacci sequence.  

*Prerequisits:*
1. Scala (program built with version [2.12.8](https://www.scala-lang.org/download/))
2. `cd` into the project directory

*Run the Program*
1. Compile with command `scalac -d ./specialmath/classes ./specialmath/src/*.scala`
2. Execute the program with command `scala -classpath ./specialmath/classes SpecialMath N` where `N` specifies the position in the number sequence that the algorithm is meant to find.

*Assumptions:*
1. An input will be provided AND it will be a valid integer between 0 and 90 inclusive.