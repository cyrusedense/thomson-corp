import Image from "next/image";

function Wave() {
  return (
    <>
      <div className="absolute z-30 w-full -translate-y-[65%]">
        <Image width={1000} height={300} className="w-full bg-center" alt="wave" src={"/images/hero-wave-1.png"} />
      </div>
    </>
  );
}

export default Wave;
