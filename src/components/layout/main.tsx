import * as React from 'react'
import Box from '@mui/material/Box'

type Props = {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return <Box component="div">{children}</Box>
}

export default Layout
