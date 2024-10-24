function Blog() {
  return (
    <div>
      <section className="bg-blog-hero relative min-h-[50vh] bg-cover bg-right md:min-h-[90vh]">
        <div className="hero-text-wrapper absolute top-[50%] translate-y-[-50%] p-5">
          <h1 className="mb-4 text-4xl text-white md:text-6xl">Blogs</h1>
          <p className="text-xl text-white">Where Health Matters</p>
        </div>
      </section>
    </div>
  );
}

export default Blog;
