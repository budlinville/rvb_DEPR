import React, {Component} from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Menu,
  MenuItem
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {WbSunny, NightsStay} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import Switch from 'react-switch';
import {connect} from 'react-redux';

import {themeSelector} from "../reducers/themes";
import logo from "../img/logo.png";
import {toggleTheme} from "../actions/themes"

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    }
  }
  render() {
    const handleClick = (event) => {
      this.setState({anchorEl: event.currentTarget});
    }
    const handleClose = () => {
      this.setState({anchorEl: null});
    }
    const {children, theme, changeTheme} = this.props;
    return (
      <div style={{margin: 0}}>
        <AppBar position="static" style={{backgroundColor: theme.palette.background.default}}>
          <Toolbar style={{justifyContent: "space-between"}}>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={this.state.anchorEl}
              open={!!this.state.anchorEl}
              onClose={handleClose}
            >
              <MenuItem component={Link} to="/">Home</MenuItem>
              <MenuItem component={Link} to="/stats">Nerd Stats</MenuItem>
              <MenuItem component={Link} to="/about">About</MenuItem>
              <MenuItem component={Link} to="/donate">Donate</MenuItem>
              <span style={{justifyContent: "space-between"}}>
                <WbSunny style={{height:12}}/>
                <Switch
                  onChange={changeTheme}
                  checked={theme.palette.type === "dark"}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  width={25}
                  height={12}
                />
                <NightsStay style={{height:12}}/>
              </span>
            </Menu>
            <img src={logo} alt="" style={{maxWidth: "200px"}}/>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        { children }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  theme: themeSelector(state)
});

const mapDispatchToProps = dispatch => ({
  changeTheme: () => dispatch(toggleTheme())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
