import React from 'react';
import { unstable_batchedUpdates } from 'react-dom';
import { Link } from "react-router-dom"

//style
import { Wrapper, Content} from './header.styles';

const Header = () =>(
    <Wrapper>
        <Content>
            <Link className='links' to='/'>
                <h1>Home</h1>
            </Link>
            <Link className='links' to='/game'>
                <h1>Play</h1>
            </Link>
            <ul>
                <li className='dropdown'> 
                    <a href='javascript:void(0)' className='dropdownButton'>Options</a>
                    <div className="dropdownContent">
                        
                        <a href="https://austdobe.github.io" target='_blank' rel="noreferrer">My Portfolio</a>
                        <a href="https://www.github.com/austdobe" target='_blank' rel="noreferrer">My Github Profile</a>
                    </div>
                </li>
            </ul>
        </Content>
    </Wrapper>
);

export default Header;