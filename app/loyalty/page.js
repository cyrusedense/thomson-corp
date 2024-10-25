import Image from "next/image";

function Loyalty() {
  return (
    <div className="py-10 md:py-14 xl:py-20">
      <div>Loyalty</div>

      <div className="m-auto flex max-w-screen-lg flex-wrap justify-center gap-10">
        <Image width={300} height={700} src={"/videos/3-2.gif"} />
        <Image width={300} height={700} src={"/videos/1-3.gif"} />
        <Image width={300} height={700} src={"/videos/2-1.gif"} />
      </div>
    </div>
  );
}

export default Loyalty;
