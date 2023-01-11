import { Roboto } from '@next/font/google'
import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
    }
    custom: {
      main: string
      sec: string
      bgColor: string
      borderColor: string
      blackColor: string
      whiteColor: string
      lightFont: string
    }
    maxWidth: number | string
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string
    }
    custom: {
      main: string
      sec: string
      bgColor: string
      borderColor: string
      blackColor: string
      whiteColor: string
      lightFont: string
    }
    maxWidth: number | string
  }
}

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  breakpoints: {
    values: {
      // ? default breakpoints
      // xs: 0,
      // sm: 600,
      // md: 900,
      // lg: 1200,
      // xl: 1536,
      xs: 0,
      sm: 680,
      md: 920,
      lg: 1250,
      xl: 1420,
    },
  },
  custom: {
    main: 'red',
    sec: 'green',
    bgColor: 'rgba(255, 255, 255, 0.3)',
    borderColor: '#000',
    blackColor: '#000',
    whiteColor: '#fff',
    lightFont: '#fff',
  },
  maxWidth: 1920,
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})

export default theme
