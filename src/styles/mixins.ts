import { makeStyles } from 'tss-react/mui'

const mixins = makeStyles()((theme) => ({
  // ? css code to make glassmorphism effect
  glassmorphismExample: {
    background: theme.custom.bgColor,
    borderRadius: 16,
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(4.8px)',
    // -webkit-backdrop-filter: blur(4.8px), // ? does this get added by tss-react automatically?
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },
  rainbowBgHoverEffect: {
    ':hover': {
      background: `linear-gradient(106.87deg, #DC86A0 2.25%, #A0C0E9 28.43%, #EAA539 54.12%, #848CC9 81.29%, #63D169 97.09%)`,
    },
  },
}))

export default mixins
