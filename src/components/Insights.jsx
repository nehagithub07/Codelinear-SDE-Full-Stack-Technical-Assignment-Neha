import PatternTile from './PatternTile'

const articles = [
  {
    title: 'How to transition from a traditional to a digital bank',
    date: 'Dec 15th, 2023',
    featured: true,
  },
  {
    title: 'How to transition from a traditional to a digital bank',
    date: 'Dec 15th, 2023',
  },
  {
    title: 'How to transition from a traditional to a digital bank',
    date: 'Dec 15th, 2023',
  },
]

function ArticleCard({ article }) {
  return (
    <article
      className={`rounded bg-white/[0.035] p-3 transition hover:-translate-y-0.5 hover:bg-white/[0.055] ${
        article.featured ? 'grid gap-4 sm:grid-cols-[160px_1fr]' : ''
      }`}
    >
      <PatternTile className={article.featured ? 'h-36' : 'mb-4 h-24'} />
      <div>
        <p className="font-mono text-[10px] uppercase text-n7-cyan">N7 In The News</p>
        <h3 className="mt-2 text-lg font-normal leading-tight text-mist-50">
          {article.title}
        </h3>
        <p className="mt-2 text-xs text-mist-100/55">{article.date}</p>
        <a
          className="mt-5 inline-flex min-h-8 w-full items-center justify-center rounded border border-mist-100/25 font-mono text-[10px] uppercase text-mist-100/75 transition hover:border-n7-cyan hover:text-n7-cyan"
          href="#read-more"
        >
          Read More
        </a>
      </div>
    </article>
  )
}

function Insights() {
  return (
    <section className="bg-ink-950 px-6 py-16 sm:px-10 sm:py-24" id="resources">
      <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="max-w-[400px] text-2xl font-normal leading-tight text-mist-50 sm:text-4xl">
            Get yourself up-to-speed on all the things happening in fintech
          </h2>
          <a
            className="mt-8 inline-flex min-h-10 min-w-32 items-center justify-center rounded border border-mist-100/60 px-5 font-mono text-[10px] uppercase text-mist-50 transition hover:bg-white hover:text-ink-950"
            href="#case-studies"
          >
            Explore Insights
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <ArticleCard article={articles[0]} />
          </div>
          {articles.slice(1).map((article, index) => (
            <ArticleCard article={article} key={`${article.title}-${index}`} />
          ))}
          <a className="justify-self-end font-mono text-[10px] uppercase text-n7-cyan sm:col-span-2" href="#case-studies">
            More N7 Insights -&gt;
          </a>
        </div>
      </div>
    </section>
  )
}

export default Insights
