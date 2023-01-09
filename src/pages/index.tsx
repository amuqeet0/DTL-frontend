import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from "../styles/Home.module.css";
import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function Home() {
  return (
    <div>
      <Box component="form" noValidate autoComplete="off">
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
