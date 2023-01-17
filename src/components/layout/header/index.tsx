import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Box from '@mui/material/Box'
import { Grid } from '@mui/material'
import SubMenu from './subMenu'
import ButtonComponent from 'src/components/shared/atoms/button'
import Drawer from './drawer'
import { HamburgerMenuIcon, SearchIcon } from 'src/assets/svgs'
import DTLLogo from 'src/assets/svgs/DTLLogo.svg'
import useStyles from './styles'
import iNeedHelpSubMenuData from './data'

const Header: React.FC = () => {
  const [drawerState, setDrawerState] = React.useState(false)
  const [iNeedHelpOpen, setINeedHelpOpen] = React.useState(false)
  const { classes } = useStyles()

  const drawerHandler: () => void = (): void => {
    setDrawerState(!drawerState)
  }

  const iNeedHelpHandler: () => void = (): void => {
    setINeedHelpOpen(!iNeedHelpOpen)
  }

  return (
    <Box component="header" className={classes.root}>
      <Grid container className={classes.innerContainer}>
        <Grid
          container
          item
          xs={4}
          md={4}
          spacing={1}
          className={classes.menuContainer}
        >
          <Grid item lg="auto" onClick={drawerHandler}>
            <HamburgerMenuIcon />
          </Grid>
          <Grid item sm={0} lg="auto" className={classes.linksContainer}>
            <Link href="/" className={classes.links} onClick={iNeedHelpHandler}>
              <span>I NEED HELP</span>
            </Link>
            <Link href="/" className={classes.links}>
              <span>I WANT TO HELP</span>
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={4} lg={4} className={classes.logoContainer}>
          <Image src={DTLLogo} alt="Logo" />
        </Grid>
        <Grid
          container
          item
          xs={4}
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
            xl={10}
            spacing={4}
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
      {iNeedHelpOpen ? (
        <SubMenu
          heading="I NEED HELP"
          subHeading="From bullying and body image to sexting and anxiety, we’ve pretty much got your back. Our experts have written hundreds of support guides, available to browse now."
          menuDataList={iNeedHelpSubMenuData}
        />
      ) : null}
    </Box>
  )
}

export default Header
