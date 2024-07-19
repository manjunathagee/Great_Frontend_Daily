"use client";
import React, { useId, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaRegCopy } from "react-icons/fa";
import useGeneratePassword, { PasswordOptions } from "./useGeneratePassword";

const PasswordGenerator = () => {
  const id = useId();
  const [passwordOptions, setPasswordOptions] = useState<PasswordOptions>({
    includeLowerCase: false,
    includeNumbers: false,
    includeUpperCase: false,
    includeSymbols: false,
    passwordLength: 0,
  });

  const generatePasswordFn = useGeneratePassword();
  const [generatedPassword, setGeneratedPassword] = useState("");

  const generatePasswordHandler = () => {
    const password = generatePasswordFn(passwordOptions);
    setGeneratedPassword(password);
  };

  const passwordStrengthVal =
    Number(passwordOptions.includeLowerCase) +
    Number(passwordOptions.includeUpperCase) +
    Number(passwordOptions.includeNumbers) +
    Number(passwordOptions.includeSymbols) +
    passwordOptions.passwordLength;

  return (
    <main className="font-jetbrainsMono bg-dark-800 min-h-screen min-w-screen p-40">
      <section className="text-white w-[345px] md:w-[540px] space-y-6 mx-auto overflow-auto">
        <div className="text-center text-dark-400 h1-bold-m">
          Password Generator
        </div>
        <article className="space-y-4">
          <div className="bg-dark-600 w-full flex justify-between px-4 items-center h-[65px]">
            <span className="text-2xl">{generatedPassword}</span>
            <span className="text-2xl text-green-200 hover:cursor-pointer hover:text-white">
              <FaRegCopy />
            </span>
          </div>
          <div className="bg-dark-600 w-full flex flex-col gap-6 p-4">
            <div className="flex justify-between items-center">
              <span className="text-lg">Character Length</span>
              <span className="text-green-200 text-2xl">
                {passwordOptions.passwordLength}
              </span>
            </div>
            <div className="space-y-6">
              <div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={passwordOptions.passwordLength}
                  name="character_length"
                  className="w-full range-input accent-green-200 hover:accent-black"
                  onChange={(e) =>
                    setPasswordOptions((curr) => ({
                      ...curr,
                      passwordLength: +e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex gap-4 items-center">
                <input
                  type="checkbox"
                  name="include_uppercase"
                  checked={passwordOptions.includeUpperCase}
                  onChange={(e) =>
                    setPasswordOptions((curr) => ({
                      ...curr,
                      includeUpperCase: e.target.checked,
                    }))
                  }
                  id={`uppercase-${id}`}
                  className="accent-green-200 h-[20px] w-[20px] hover:cursor-pointer"
                />
                <label htmlFor={`uppercase-${id}`} className="body-bold">
                  Include Uppercase Letters
                </label>
              </div>
              <div className="flex gap-4 items-center">
                <input
                  type="checkbox"
                  name="include_lowercase"
                  checked={passwordOptions.includeLowerCase}
                  onChange={(e) =>
                    setPasswordOptions((curr) => ({
                      ...curr,
                      includeLowerCase: e.target.checked,
                    }))
                  }
                  id={`lowercase-${id}`}
                  className="accent-green-200 h-[20px] w-[20px] hover:cursor-pointer"
                />
                <label htmlFor={`lowercase-${id}`}>
                  Include Lowercase Letters
                </label>
              </div>
              <div className="flex gap-4 items-center">
                <input
                  type="checkbox"
                  name="include_numbers"
                  checked={passwordOptions.includeNumbers}
                  onChange={(e) =>
                    setPasswordOptions((curr) => ({
                      ...curr,
                      includeNumbers: e.target.checked,
                    }))
                  }
                  id={`numbers-${id}`}
                  className="accent-green-200 h-[20px] w-[20px] hover:cursor-pointer"
                />
                <label htmlFor={`numbers-${id}`}>Include Numbers</label>
              </div>
              <div className="flex gap-4 items-center">
                <input
                  type="checkbox"
                  name="include_symbols"
                  checked={passwordOptions.includeSymbols}
                  onChange={(e) =>
                    setPasswordOptions((curr) => ({
                      ...curr,
                      includeSymbols: e.target.checked,
                    }))
                  }
                  id={`symbols-${id}`}
                  className="accent-green-200 h-[20px] w-[20px] hover:cursor-pointer"
                />
                <label htmlFor={`symbols-${id}`}>Include Symbols</label>
              </div>
            </div>
            <div className="flex justify-between bg-dark-800 p-6 uppercase">
              <span className=" text-dark-400 text-lg">strength</span>
              <div className="space-x-2">
                <PasswordStrength passwordStrengthVal={passwordStrengthVal} />
              </div>
            </div>
            <button
              onClick={generatePasswordHandler}
              className="w-full bg-green-200 flex items-center justify-center p-6 gap-4 hover:gap-6 transition-all duration-150 hover:cursor-pointer hover:bg-transparent group border-green-200 border-2"
            >
              <span className="text-dark-600 uppercase body-bold group-hover:text-green-200">
                generate
              </span>
              <span className="text-dark-600 group-hover:text-green-200">
                <FiArrowRight />
              </span>
            </button>
          </div>
        </article>
      </section>
    </main>
  );
};

function PasswordStrength({
  passwordStrengthVal,
}: {
  passwordStrengthVal: number;
}) {
  if (passwordStrengthVal <= 3) {
    return (
      <>
        <span className="text-xl">too weak!</span>
        <span className="h-[10px] p-1.5 bg-red-500"></span>
        <span className="h-[10px] p-1 border-white border bg-transparent"></span>
        <span className="h-[10px] p-1 border-white border bg-transparent"></span>
        <span className="h-[10px] p-1 border-white border  bg-transparent"></span>
      </>
    );
  } else if (passwordStrengthVal > 3 && passwordStrengthVal < 7) {
    return (
      <>
        <span className="text-xl">weak</span>
        <span className="h-[10px] p-1.5 bg-orange-300"></span>
        <span className="h-[10px] p-1.5 bg-orange-300"></span>
        <span className="h-[10px] p-1 border-white border bg-transparent"></span>
        <span className="h-[10px] p-1 border-white border  bg-transparent"></span>
      </>
    );
  } else if (passwordStrengthVal >= 7 && passwordStrengthVal < 12) {
    return (
      <>
        <span className="text-xl">meduim</span>
        <span className="h-[10px] p-1.5 bg-yellow-300"></span>
        <span className="h-[10px] p-1.5 bg-yellow-300"></span>
        <span className="h-[10px] p-1.5 bg-yellow-300"></span>
        <span className="h-[10px] p-1 border-white border  bg-transparent"></span>
      </>
    );
  } else {
    return (
      <>
        <span className="text-xl">strong</span>
        <span className="h-[10px] p-1.5 bg-green-200"></span>
        <span className="h-[10px] p-1.5 bg-green-200"></span>
        <span className="h-[10px] p-1.5 bg-green-200"></span>
        <span className="h-[10px] p-1.5 bg-green-200"></span>
      </>
    );
  }
}

export default PasswordGenerator;
