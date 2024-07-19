import { useCallback, useState } from "react";

export type PasswordOptions = {
  includeUpperCase: boolean;
  includeLowerCase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  passwordLength: number;
};

const upperCaseAlphabets: string[] = [];
const lowerCaseAlphabets: string[] = [];
const numbers: number[] = [];
const symbols: string[] = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  "|",
  "\\",
  ";",
  ":",
  "'",
  '"',
  "<",
  ">",
  ",",
  ".",
  "/",
  "?",
];

for (let i = 65; i <= 90; i++) {
  upperCaseAlphabets.push(String.fromCharCode(i));
}

for (let i = 97; i <= 122; i++) {
  lowerCaseAlphabets.push(String.fromCharCode(i));
}

for (let i = 0; i <= 9; i++) {
  numbers.push(i);
}

export default function useGeneratePassword() {
  const generatePasswordFn = useCallback(
    ({
      includeLowerCase,
      includeNumbers,
      includeSymbols,
      passwordLength,
      includeUpperCase,
    }: PasswordOptions) => {
      if (passwordLength === 0) return "";
      if (
        !includeLowerCase &&
        !includeUpperCase &&
        !includeNumbers &&
        !includeSymbols
      )
        return "";

      const characterSet = [];
      const generatedPassword = [];

      if (includeLowerCase) characterSet.push(lowerCaseAlphabets);
      if (includeUpperCase) characterSet.push(upperCaseAlphabets);
      if (includeNumbers) characterSet.push(numbers);
      if (includeSymbols) characterSet.push(symbols);

      for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characterSet.length);
        let randomCharIndex = Math.floor(
          Math.random() * characterSet[randomIndex].length
        );

        generatedPassword.push(characterSet[randomIndex][randomCharIndex]);
      }
      return generatedPassword.join("");
    },
    []
  );

  return generatePasswordFn;
}
