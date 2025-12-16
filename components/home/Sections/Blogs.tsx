import styles from "./Blogs.module.css";

const blogs = [
  {
    id: 1,
    image: "/home/blog-1.jpg",
    category: "Selected Category",
    title: "PAL Height’s Zaika: Rich Legacy & Evolution",
    excerpt:
      "Everyone in and around the city of Bhubaneswar knows about the restaurant Zaika located in Pal Heights hotel. However, the early history and evolution of the restaurant is something that not many are aware about...",
  },
  {
    id: 2,
    image: "/home/blog-2.jpg",
    category: "Selected Category",
    title: "PAL Height’s Zaika: Rich Legacy & Evolution",
    excerpt:
      "Everyone in and around the city of Bhubaneswar knows about the restaurant Zaika located in Pal Heights hotel. However, the early history and evolution of the restaurant is something that not many are aware about...",
  },
  {
    id: 3,
    image: "/home/blog-3.jpg",
    category: "Selected Category",
    title: "PAL Height’s Zaika: Rich Legacy & Evolution",
    excerpt:
      "Everyone in and around the city of Bhubaneswar knows about the restaurant Zaika located in Pal Heights hotel. However, the early history and evolution of the restaurant is something that not many are aware about...",
  },
];

export default function Blogs() {
  return (
    <section className={styles.section} data-cursor-theme="dark">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.kicker}>THE COMFORT CORNER</span>

          <div className={styles.titleRow}>
            <span className={styles.line} />
            <h2 className={styles.title}>
              Blogs for <br className={styles.br} />{" "}
              <span>Curious Travelers</span>
            </h2>
            <span className={styles.line} />
          </div>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {blogs.map((blog) => (
            <article key={blog.id} className={styles.card}>
              <div
                className={styles.image}
                style={{ backgroundImage: `url(${blog.image})` }}
              />

              <div className={styles.content}>
                <span className={styles.category}>{blog.category}</span>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>

                <a className={styles.readMore} data-cursor="hover">
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.ctaWrap}>
          <a data-cursor="hover" className={styles.cta}>
            Explore News & Media
          </a>
        </div>
      </div>
    </section>
  );
}
