import React from "react";

const Button = (props: { text: string }) => {
  return <button className="text-red-500">{props.text}</button>;
};

export default Button;
