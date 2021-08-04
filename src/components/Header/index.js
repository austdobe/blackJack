import React from 'react';
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
                <h1>Black Jack</h1>
            </Link>
        </Content>
    </Wrapper>
);

export default Header;