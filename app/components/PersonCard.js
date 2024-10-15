import Image from "next/image";

function PersonCard({ name, title, image }) {
  return (
    <div className="relative m-auto aspect-square w-full max-w-[250px] overflow-hidden rounded-bl-[56px] rounded-br-[0px] rounded-tl-[56px] rounded-tr-[56px] border-2 border-black">
      <Image alt={`${title}-photo`} className="object-cover" fill src={image} />
      <div className="absolute bottom-0 z-10 w-full rounded-tr-[56px] bg-tsdarkgreen py-2 text-center text-white">
        <h4>{name}</h4>
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default PersonCard;
