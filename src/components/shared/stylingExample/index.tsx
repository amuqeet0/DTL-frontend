import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
// import { useTheme } from "@mui/material/styles";

export default function Home() {
  // const theme = useTheme();
  return (
    <div>
      <Box component="form">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
    </div>
  )
}
