import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import StyledComp from '../components/shared/stylingExample'

export default function Home() {
  return (
    <div>
      <Box component="form" noValidate autoComplete="off">
        <StyledComp />
        <TextField
          className="bg-blue"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>
    </div>
  )
}
