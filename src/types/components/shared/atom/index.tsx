import type { ReactNode } from 'react'

export interface ButtonComponentProps {
  type: 'contained' | 'outlined' | 'text' | undefined
  text: JSX.Element | string
  className?: string
  isSubmitBtn?: boolean
  disabled?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (e?: any) => void
  size?: 'large' | 'medium' | 'small' | undefined
  startIcon?: ReactNode
  loading?: boolean
  loadingIconClass?: string
  progressLoaderSize?: number
  gutter?: boolean
  gutterLeft?: boolean
  gutterRight?: boolean
  gutterTop?: boolean
  gutterBottom?: boolean
}

// TODO: redefine href type
interface Href {
  pathName: string
  query: string | { id: string } | { slug: string }
}
export interface LinkProps {
  href: string | Href
  children: string | React.ReactNode
  passHref?: boolean
  prefetch?: boolean
  replace?: boolean
  scroll?: boolean
  className?: string
}
