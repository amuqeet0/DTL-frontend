import React from 'react'
import SubMenuCard from './subMenuCard'
import useStyles from './styles'

const ItsAnEmergencyCard: React.FC = () => {
  const { classes } = useStyles()
  return (
    <SubMenuCard
      text={'ITS AN EMERGENCY'}
      route={'/'}
      className={(classes.endCard, classes.endCardTextColor)}
    />
  )
}

const DonateNowCard: React.FC = () => {
  const { classes } = useStyles()
  return (
    <SubMenuCard
      text={'DONATE NOW'}
      route={'/'}
      className={(classes.endCard, classes.endCardTextColor)}
    />
  )
}

export { ItsAnEmergencyCard, DonateNowCard }
