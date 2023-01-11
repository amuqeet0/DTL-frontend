import * as React from 'react'
import Link from 'next/link'
import { Grid, IconButton } from '@mui/material'
import { CrossIcon } from 'src/assets/svgs'
import useStyles from './styles'

interface DrawerType {
  drawerHandler: () => void
}

const Drawer: React.FC<DrawerType> = ({ drawerHandler }: DrawerType) => {
  const { classes } = useStyles()
  return (
    <Grid container className={classes.DrawerContainer}>
      <Grid className={classes.DrawerTopBar}>
        <Grid>DTL LOGO</Grid>
        <Grid>
          <IconButton onClick={drawerHandler}>
            <CrossIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container>
        <Grid sm={12}>
          <Link href="/">ABOUT US</Link>
        </Grid>
        <Grid sm={12}>
          <Link href="/">MEET THE TEAM</Link>
        </Grid>
        <Grid sm={12}>
          <Link href="/">REPORT CYBER BULLYING</Link>
        </Grid>
        <Grid sm={12}>
          <Link href="/">CAREERS</Link>
        </Grid>
        <Grid sm={12}>
          <Link href="/">CAMPAIGNS</Link>
        </Grid>
        <Grid sm={12}>
          <Link href="/">PARTNER WITH US</Link>
        </Grid>
        <Grid sm={12}>
          <Link href="/">CONTACT US</Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Drawer
