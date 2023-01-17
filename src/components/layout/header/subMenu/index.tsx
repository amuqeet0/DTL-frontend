import * as React from 'react'
import clsx from 'clsx'
import { Grid, Typography } from '@mui/material'
import { ButtonComponent } from 'src/components/shared/atoms'
import SubMenuCard from './subMenuCard'
import { Nunito } from '@next/font/google'
import useStyles from './styles'

const nunito = Nunito({ subsets: ['latin'] })

interface MenuData {
  title: string
  route: string
}

interface SubMenuType {
  heading: string
  subHeading?: string
  menuDataList?: MenuData[]
  Button?: React.ReactNode | JSX.Element
}

const SubMenu: React.FC<SubMenuType> = ({
  heading,
  subHeading,
  menuDataList,
}: SubMenuType) => {
  const { classes } = useStyles()

  return (
    <Grid container className={clsx(nunito.className, classes.root)}>
      <Grid container item sm={5.5} className={classes.titleContainer}>
        <Typography
          variant="h3"
          component="h2"
          className={classes.subMenuHeading}
        >
          {heading}
        </Typography>
        <Typography
          variant="body1"
          component="h2"
          className={classes.subHeading}
        >
          {subHeading}
        </Typography>
        <ButtonComponent
          type={'contained'}
          text={'GET HELP NOW'}
          className={classes.getHelpBtn}
        />
      </Grid>
      <Grid container item sm={6.5}>
        {menuDataList?.map((menu: MenuData, idx: number) => {
          return (
            <Grid item sm={6} key={idx}>
              <SubMenuCard text={menu.title} route={menu.route} />
            </Grid>
          )
        })}
        <Grid item sm={6} sx={{ backgroundColor: 'black', opacity: '1' }}>
          <SubMenuCard text={'ITS AN EMERGENCY'} route={'/'} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SubMenu
