import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
    height: 'auto',
  },
  homePageContainer: {
    width: '100%',
    height: '200vh',
    paddingTop: '200px',
    marginTop: '200px',
    background: theme.custom.sec,
  },
}))

export default useStyles
