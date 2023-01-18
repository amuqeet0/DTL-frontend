import * as React from 'react'
import clsx from 'clsx'
import { Grid, Typography } from '@mui/material'
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
  button?: React.ReactNode | JSX.Element
  endCard?: React.ReactNode | JSX.Element
}

const SubMenu: React.FC<SubMenuType> = ({
  heading,
  subHeading,
  menuDataList,
  button,
  endCard,
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
        {button}
      </Grid>
      <Grid container item sm={6.5} className={classes.subMenuContainer}>
        {menuDataList?.map((menu: MenuData, idx: number) => {
          return (
            <Grid item sm={6} key={idx} className={classes.cardGrid}>
              <SubMenuCard
                text={menu.title}
                route={menu.route}
                className={classes.cardBorder}
              />
            </Grid>
          )
        })}
        <Grid item sm={6} className={classes.emergencyCard}>
          {endCard}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SubMenu
