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
            
            <ul>
                <li className='dropdown'> 
                    <a href='javascript:void(0)' className='dropdownButton'>More Options</a>
                    <div className="dropdownContent">
                        <Link className='links dropLink' to='/game'>
                            <h1>Play Blackjack</h1>
                        </Link>
                        <a href="https://austdobe.github.io" target='_blank' rel="noreferrer">My Portfolio</a>
                        <a href="https://www.github.com/austdobe" target='_blank' rel="noreferrer">My GitHub Profile</a>
                    </div>
                </li>
            </ul>
        </Content>
    </Wrapper>
);

export default Header;
