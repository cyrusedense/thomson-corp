import Image from "next/image";

function TextBox({ title, subtitle, para, color }) {
  return (
    <div
      className={`${color === "yellow" ? "bg-tsyellow" : "bg-tsgreen"} m-auto max-w-[500px] rounded-bl-[56px] rounded-br-[0px] rounded-tl-[56px] rounded-tr-[56px] p-10 text-white`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-3xl">{title}</h2>
        <Image
          className="h-[80px] object-cover"
          alt="thomson-cross"
          width={56}
          height={80}
          src={"/images/CI-icon.png"}
        />
      </div>

      <h3>{subtitle}</h3>
      <h4 className="text-sm">{para}</h4>
    </div>
  );
}

export default TextBox;
