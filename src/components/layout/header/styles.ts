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
    border: `1px solid ${theme.custom.blackColor}`,
  },
  innerContainer: {
    width: '100%',
    maxWidth: theme.maxWidth,
    height: 'inherit',
    padding: `0 ${theme.spacing(16)}`,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    [theme.breakpoints.down('md')]: {
      padding: `0 ${theme.spacing(4)}`,
    },
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-start',
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
  },
  searchBtnContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 'inherit',
    paddingTop: theme.spacing(1),
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
  linksContainer: {
    height: '100%',
    padding: theme.spacing(0, 4),
    marginLeft: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  links: {
    height: '87px',
    textDecoration: 'none',
    color: '#000',
    span: {
      display: 'inline-block',
      lineHeight: '86px',
      height: '100%',
      padding: theme.spacing(0, 4),
    },
  },
  addBlueBgColor: {
    backgroundColor: theme.custom.blueBgColor,
  },
  addPinkBgColor: {
    backgroundColor: theme.custom.pinkBgColor,
  },
  DrawerContainer: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100vw',
    height: '100vh',
    padding: theme.spacing(0, 4),
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
    padding: theme.spacing(8),
    paddingBottom: 0,
    borderBottom: `1px solid ${theme.custom.whiteColor}`,
  },
  donateBtn: {
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: 700,
    textAlign: 'center',
    color: theme.custom.lightFont,
    backgroundColor: theme.custom.blackColor,
  },
  cardBorder: {
    border: 'none',
    borderBottom: '1px solid black',
    borderRight: '1px solid black',
  },
  getHelpBtn: {
    width: 'fit-content',
    minWidth: 176,
    height: 50,
    paddingTop: theme.spacing(3),
    backgroundColor: theme.custom.blackColor,
    color: theme.custom.lightFont,
  },
  '@keyframes backgroundMotion': {
    '0%': {
      backgroundColor: 'aqua',
    },
    '100%': {
      backgroundColor: '#FF97C1',
    },
  },
}))

export default useStyles
