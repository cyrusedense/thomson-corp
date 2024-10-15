import Link from "next/link";

function Button({ color, text, clickFunction }) {
  return (
    <button
      onClick={clickFunction}
      className={`rounded-full ${color === "yellow" ? "bg-tsyellow" : "bg-white"} px-3 py-2`}
    >
      {text}
    </button>
  );
}

export default Button;
