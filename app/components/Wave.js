import Image from "next/image";

function Wave() {
  return (
    <>
      <div className="absolute z-30 w-full -translate-y-[65%] scale-x-150">
        <Image width={1000} height={300} className="w-full bg-center" alt="wave" src={"/images/wave high contrast-01.png"} />
      </div>
    </>
  );
}

export default Wave;
