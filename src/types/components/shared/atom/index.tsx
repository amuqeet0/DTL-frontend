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
}
