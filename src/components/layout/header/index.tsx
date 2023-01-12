import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Box from '@mui/material/Box'
import { Grid } from '@mui/material'
import ButtonComponent from 'src/components/shared/atoms/button'
import Drawer from './drawer'
import { HamburgerMenuIcon, SearchIcon } from 'src/assets/svgs'
import DTLLogo from 'src/assets/svgs/DTLLogo.svg'
import useStyles from './styles'

const Header: React.FC = () => {
  const [drawerState, setDrawerState] = React.useState(false)
  const { classes } = useStyles()

  const drawerHandler: () => void = (): void => {
    setDrawerState(!drawerState)
  }

  return (
    <Box component="header" className={classes.root}>
      <Grid container className={classes.innerContainer}>
        <Grid
          container
          item
          md={4}
          spacing={2}
          className={classes.menuContainer}
        >
          <Grid item sm={12} md="auto" onClick={drawerHandler}>
            <HamburgerMenuIcon />
          </Grid>
          <Grid item md={0} lg={8} className={classes.linksContainer}>
            <Link href="/" className={classes.links}>
              <span>I NEED HELP</span>
            </Link>
            <Link href="/" className={classes.links}>
              <span>I WANT TO HELP</span>
            </Link>
          </Grid>
        </Grid>
        <Grid item lg={4} className={classes.logoContainer}>
          <Image src={DTLLogo} alt="Logo" />
        </Grid>
        <Grid
          container
          item
          lg={4}
          spacing={1}
          className={classes.buttonsContainer}
        >
          <Grid item md={12} lg={2} className={classes.searchBtnContainer}>
            <SearchIcon />
          </Grid>
          <Grid
            container
            item
            md={0}
            lg={10}
            spacing={1}
            className={classes.LinkButtonsContainer}
          >
            <Grid item sm="auto">
              <ButtonComponent
                size="medium"
                type="outlined"
                text="MEET NEW FRIENDS"
              />
            </Grid>
            <Grid item sm={6}>
              <ButtonComponent
                size="medium"
                type="outlined"
                text="DONATE NOW"
                className={classes.donateBtn}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {drawerState ? <Drawer drawerHandler={drawerHandler} /> : null}
    </Box>
  )
}

export default Header
