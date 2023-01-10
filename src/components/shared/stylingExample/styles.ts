import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
  root: {
    background: theme.custom.main,
    '&:hover': {
      background: theme.palette.primary.main,
    },
  },
  container: {
    background: theme.palette.secondary.main,
  },
}))

export default useStyles
