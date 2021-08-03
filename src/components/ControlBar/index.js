import React from "react";

//Styles
import { Wrapper, Content, Button, Text } from "./ControlBar.styles";


const ControlBar = ({money, count, callback})=>(
    <Wrapper>
        <Content>
            <Button className="hit" type="button" onClick={callback}>Hit</Button>
            <Button className="stay" type="button" onClick={callback}>Stay</Button>
            <Text>
                Wallet:
                <span>{" " + money}</span>
            </Text>
            <Text>
                Count: 
                <span>{" " + count}</span>
            </Text>
            
        
              
               
        </Content>
    </Wrapper>
)

export default ControlBar