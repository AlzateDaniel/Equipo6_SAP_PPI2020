import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem';
import Menu from '@material-ui/core/Menu';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import VisibilityIcon from '@material-ui/icons/Visibility';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import Link from '@material-ui/core/Link';
import { Link as RouterLink, withRouter } from 'react-router-dom';

const MyLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  }, 
}));

const Header = (props) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  
  const [abrir, setAbrir] = React.useState(true);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    setAbrir(!abrir);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className="navbar-dark bg-dark" > 
        <Toolbar>
          <IconButton onClick={handleMenu} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Icon>menu</Icon>
          </IconButton>
          <Menu
          
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem>
          <Link to="/inicioPerfil" component={MyLink} variant="body2" > <HomeIcon color="action"/> Inicio </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/quienesSomos" component={MyLink} variant="body2" > <VisibilityIcon color="action"/> Quienes Somos </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/chat" component={MyLink} variant="body2" > <WhatsAppIcon color="action" /> Mensajes </Link>
        </MenuItem>
        <MenuItem button onClick={handleClick}>
           Servicios {abrir ? <ExpandLess /> : <ExpandMore />}
        </MenuItem>
      <Collapse in={abrir} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItem button className={classes.nested}>
             <MenuItem>
                <Link to="/salud" component={MyLink} variant="body2" ><FavoriteTwoToneIcon  color="secondary"/>  Salud </Link>
             </MenuItem>
          </ListItem>

          <ListItem button className={classes.nested}>
             <MenuItem>
                <Link to="/apariencia" component={MyLink} variant="body2" > <FitnessCenterIcon/> Apariencia </Link>
             </MenuItem>
          </ListItem>
        </List>        
      </Collapse>
    </Menu>
        <Typography variant="h6" className={classes.title}>
            
         </Typography>
          {props.children}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter (Header);
