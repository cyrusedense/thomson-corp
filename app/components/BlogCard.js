import Image from "next/image";
import Link from "next/link";

function BlogCard({ title, author, date, color, featuredImage, extUrl }) {
  return (
    <Link href={extUrl} passHref target="_blank" rel="noopener noreferrer">
      <div className="blog-card group flex w-full flex-col overflow-hidden rounded-bl-[56px] rounded-br-[0px] rounded-tl-[56px] rounded-tr-[56px]">
        {/* Image with zoom-in effect on hover */}
        <div className="blog-image-wrapper relative h-[200px] w-full overflow-hidden">
          <Image
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            alt="blog-img"
            src={featuredImage}
          />
        </div>

        {/* Content section */}
        <div
          className={`flex flex-col items-start sm:gap-6 ${
            color === "green" ? "bg-tsdarkgreen" : "bg-tsyellow"
          } p-5`}
        >
          <h1 className="line-clamp-3 min-h-[75px]">{title}</h1>

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

          {/* "Read More" text with color change on hover */}
          <div>
            <span className="transition-colors duration-300 group-hover:text-yellow-500">
              Read More
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
