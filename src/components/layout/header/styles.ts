import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
    height: 'auto',
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.custom.bgColor,
    backdropFilter: 'blur(47.5px)',
    borderTop: `1px solid ${theme.custom.blackColor}`,
    borderBottom: `1px solid ${theme.custom.blackColor}`,
  },
  innerContainer: {
    width: '100%',
    maxWidth: theme.maxWidth,
    height: 'inherit',
    maxHeight: '87px',
    padding: theme.spacing(0, 16),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 4),
    },
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-start',
    },
  },
  hamburgerMenuIcon: {
    cursor: 'pointer',
  },
  logoContainer: {
    height: '87px',
    display: 'grid',
    placeContent: 'center',
  },
  buttonsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  searchBtn: {
    marginRight: theme.spacing(1),
  },
  intlBox: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  buttonBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  linksContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  links: {
    display: 'inline-block',
    height: '87px',
    lineHeight: '87px',
    span: {
      display: 'inline-block',
      height: '100%',
      padding: theme.spacing(0, 4),
      color: theme.custom.blackColor,
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
    marginLeft: theme.spacing(4),
    color: theme.custom.lightFont,
    backgroundColor: theme.custom.blackColor,
    ':hover': {
      background: theme.custom.blackColor,
    },
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
}))

export default useStyles
