import React from "react";

export default function MyComponent({ username, age, currentClass, male }) {
    
  return (
    <div className="bg-white rounded-lg w-60 p-10 text-red-500 font-bold">
      {username} is {age} years old and he is in class {currentClass}
    </div>
  );
}
