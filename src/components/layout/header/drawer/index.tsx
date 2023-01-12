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
      <Grid container className={classes.LinksContainer}>
        {/* <Grid md="auto" className={classes.pageLink}> */}
        {/* </Grid> */}
        <Link href="/" className={classes.pageLink}>
          ABOUT US
        </Link>
        <Link href="/" className={classes.pageLink}>
          MEET THE TEAM
        </Link>
        <Link href="/" className={classes.pageLink}>
          REPORT CYBER BULLYING
        </Link>
        <Link href="/" className={classes.pageLink}>
          CAREERS
        </Link>
        <Link href="/" className={classes.pageLink}>
          CAMPAIGNS
        </Link>
        <Link href="/" className={classes.pageLink}>
          PARTNER WITH US
        </Link>
        <Link href="/" className={classes.pageLink}>
          CONTACT US
        </Link>
      </Grid>
    </Grid>
  )
}

export default Drawer
