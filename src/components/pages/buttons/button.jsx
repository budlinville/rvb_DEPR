import React, { useState } from 'react';
import {Button, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const CustomButton = ({color, text='Red'}) => {
  const classes = useStyles();
  const [pressed, setPressed] = useState(); // TODO : Working here

  const buttonClass = pressed ? classes.buttonPressed : classes.buttonNotPressed;

  const onClickHandler = stuffz => {
    console.log(stuffz);
    setPressed(!pressed);
  }

  return (
    <Button
      className={`${classes.buttonBase} ${buttonClass}`}
      disableRipple={true}
      onClick={onClickHandler}
      sx={{ height: 1/4 }}
    >
      <Typography>
-        {text}
-      </Typography>
    </Button>
  )
}

const useStyles = makeStyles(theme => ({
  buttonBase: {
    fontFamily: 'OpenSans',
    color: '#FFFFFF',
    backgroundColor: '#00FF7C',
    border: '1px solid #00FF7C',
    borderRadius: '5px',
    boxShadow: '0px 5px 0px #00823F',
    // position: 'relative',
    top: 0,
  },
	buttonNotPressed: {
    transform: 'translateY(-6px)'
  },
  buttonPressed: {
    transform: 'translateY(-2px)'
  },
	label: {
		color: theme.palette.primary.main,
		textShadow: `0 0 1px ${theme.palette.primary.dark}`
	}
}));

export default CustomButton;
