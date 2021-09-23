import React, { useState } from 'react';
import {ButtonBase, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const CustomButton = ({color, text='Red'}) => {
  const classes = useStyles();
  const [pressed, setPressed] = useState(); // TODO : Working here

  const buttonClass = pressed ? classes.buttonPressed : classes.buttonNotPressed;

  return (
    <ButtonBase
      className={`${classes.buttonBase} ${buttonClass}`}
      disableRipple={true}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
    >
      <Typography>
-        {text}
-      </Typography>
    </ButtonBase>
  )
}

const useStyles = makeStyles(theme => ({
  buttonBase: {
    height: 500,
    width: 700,
    margin: 10,
    color: '#FFFFFF',
    backgroundColor: 'blue',
    border: '5px solid yellow',
    borderRadius: 20,
    transition: '.1s'
  },
	buttonNotPressed: {
    transform: 'translateY(0)',
    boxShadow: '0px 5px 0px darkblue',
  },
  buttonPressed: {
    transform: 'translateY(8px)',
    boxShadow: '0px 1px 0px darkblue',
  },
	label: {
		color: theme.palette.primary.main,
		textShadow: `0 0 1px ${theme.palette.primary.dark}`
	}
}));

export default CustomButton;
