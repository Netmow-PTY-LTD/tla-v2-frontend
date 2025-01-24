"use client";
import { decrement, increment } from "@/lib/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import React from "react";

const TestCounter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <h2 className="text-4xl text-red-400 mb-4">Just Tesing redux</h2>
      <div className="bg-white shadow-lg rounded-lg p-8 w-80">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6">
          Counter: {count}
        </h1>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => dispatch(increment())}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestCounter;
