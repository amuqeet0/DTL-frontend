import * as React from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import { Grid } from '@mui/material'
import ButtonComponent from 'src/components/shared/atoms/button'
import Drawer from './drawer'
import { HamburgerMenuIcon, SearchIcon } from 'src/assets/svgs'
import useStyles from './styles'

const Header: React.FC = () => {
  const [drawerState, setDrawerState] = React.useState(false)
  const { classes } = useStyles()

  const drawerHandler: () => void = (): void => {
    setDrawerState(!drawerState)
  }

  return (
    <Box component="div" className={classes.root}>
      <Grid container className={classes.innerContainer}>
        <Grid container item sm={4} spacing={2}>
          <Grid item sm="auto" onClick={drawerHandler}>
            <HamburgerMenuIcon />
          </Grid>
          <Grid item sm="auto" xs={0}>
            <Link href="/" className={classes.links}>
              <span>I NEED HELP</span>
            </Link>
            <Link href="/" className={classes.links}>
              <span>I WANT TO HELP</span>
            </Link>
          </Grid>
        </Grid>
        <Grid item sm={4} className={classes.logoContainer}>
          DTL Logo
        </Grid>
        <Grid
          container
          item
          sm={4}
          spacing={2}
          className={classes.buttonsContainer}
        >
          <Grid item sm="auto" sx={{ background: 'red' }}>
            <SearchIcon />
          </Grid>
          <Grid container item sm={10} className="buttonContainer">
            <Grid item sm={6} sx={{ background: 'pink' }}>
              <ButtonComponent
                size="medium"
                type="outlined"
                text="MEET NEW FRIENDS"
              />
            </Grid>
            <Grid item sm={6} sx={{ background: 'pink' }}>
              <ButtonComponent
                size="medium"
                type="outlined"
                text="DONATE NOW"
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
