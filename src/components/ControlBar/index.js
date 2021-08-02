import React from "react";
//Styles
import { Wrapper, Content } from "./ControlBar.styles";

const ControlBar = (wallet)=>(
    <Wrapper>
        <Content>
            <p>{wallet}</p>
        
        </Content>
    </Wrapper>
)

export default ControlBar