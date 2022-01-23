import React from 'react';
import Header from './components/header';
import './style.css';

function Home(){
    return (
        <div>
            <Header />
            <main className="main"> 
            <div className="navbar">Navbar</div>
            <div className="feed">Feed</div>
                
            </main>s
        </div>
    )
}


export default Home;