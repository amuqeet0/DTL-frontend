import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
    height: '87px',
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    background: theme.custom.bgColor,
    backdropFilter: 'blur(47.5px)',
  },
  innerContainer: {
    padding: '16px 70px',
  },
  logoContainer: {
    textAlign: 'center',
  },
  buttonsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    border: '2px solid yellow',
  },
  links: {
    textDecoration: 'none',
    color: '#000',
    padding: '0 16px',
  },

  DrawerContainer: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100vw',
    height: '100vh',
    padding: '0 1rem',
    color: theme.custom.lightFont,
    backgroundColor: theme.custom.blackColor,
  },
  DrawerTopBar: {
    width: '100%',
    height: '100px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2rem 2rem 0 2rem',
    borderBottom: `1px solid ${theme.custom.whiteColor}`,
  },
}))

export default useStyles
