import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Box from '@mui/material/Box'
import { Grid, IconButton } from '@mui/material'
import SubMenu from './subMenu'
import ButtonComponent from 'src/components/shared/atoms/button'
import Drawer from './drawer'
import { ItsAnEmergencyCard, DonateNowCard } from './subMenu/endCard'
import SelectLanguage from './intlMenu'
import { HamburgerMenuIcon, SearchIcon } from 'src/assets/svgs'
import DTLLogo from 'src/assets/svgs/DTLLogo.svg'
import { iNeedHelpSubMenuData, iWantToHelpSubMenuData } from './data'
import clsx from 'clsx'
import useStyles from './styles'

const Header: React.FC = () => {
  const [drawerState, setDrawerState] = React.useState(false)
  const [iNeedHelpOpen, setINeedHelpOpen] = React.useState(false)
  const [iWantToHelpOpen, setIWantToHelpOpen] = React.useState(false)
  const { classes } = useStyles()

  const drawerHandler: () => void = (): void => {
    setIWantToHelpOpen(false)
    setINeedHelpOpen(false)
    setDrawerState(!drawerState)
  }

  const iNeedHelpHandler: () => void = (): void => {
    setIWantToHelpOpen(false)
    setINeedHelpOpen(!iNeedHelpOpen)
  }

  const iWantToHelpHandler: () => void = (): void => {
    setINeedHelpOpen(false)
    setIWantToHelpOpen(!iWantToHelpOpen)
  }

  return (
    <Box component="header" className={classes.root}>
      <Grid container className={classes.innerContainer}>
        <Grid container item xs={5} md={5} className={classes.menuContainer}>
          <Grid
            item
            md={1}
            onClick={drawerHandler}
            className={classes.hamburgerMenuIcon}
          >
            <HamburgerMenuIcon />
          </Grid>
          <Grid item md={11} className={classes.linksContainer}>
            <Link href="/" className={classes.links} onClick={iNeedHelpHandler}>
              <span className={clsx(iNeedHelpOpen && classes.addBlueBgColor)}>
                I NEED HELP
              </span>
            </Link>
            <Link
              href="/"
              className={classes.links}
              onClick={iWantToHelpHandler}
            >
              <span className={clsx(iWantToHelpOpen && classes.addPinkBgColor)}>
                I WANT TO HELP
              </span>
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={2} md={2} className={classes.logoContainer}>
          <Image src={DTLLogo} alt="Logo" />
        </Grid>
        <Grid container item xs={5} md={5} className={classes.buttonsContainer}>
          <IconButton className={classes.searchBtn}>
            <SearchIcon />
          </IconButton>
          <Box className={classes.intlBox}>
            <SelectLanguage />
          </Box>
          <Box className={classes.buttonBox}>
            <ButtonComponent
              size="medium"
              type="outlined"
              text="MEET NEW FRIENDS"
            />
            <ButtonComponent
              size="medium"
              type="outlined"
              text="DONATE NOW"
              className={classes.donateBtn}
            />
          </Box>
        </Grid>
      </Grid>
      {drawerState ? <Drawer drawerHandler={drawerHandler} /> : null}
      {iNeedHelpOpen ? (
        <SubMenu
          heading="I NEED HELP"
          subHeading="From bullying and body image to sexting and anxiety, we’ve pretty much got your back. Our experts have written hundreds of support guides, available to browse now."
          menuDataList={iNeedHelpSubMenuData}
          className={classes.addBlueBgColor}
          button={
            <ButtonComponent
              type={'contained'}
              text={'GET HELP NOW'}
              className={classes.getHelpBtn}
            />
          }
          endCard={<ItsAnEmergencyCard />}
        />
      ) : null}
      {iWantToHelpOpen ? (
        <SubMenu
          heading="I WANT TO HELP"
          subHeading="From bullying and body image to sexting and anxiety, we’ve pretty much got your back. Our experts have written hundreds of support guides, available to browse now."
          menuDataList={iWantToHelpSubMenuData}
          className={classes.addPinkBgColor}
          button={
            <ButtonComponent
              type={'contained'}
              text={'WAYS TO GET INVOLVE'}
              className={classes.getHelpBtn}
            />
          }
          endCard={<DonateNowCard />}
        />
      ) : null}
    </Box>
  )
}

export default Header
