
let hexCommandLineInput = process.argv[2];
if (!hexCommandLineInput) {
  console.error('No test input was provided!');
  process.exit(1);
}

/**
 * Provides an index of characters in the base 64 sequence.
 */
const base64Maping = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','+','/'];

/**
 * Provides the utility functions to successfully convert a hex string to a base 64 encoded string
 * @class
 */
class HexToBase64 {

  /**
   * Converts the hex string provided to the program to a binary encoded string.
   * @param {String} hexInput A hex encoded string where each sequence of 2 characters represent a 
   * single value
   * @returns {text: string, binary: string} An object that contains two key/value pairs.  The 
   * first is the ascii text that is derived from the hex string and the second is the binary string.  
   * This is an ascii representation of a binary sequence.
   */
  static toBinaryText(hexInput) {
    let text = new Array(hexInput.length / 2);
    let binary = new Array(hexInput.length / 2);
    let iteration = 0;
    for (let i = 0; i < hexInput.length; i+=2) {
      const charCode = parseInt(hexInput[i]+hexInput[i+1], 16);
      const char = String.fromCharCode(charCode);
      text[iteration] = char;
      binary[iteration++] = '00'.concat(char.charCodeAt(0).toString(2)).slice(-8);
    }
    return {text: text.join(''), binary: binary.join('')};
  }

  /**
   * Converts the binary represented string into a base64 encoded string
   * @param {string} binaryStr An ascii representation of a binary sequence.  The sequence 
   * represents a group of characters.
   */
  static toBase64(binaryStr) {
    let encoded = new Array( Math.ceil(binaryStr.length / 6) + 2 );
    let index = 0;
    let iteration = 0;
    let shouldProcess;
    do {
      let hexCodeStr = binary.slice(index, index + 6);
      shouldProcess = hexCodeStr.length === 6;
      if (!shouldProcess) {
        while (hexCodeStr.length < 6) {
          hexCodeStr += '0';
        }
      }
      const hexCode = parseInt(hexCodeStr, 2);
      encoded[iteration++] = base64Maping[hexCode];
      index+=6;
    } while(shouldProcess);

    encoded[encoded.length - 1] = '=';
    encoded[encoded.length - 2] = '=';
    return encoded.join('');
  }
}

//begin execution here
const {binary} = HexToBase64.toBinaryText(hexCommandLineInput);
const encoded = HexToBase64.toBase64(binary);
console.log(encoded);
