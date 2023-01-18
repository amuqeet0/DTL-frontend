import React from 'react'
import SubMenuCard from './subMenuCard'
import mixins from 'src/styles/mixins'
import useStyles from './styles'

const ItsAnEmergencyCard: React.FC = () => {
  const { classes } = useStyles()
  const { classes: mixinsStyles } = mixins()
  return (
    <SubMenuCard
      text={'ITS AN EMERGENCY'}
      route={'/'}
      className={(classes.cardBorder, mixinsStyles.rainbowBgHoverEffect)}
    />
  )
}

const DonateNowCard: React.FC = () => {
  const { classes } = useStyles()
  const { classes: mixinsStyles } = mixins()
  return (
    <SubMenuCard
      text={'DONATE NOW'}
      route={'/'}
      className={(classes.cardBorder, mixinsStyles.rainbowBgHoverEffect)}
    />
  )
}

export { ItsAnEmergencyCard, DonateNowCard }
