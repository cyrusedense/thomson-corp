import Image from 'next/image'
import Link from 'next/link'


function BlogCard({ title, author, date, featuredImage }) {
    return (
        <div className='blog-card overflow-hidden w-full flex flex-col rounded-bl-[56px] rounded-br-[0px] rounded-tr-[56px] rounded-tl-[56px]'>

            <div className='blog-image-wrapper  w-full h-[200px] relative'>
                <Image fill className="object-cover " alt='blog-img' src={featuredImage} />
            </div>



            <div className='basis-[50%] flex flex-col gap-6 items-start bg-tsdarkgreen p-5'>

                <h1>{title}</h1>

                <div className='flex flex-row w-full justify-between'>
                    <div>
                        <h2>By {author}</h2>

                        <h3>{date}</h3>
                    </div>

                    <Image alt='thomson-cross' width={56} height={97} src={'/images/CI-icon.png'} />



                </div>


                <div>
                    <Link href="/">Read More</Link>
                </div>



            </div>




        </div>
    )
}

export default BlogCard