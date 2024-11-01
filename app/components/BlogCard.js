import Image from "next/image";
import Link from "next/link";

function BlogCard({ title, author, date, color, featuredImage }) {
  return (
    <div className="blog-card flex w-full flex-col overflow-hidden rounded-bl-[56px] rounded-br-[0px] rounded-tl-[56px] rounded-tr-[56px]">
      <div className="blog-image-wrapper relative h-[200px] w-full">
        <Image
          fill
          className="object-cover"
          alt="blog-img"
          src={featuredImage}
        />
      </div>

      <div
        className={`flex basis-[50%] flex-col items-start gap-6 ${color === "green" ? "bg-tsdarkgreen" : "bg-tsyellow"} p-5`}
      >
        <h1>{title}</h1>

        <div className="flex w-full flex-row justify-between">
          <div>
            <h2>By {author}</h2>

            <h3>{date}</h3>
          </div>

          <Image
            alt="thomson-cross"
            width={56}
            height={97}
            src={"/images/CI-icon.png"}
          />
        </div>

        <div>
          <Link href="/">Read More</Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
