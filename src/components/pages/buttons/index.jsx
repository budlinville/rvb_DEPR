import React, {Component} from 'react';
import {connect} from 'react-redux';

import {themeSelector} from "../../../reducers/themes"
import Button from "./button";

class Buttons extends Component {
  render() {
    const {theme} = this.props;
    return(
      <div style={{backgroundColor: theme.palette.background.paper}} >
        <Button color="red" title="Red Team"/>
        <Button color="blue" title="Blue Team"/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  theme: themeSelector(state)
});

export default connect(mapStateToProps)(Buttons);
