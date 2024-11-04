import Link from "next/link";

function Button({ color, text, intLink, extLink }) {
  const linkComponent = intLink ? (
    <Link href={intLink}>{text}</Link>
  ) : extLink ? (
    <a href={extLink} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  ) : (
    <Link href="/">{text}</Link>
  );

  return (
    <button
      className={`rounded-full transition-transform hover:scale-105 ${
        color === "yellow" ? "bg-tsyellow" : "bg-white"
      } px-3 py-2 text-black`}
    >
      {linkComponent}
    </button>
  );
}

export default Button;
