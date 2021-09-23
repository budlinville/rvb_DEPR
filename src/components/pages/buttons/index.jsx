import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from "./button";

const Buttons = () => {
  const classes = useStyles();
  return(
    <div className={classes.root} >
      <Button color="red" text="Red Team"/>
      <Button color="blue" text="Blue Team"/>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
	root: {
    display: 'flex',
    height: '80%'
  }
}));

export default Buttons;
