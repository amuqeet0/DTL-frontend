import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
  // ? css code to make glassmorphism effect
  glassmorphismExample: {
    background: theme.custom.bgColor,
    borderRadius: 16,
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(4.8px)',
    // -webkit-backdrop-filter: blur(4.8px), // ? does this get added by tss-react automatically?
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },
}))

export default useStyles
