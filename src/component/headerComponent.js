import {
    Grid,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
  } from '@material-ui/core';
  import MenuIcon from '@material-ui/icons/Menu';
  import {NavLink} from "react-router-dom";

function headerComponent(){
return(
    <>
        <Grid>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                    <NavLink exact to="/view">
                    view
                    </NavLink>
                    </Typography>
                    <Button color="inherit">
                     <NavLink exact to="/add">    
                        add
                    </NavLink>
                    </Button>
                </Toolbar>
            </AppBar>
            </Grid>
            </>
);
}
export default headerComponent;