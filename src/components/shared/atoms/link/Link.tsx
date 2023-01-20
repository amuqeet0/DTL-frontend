import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { makeStyles } from 'tss-react/mui'
import { LinkProps } from 'src/types'

const LinkComp: React.FC<LinkProps> = ({
  href,
  passHref = false,
  replace = false,
  scroll = true,
  children,
  className,
}: LinkProps) => {
  const { classes } = useStyles()
  return (
    <Link
      href={href}
      passHref={passHref}
      replace={replace}
      scroll={scroll}
      className={clsx(classes.root, className)}
    >
      {children}
    </Link>
  )
}

const useStyles = makeStyles()((theme) => ({
  root: {
    textDecoration: 'none',
    width: 'auto',
    color: theme.custom.lightFont,
    textTransform: 'uppercase',
  },
}))

export default LinkComp
