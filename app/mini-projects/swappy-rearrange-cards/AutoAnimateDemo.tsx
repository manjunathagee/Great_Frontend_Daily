"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type Todo = {
  id: number;
  value: string;
};
const AutoAnimateDemo = () => {
  const [parent] = useAutoAnimate();
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, value: "Nuxt.js" },
    { id: 2, value: "Next.js" },
    { id: 3, value: "Angular" },
    { id: 4, value: "React.js" },
  ]);

  const randomize = () => {
    const randomizedList = new Set();
    while (randomizedList.size < todos.length) {
      let randomIndex = Math.floor(Math.random() * todos.length);
      if (!randomizedList.has(todos[randomIndex]))
        randomizedList.add(todos[randomIndex]);
    }
    console.log(JSON.stringify(randomizedList));
    // @ts-ignore
    setTodos([...randomizedList]);
  };

  return (
    <section>
      <h2 className="text-center">Auto Animate Demo 🤩</h2>
      <ul className="space-y-2 mt-4 text-slate-100" ref={parent}>
        {todos.map((todo) => (
          <li className="bg-blue-300 rounded-lg p-2 w-full" key={todo.id}>
            {todo.value}
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        <Button
          className="my-2"
          onClick={() =>
            setTodos((curr) => [
              ...curr,
              { id: todos.length + 1, value: "SvelteKit" },
            ])
          }
        >
          Add Todo
        </Button>
        <Button className="my-2" onClick={randomize}>
          Randomize
        </Button>
      </div>
    </section>
  );
};

export default AutoAnimateDemo;
