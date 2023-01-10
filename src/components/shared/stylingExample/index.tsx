import * as React from 'react'
import Box from '@mui/material/Box'
import useStyles from './styles'

export default function StyledComp() {
  const { classes } = useStyles()
  return (
    <Box component="form" className={classes.root}>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, porro.
      </p>
    </Box>
  )
}
