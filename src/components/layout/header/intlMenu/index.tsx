import * as React from 'react'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { makeStyles } from 'tss-react/mui'

const SelectLanguage: React.FC = () => {
  const [lang, setLang] = React.useState('🇬🇧 En')
  const { classes } = useStyles()
  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string)
  }

  return (
    <Box className={classes.root}>
      <FormControl fullWidth sx={{ border: 'none' }}>
        <Select
          value={lang}
          variant="standard"
          onChange={handleChange}
          className={classes.selectField}
        >
          <MenuItem value={'🇬🇧 En'}>🇬🇧 English</MenuItem>
          <MenuItem value={'🇪🇸 Es'}>🇪🇸 Espanol</MenuItem>
          <MenuItem value={'🇬🇧 En'}>🇬🇧 English</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

const useStyles = makeStyles()((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  selectField: {
    width: '80px',
    border: 'none',
    outline: 'none',
    '&:before': {
      content: '""',
      border: 'none',
    },
    '&:hover': {
      border: ['none', '!important'],
    },
    '.MuiInputBase-root:hover': {
      border: 'none',
    },
  },
  '& .MuiInput-root': {
    '&:before, :after, :hover:not(.Mui-disabled):before': {
      borderBottom: 0,
    },
  },
}))

export default SelectLanguage
