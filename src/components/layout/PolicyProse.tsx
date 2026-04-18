/**
 * Readable column for policy / informational pages (replaces @tailwindcss/typography).
 * Spacing and hierarchy are tuned in `index.css` under `.policy-prose`.
 */
import type { ReactNode } from 'react'

type PolicyProseProps = {
  children: ReactNode
}

export function PolicyProse({ children }: PolicyProseProps) {
  return (
    <article className="policy-prose mx-auto max-w-[40rem] px-6 py-14 pb-24 font-body sm:px-8 md:py-16 md:pb-28">
      {children}
    </article>
  )
}
