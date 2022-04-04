import {AppBar,Typography,Toolbar} from '@mui/material';

const Header = () => {
    return (
    <AppBar>
        <Toolbar>
        <Typography variant="h4" component="div" sx={{m:2}}>
            Insurance
        </Typography>
        </Toolbar>
    </AppBar>
  )
}


export default Header