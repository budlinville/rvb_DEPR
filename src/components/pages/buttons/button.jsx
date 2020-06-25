import React from 'react';
import {ButtonBase, Typography} from '@material-ui/core';

const CustomButton = ({color, title}) => {
  const buttonHeight = window.innerHeight * 0.8;
  return (
    <ButtonBase
      className={`custom-button ${(color === "red" ? "red-button" : "blue-button")}`}
      style={{
        height: `${buttonHeight}px`,
        backgroundColor: color
      }}
    >
      <Typography>
        {title}
      </Typography>
    </ButtonBase>
  )
}

export default CustomButton;
