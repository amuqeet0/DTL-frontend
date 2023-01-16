import * as React from 'react'
import { Link } from 'src/components/shared/atoms'
import Image from 'next/image'
import clsx from 'clsx'
import {
  Grid,
  IconButton,
  Collapse,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import { CrossIcon } from 'src/assets/svgs'
import { Nunito } from '@next/font/google'
import { ArrowIcon } from 'src/assets/svgs'
import useStyles from './styles'
import DTLLogoLight from 'src/assets/svgs/DTLLogoLight.svg'

interface DrawerType {
  drawerHandler: () => void
}

const nunito = Nunito({ subsets: ['latin'] })

const Drawer: React.FC<DrawerType> = ({ drawerHandler }: DrawerType) => {
  const [openINeedHelp, setOpenINeedHelp] = React.useState(false)
  const [openIWantToHelp, setOpenIWantToHelp] = React.useState(false)
  const { classes } = useStyles()

  const handleClickINeedHelp = () => {
    setOpenINeedHelp(!openINeedHelp)
  }

  const handleClickIWantToHelp = () => {
    setOpenIWantToHelp(!openIWantToHelp)
  }
  return (
    <Grid container className={clsx(nunito.className, classes.DrawerContainer)}>
      <Grid item sm={12} className={classes.DrawerTopBar}>
        <Grid>
          <Image src={DTLLogoLight} alt="DTL Logo" />
        </Grid>
        <Grid>
          <IconButton onClick={drawerHandler}>
            <CrossIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container item sm={12}>
        <List
          className={classes.LinksContainer}
          component="nav"
          // aria-labelledby="navbar"
        >
          <ListItem
            onClick={handleClickINeedHelp}
            className={(classes.pageLink, classes.mobileViewLinks)}
          >
            <ListItemText primary="I NEED HELP" />
            {openINeedHelp ? <ArrowIcon /> : <ArrowIcon />}
          </ListItem>
          <Collapse
            in={openINeedHelp}
            timeout="auto"
            unmountOnExit
            sx={{ width: '100%' }}
          >
            <List component="div" disablePadding>
              <ListItem className={classes.subMenuLink}>
                <Link href="/">
                  <ListItemText primary="Browse by topics" />
                </Link>
              </ListItem>
              <ListItem className={classes.subMenuLink}>
                <Link href="/">
                  <ListItemText primary="Articles" />
                </Link>
              </ListItem>
              <ListItem className={classes.subMenuLink}>
                <Link href="/">
                  <ListItemText primary="Quizzes" />
                </Link>
              </ListItem>
              <ListItem className={classes.subMenuLink}>
                <Link href="/">
                  <ListItemText primary="DTL Originals" />
                </Link>
              </ListItem>
              <ListItem className={classes.subMenuLink}>
                <Link href="/">
                  <ListItemText primary="Get recommendations" />
                </Link>
              </ListItem>
              <ListItem className={classes.subMenuLink}>
                <Link href="/">
                  <ListItemText primary="Confidential support" />
                </Link>
              </ListItem>
              <ListItem className={classes.subMenuLink}>
                <Link href="/">
                  <ListItemText primary="Join Community" />
                </Link>
              </ListItem>
              <ListItem className={classes.subMenuLink}>
                <Link href="/">
                  <ListItemText primary="Its an Emergency" />
                </Link>
              </ListItem>
            </List>
          </Collapse>

          <ListItem
            onClick={handleClickIWantToHelp}
            className={(classes.pageLink, classes.mobileViewLinks)}
          >
            <ListItemText primary="I WANT TO HELP" />
            {openINeedHelp ? <ArrowIcon /> : <ArrowIcon />}
          </ListItem>
          <Collapse
            in={openIWantToHelp}
            timeout="auto"
            unmountOnExit
            sx={{ width: '100%' }}
          >
            <List
              component="div"
              disablePadding
              // sx={{ width: '100%', backgroundColor: 'pink' }}
            >
              <ListItem className={classes.subMenuLink}>
                <Link href="/">
                  <ListItemText primary="Find Ways to help" />
                </Link>
              </ListItem>
              <ListItem className={classes.subMenuLink}>
                <Link href="/">
                  <ListItemText primary="Fundraise" />
                </Link>
              </ListItem>
              <ListItem className={classes.subMenuLink}>
                <Link href="/">
                  <ListItemText primary="Volunteer" />
                </Link>
              </ListItem>
              <ListItem className={classes.subMenuLink}>
                <Link href="/">
                  <ListItemText primary="For brands" />
                </Link>
              </ListItem>
              <ListItem className={classes.subMenuLink}>
                <Link href="/">
                  <ListItemText primary="Join Our team" />
                </Link>
              </ListItem>
              <ListItem className={classes.subMenuLink}>
                <Link href="/">
                  <ListItemText primary="Donate Skills" />
                </Link>
              </ListItem>
            </List>
          </Collapse>

          <ListItem className={classes.pageLink}>
            <Link href="/">
              <ListItemText primary="ABOUT US" />
            </Link>
          </ListItem>
          <ListItem className={classes.pageLink}>
            <Link href="/">
              <ListItemText primary="MEET THE TEAM" />
            </Link>
          </ListItem>
          <ListItem className={classes.pageLink}>
            <Link href="/">
              <ListItemText primary="REPORT CYBER BULLYING" />
            </Link>
          </ListItem>
          <ListItem className={classes.pageLink}>
            <Link href="/">
              <ListItemText primary="CAREERS" />
            </Link>
          </ListItem>
          <ListItem className={classes.pageLink}>
            <Link href="/">
              <ListItemText primary="CAMPAIGNS" />
            </Link>
          </ListItem>
          <ListItem className={classes.pageLink}>
            <Link href="/">
              <ListItemText primary="PARTNER WITH US" />
            </Link>
          </ListItem>
          <ListItem className={classes.pageLink}>
            <Link href="/">
              <ListItemText primary="MEET NEW FRIENDS" />
            </Link>
          </ListItem>
          <ListItem className={classes.pageLink}>
            <Link href="/">
              <ListItemText primary="DONATE NOW" />
            </Link>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  )
}

export default Drawer
