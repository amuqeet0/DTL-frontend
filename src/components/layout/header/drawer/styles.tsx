import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
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
  LinksContainer: {
    // background: theme.custom.whiteColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  pageLink: {
    textDecoration: 'none',
    color: theme.custom.lightFont,
    // background: 'red',
    padding: `0 ${theme.padding}*4`,
    margin: `0 2rem`,
  },
}))

export default useStyles
