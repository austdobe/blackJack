import React from 'react';
//style
import { Wrapper, Content } from './Grid.styles';

const Grid = ({ header, children }) => (

    <Wrapper>
        <h3>{header}</h3>
        <Content>{children}</Content>
    </Wrapper>

)

export default Grid;