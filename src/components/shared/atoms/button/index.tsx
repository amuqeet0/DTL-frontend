import React from 'react'
import Button from '@mui/material/Button'
import clsx from 'clsx'
import { makeStyles } from 'tss-react/mui'
import { ButtonComponentProps } from 'src/types'

const ButtonComponent: React.FC<ButtonComponentProps> = (
  props: ButtonComponentProps
) => {
  const {
    type,
    text,
    className = '',
    isSubmitBtn = false,
    disabled,
    onClick,
    size = 'large',
    startIcon,
    loading = false,
  } = props

  const { classes } = useStyles()

  return (
    <Button
      size={size}
      variant={type}
      className={clsx(classes.root, className)}
      type={isSubmitBtn ? 'submit' : 'button'}
      disabled={disabled ?? loading}
      onClick={onClick}
      startIcon={startIcon}
    >
      {text}
    </Button>
  )
}

const useStyles = makeStyles()((theme) => ({
  root: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    color: theme.custom.blackColor,
    background: theme.custom.bgColor,

    border: `1px solid ${theme.custom.borderColor}`,
    borderRadius: '30.5px',
  },
}))

export default ButtonComponent
