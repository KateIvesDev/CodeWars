/*Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior" */

function toCamelCase(str){
    str = str.replace(/-/g, "_").split("_").map((value, index, array) => {
      if (index > 0) {
        return value.replace(value.charAt(0), value.charAt(0).toUpperCase())
      } else  {
        return value
      }
      })
    return str.join("")
  }