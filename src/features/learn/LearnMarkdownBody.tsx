import type { Components } from 'react-markdown'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import remarkGfm from 'remark-gfm'

const learnMarkdownComponents: Components = {
  a({ href, children }) {
    if (href?.startsWith('/')) {
      return (
        <Link to={href} className="font-semibold text-primary underline-offset-[3px] hover:underline">
          {children}
        </Link>
      )
    }
    return (
      <a
        href={href}
        className="font-semibold text-primary underline-offset-[3px] hover:underline"
        target="_blank"
        rel="noreferrer noopener"
      >
        {children}
      </a>
    )
  },
  table({ children }) {
    return (
      <div className="my-6 overflow-x-auto rounded-lg border border-[rgb(var(--color-outline-variant)/0.45)]">
        <table className="learn-md-table w-full min-w-[20rem] border-collapse text-sm">{children}</table>
      </div>
    )
  },
}

type LearnMarkdownBodyProps = {
  markdown: string
}

export function LearnMarkdownBody({ markdown }: LearnMarkdownBodyProps) {
  return (
    <div className="learn-article-md">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={learnMarkdownComponents}>
        {markdown}
      </ReactMarkdown>
    </div>
  )
}
