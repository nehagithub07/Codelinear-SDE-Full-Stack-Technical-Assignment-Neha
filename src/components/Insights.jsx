import { ArrowRight } from 'lucide-react'
import PatternTile from './PatternTile'

const articles = [
  {
    title: 'How to transition from a traditional to a digital bank',
    date: '17/08/24',
    featured: true,
  },
  {
    title: 'How to transition from a traditional to a digital bank',
    date: '17/08/24',
  },
  {
    title: 'How to transition from a traditional to a digital bank',
    date: '17/08/24',
  },
]

function ArticleCard({ article }) {
  return (
    <article
      className={`rounded-[18px] bg-[#04191f] p-6 transition hover:-translate-y-0.5 hover:bg-[#062129] ${
        article.featured ? 'grid gap-8 lg:grid-cols-[0.46fr_0.54fr]' : 'min-h-[316px]'
      }`}
    >
      {article.featured ? (
        <PatternTile className="min-h-[266px]" />
      ) : null}
      <div className="flex min-h-full flex-col">
        <p className="font-mono text-xs uppercase text-n7-cyan/80">
          Getting Started
        </p>
        <h3 className="mt-4 text-balanced text-[28px] font-normal leading-[1.15] text-mist-50">
          {article.title}
        </h3>
        <p className="mt-4 text-sm text-n7-cyan/65">
          David Grohl <span className="ml-4">{article.date}</span>
        </p>
        <a
          className="inline-flex min-h-9 w-full items-center justify-center rounded-lg border border-mist-100/45 font-mono text-xs uppercase text-mist-100/60 transition hover:bg-white hover:text-black"
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
    <section className="bg-ink-950 px-6 py-20 sm:px-10 lg:py-24" id="resources">
      <div className="mx-auto grid max-w-[1280px] gap-16 lg:grid-cols-[0.43fr_0.57fr]">
        <div>
          <h2 className="text-balanced max-w-[510px] text-[38px] font-normal leading-[1.16] text-mist-50">
            Get yourself up-to-speed on all the things happening in fintech
          </h2>
          <a
            className="mt-14 inline-flex min-h-12 min-w-[190px] items-center justify-center rounded-lg border border-mist-100/80 px-7 font-mono text-sm uppercase text-mist-50 transition hover:bg-white hover:text-black"
            href="#case-studies"
          >
            Insights
          </a>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <ArticleCard article={articles[0]} />
          </div>
          {articles.slice(1).map((article, index) => (
            <ArticleCard article={article} key={`${article.title}-${index}`} />
          ))}
          <a
            className="inline-flex items-center gap-2 justify-self-end border-b border-n7-cyan pb-1 font-mono text-sm uppercase text-n7-cyan sm:col-span-2"
            href="#case-studies"
          >
            Read All Insights <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Insights
