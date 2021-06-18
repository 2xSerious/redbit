import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../SearchBar/Search';




export const Header = () => {



    return (
        <header >
            {/* <Link to='/'> */}
            <div className="header-title">
                <h1>Red<span>bit</span></h1>
            {/* </Link> */}
              <Search />
            </div>
            
        </header>
    )
}