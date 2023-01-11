import * as React from 'react'
import Box from '@mui/material/Box'
import Header from 'src/components/layout/header'
import useStyles from 'src/styles/pages/homeStyle'

export default function Home() {
  const { classes } = useStyles()
  return (
    <Box component="div">
      <Header />
      <div className={classes.homePageContainer}>
        <p>Home Page</p>
      </div>
    </Box>
  )
}
