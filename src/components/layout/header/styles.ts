import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
    height: '87px',
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.custom.bgColor,
    backdropFilter: 'blur(47.5px)',
  },
  innerContainer: {
    width: '100%',
    maxWidth: theme.maxWidth,
    height: 'inherit',
    padding: '0 70px',
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
  },
  linksContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  logoContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    height: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    // border: '2px solid yellow',
  },
  searchBtnContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'inherit',
    paddingTop: theme.padding,
  },
  LinkButtonsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
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
  donateBtn: {
    // width: '114px',
    // height: '22px',
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: 700,
    // fontSize: 16,
    // lineHeight: 22,
    textAlign: 'center',
    color: theme.custom.lightFont,
    backgroundColor: theme.custom.blackColor,
  },
}))

export default useStyles
