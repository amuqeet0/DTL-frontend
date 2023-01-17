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
  className?: string
}

const SubMenuCard: React.FC<SubMenuCardType> = ({
  text,
  route = '',
  className,
}: SubMenuCardType) => {
  const { classes } = useStyles()

  return (
    <Grid container className={clsx(nunito.className, classes.root, className)}>
      <Link href={route} className={classes.linkContainer}>
        <Grid item sm={10} className={classes.cardContentContainer}>
          <Typography
            variant="body1"
            component="h2"
            className={classes.cardText}
          >
            {text}
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <LongArrowIcon />
        </Grid>
      </Link>
    </Grid>
  )
}

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    background: theme.custom.bgColor,
    borderCollapse: 'collapse',
    border: '1px solid black',
    padding: theme.spacing(2),
    color: 'black',
    ':hover': {
      background: theme.custom.whiteColor,
    },
  },
  linkContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    cursor: 'pointer',
    // background: 'red',
    textAlign: 'center',
  },
  cardContentContainer: {
    height: 'fit-content',
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    // background: 'pink',
  },
  cardText: {
    color: theme.custom.blackColor,
  },
}))

export default SubMenuCard
