import React, { useId } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaRegCopy } from "react-icons/fa";

const PasswordGenerator = () => {
  const id = useId();
  return (
    <main className="font-jetbrainsMono bg-dark-800 h-dvh p-40">
      <section className="text-white max-w-md lg:max-w-lg space-y-6">
        <div className="text-center text-dark-400 h1-bold-m">
          Password Generator
        </div>
        <article className="space-y-4">
          <div className="bg-dark-600 w-full flex justify-between px-4 items-center h-[65px]">
            <span className="text-2xl">PTX1FDDAFX</span>
            <span className="text-2xl text-green-200 hover:cursor-pointer hover:text-white">
              <FaRegCopy />
            </span>
          </div>
          <div className="bg-dark-600 w-full flex flex-col gap-6 p-4">
            <div className="flex justify-between items-center">
              <span className="text-lg">Character Length</span>
              <span className="text-green-200 text-2xl">10</span>
            </div>
            <div className="space-y-6">
              <div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  name="character_length"
                  className="w-full range-input accent-green-200 hover:accent-black"
                />
              </div>
              <div className="flex gap-4 items-center">
                <input
                  type="checkbox"
                  name="include_uppercase"
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
                  id={`numbers-${id}`}
                  className="accent-green-200 h-[20px] w-[20px] hover:cursor-pointer"
                />
                <label htmlFor={`numbers-${id}`}>Include Numbers</label>
              </div>
              <div className="flex gap-4 items-center">
                <input
                  type="checkbox"
                  name="include_symbols"
                  id={`symbols-${id}`}
                  className="accent-green-200 h-[20px] w-[20px] hover:cursor-pointer"
                />
                <label htmlFor={`symbols-${id}`}>Include Symbols</label>
              </div>
            </div>
            <div className="flex justify-between bg-dark-800 p-6 uppercase">
              <span className=" text-dark-400 text-lg">strength</span>
              <div className="space-x-2">
                <span className="text-xl">medium</span>
                <span className="h-[10px] p-1 bg-yellow-400"></span>
                <span className="h-[10px] p-1 bg-yellow-400"></span>
                <span className="h-[10px] p-1 bg-yellow-400"></span>
                <span className="h-[10px] border-white border p-1 bg-transparent"></span>
              </div>
            </div>
            <button className="w-full bg-green-200 flex items-center justify-center p-6 gap-4 hover:gap-6 transition-all duration-150 hover:cursor-pointer hover:bg-transparent group border-green-200 border-2">
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

export default PasswordGenerator;
