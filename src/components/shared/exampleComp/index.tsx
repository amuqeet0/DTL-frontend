// import styles from "./someComp.module.scss";
import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useTheme } from '@mui/material/styles'

export default function HomeComp() {
  const theme = useTheme()
  return (
    <div className="container">
      <Box
        component="form"
        sx={{
          padding: 1,
          width: 1200,
          background: theme.palette.primary.main,
          '& > :not(style)': {
            m: 1,
            width: '25ch',
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>
    </div>
  )
}
