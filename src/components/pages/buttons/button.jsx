import React from 'react';
import {Button, Typography} from '@material-ui/core';

const CustomButton = ({color, title}) => {
  const buttonHeight = window.innerHeight * 0.8;
  return (
    <Button
      className={"custom-button"}
      variant="contained"
      color={color}
      style={{
        height: `${buttonHeight}px`,
        backgroundColor: color
      }}
    >
      <Typography>
        {title}
      </Typography>
      </Button>
  )
}

export default CustomButton;
