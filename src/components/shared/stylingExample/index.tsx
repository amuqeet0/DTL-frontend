import * as React from 'react'
import Box from '@mui/material/Box'
import { makeStyles } from 'tss-react/mui'
// import { useTheme } from "@mui/material/styles";

export default function StyledComp() {
  // const theme = useTheme();
  // const { classes, cx } = useStyles({ "color": isClicked ? "blue": "red" });
  const { classes } = useStyles()
  return (
    <Box component="form" className={classes.root}>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, porro.
      </p>
    </Box>
  )
}

const useStyles = makeStyles()({
  //If you don't need neither the theme nor any state or
  //props to describe your component style you can pass-in
  //an object instead of a callback.
  root: {
    backgroundColor: 'pink',
  },
})

// const useStyles = makeStyles()(
//   (theme) => ({
//       "root": {
//           color,
//           "&:hover": {
//               "color": theme.palette.primary.main
//           }
//       }
//   })
// );
