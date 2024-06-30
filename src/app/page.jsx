"use client";
import React from "react";

import { useChat } from "ai/react";

function Page() {
  const { handleInputChange, handleSubmit, input, isLoading, messages } =
    useChat();

  console.log(messages);

  return (
    <section className="flex justify-center items-end h-svh p-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between h-full max-w-xl w-full"
      >
        <div>
          <h1 className="text-4xl font-semibold text-white">AI chat bot</h1>
        </div>
        <div className="text-white max-h-full h-full my-5 overflow-y-auto">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col gap-3 text-lg mb-2 p-5 rounded-2xl ${
                m.role === "assistant"
                  ? "self-start text-left mr-10 "
                  : "self-end text-right ml-10 bg-gray-600"
              }`}
            >
              <span
                className={`text-xs font-light ${
                  m.role === "assistant" ? "text-left" : "text-right"
                }`}
              >
                {m.role}
              </span>{" "}
              {m.content}
            </div>
          ))}
        </div>
        <div className="flex justify-between my-4">
          <label className="text-white block font-bold my-2">
            Respondere tus preguntas...
          </label>
          <button
            className="bg-green-500 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 disabled:opacity-50"
            disabled={isLoading || !input}
          >
            Send
          </button>
        </div>
        <input
          value={input}
          onChange={handleInputChange}
          className="text-black bg-slate-300 px-3 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Capital de francia..."
          autoFocus
        />
      </form>
    </section>
  );
}

export default Page;
