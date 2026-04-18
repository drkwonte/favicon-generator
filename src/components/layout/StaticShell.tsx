/**
 * Shared page frame: fixed header + scrollable body + footer.
 * Keeps marketing, legal, and tool routes visually consistent.
 */
import type { ReactNode } from 'react'

import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

type StaticShellProps = {
  children: ReactNode
  headerTrailing?: ReactNode
}

export function StaticShell({ children, headerTrailing }: StaticShellProps) {
  return (
    <div className="flex min-h-full flex-col bg-surface">
      <SiteHeader trailing={headerTrailing} />
      <div className="flex flex-1 flex-col pt-24">{children}</div>
      <SiteFooter />
    </div>
  )
}
