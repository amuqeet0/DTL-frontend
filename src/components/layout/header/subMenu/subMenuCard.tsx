import * as React from 'react'
import clsx from 'clsx'
import { Grid, Typography } from '@mui/material'
import { Link } from 'src/components/shared/atoms'
import { makeStyles } from 'tss-react/mui'
import { Nunito } from '@next/font/google'
import { LongArrowIcon } from 'src/assets/svgs'

const nunito = Nunito({ subsets: ['latin'] })

interface SubMenuCardType {
  text: string
  route?: string
  endCard?: React.ReactNode
  className?: string
}

const SubMenuCard: React.FC<SubMenuCardType> = ({
  text,
  route = '',
  className,
}: SubMenuCardType) => {
  const { classes } = useStyles()

  return (
    <Link href={route} className={classes.root}>
      <Grid
        container
        className={clsx(nunito.className, classes.linkContainer, className)}
      >
        <Grid item sm={10} className={classes.cardContentContainer}>
          <Typography
            variant="body1"
            component="h2"
            className={classes.cardText}
          >
            {text}
          </Typography>
        </Grid>
        <Grid item sm={2} className={classes.iconContainer}>
          <LongArrowIcon />
        </Grid>
      </Grid>
    </Link>
  )
}

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    cursor: 'pointer',
    textAlign: 'center',
  },
  linkContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    background: theme.custom.bgColor,
    border: `1px solid ${theme.custom.blackColor}`,
    padding: theme.spacing(2),
    paddingTop: theme.spacing(7),
    color: theme.custom.blackColor,
    ':hover': {
      background: theme.custom.whiteColor,
    },
  },
  cardContentContainer: {
    lineHeight: 22,
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'flex-start',
    textAlign: 'center',
  },
  iconContainer: {},
  cardText: {
    height: 'fit-content',
    color: theme.custom.blackColor,
  },
}))

export default SubMenuCard
