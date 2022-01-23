import React from "react";
import { Button } from '@mui/material';

function Header(){
    return(
    <header className="header">
        <div className="toolbar">
            <div className="">
                <a href="/">Conecta Dev</a>
            </div>
            <div className="">
                <Button color='primary' variant="contained">Novo Post</Button>
                <span>img1</span>
                <span>img2</span>
            </div>
        </div>
    </header>
    );
}

export default Header;