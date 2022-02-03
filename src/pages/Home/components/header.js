import React from "react";
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SvgIcon from '@mui/material/SvgIcon';
import { Bell } from 'react-feather';
import { Avatar } from '@mui/material';

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',
    },
    img: {
        maxHeight: 55,
    },
    grow: {
        flexGrow: 1, 
    },
    userSection: {
        display: 'flex',    
        alignItems: 'center',
    },
    botao: {
        marginRight: 10
    },
    bell: {
        marginRight: 20,
        marginLeft: 20
    }

});

function Header(){
    const classes = useStyles();
    return(
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
           <img src="/images/logo.png" className={classes.img} />
           <div className={classes.grow}></div>
           

           <div className={classes.userSection}>
           <Button color='primary' variant="contained" className={classes.botao}>Novo Post</Button>
           <SvgIcon className={classes.bell}>
               <Bell ></Bell>
           </SvgIcon>
           <Avatar alt="Remy Sharp" src="" />

            </div> 
            {/* <div className="">
                <a href="/">Conecta Dev</a>
                <input type="text"></input>
            </div>
            <div className="">
                <Button color='primary' variant="contained">Novo Post</Button>

                <span>img1</span>
                <span>img2</span>
            </div> */}
        </Toolbar>
        </AppBar>
    );
}

export default Header;