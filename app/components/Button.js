import Link from "next/link";

function Button({ color, text, link }) {
  return (
    <button
      className={`rounded-full transition-transform hover:scale-105 ${color === "yellow" ? "bg-tsyellow" : "bg-white"} px-3 py-2 text-black`}
    >
      {" "}
      <Link href={`${link || "/"}`}>{text}</Link>
    </button>
  );
}

export default Button;
