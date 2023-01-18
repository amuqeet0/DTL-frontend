import * as React from 'react'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { makeStyles } from 'tss-react/mui'

// const currencies = [
//   {
//     value: 'English',
//     label: '🇬🇧',
//   },
//   {
//     value: 'Espanol',
//     label: '🇪🇸',
//   },
// ]

const SelectLanguage: React.FC = () => {
  const [age, setAge] = React.useState('🇬🇧 En')
  const { classes } = useStyles()
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }

  return (
    <Box className={classes.root}>
      <FormControl fullWidth sx={{ border: 'none' }}>
        <Select
          value={age}
          variant="standard"
          onChange={handleChange}
          className={classes.selectField}
        >
          <MenuItem value={'🇬🇧 En'}>🇬🇧 En</MenuItem>
          <MenuItem value={'🇪🇸 Es'}>🇪🇸 Es</MenuItem>
          <MenuItem value={'🇬🇧 En'}>🇬🇧 En</MenuItem>
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
    borderBottom: 'none',
  },
  '.MuiSelect-standard': {
    border: 'none !important',
  },
  '& .MuiInput-root': {
    '&:before, :after, :hover:not(.Mui-disabled):before': {
      borderBottom: 0,
    },
  },
}))

export default SelectLanguage
