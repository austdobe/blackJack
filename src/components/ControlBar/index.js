import React from "react";

//Styles
import { Wrapper, Content, Button, Text } from "./ControlBar.styles";



const ControlBar = ({money, count, callbackOne, callbackTwo})=>
(
    <Wrapper>
        <Content>
            <Button className="hit" type="button" onClick={callbackOne}>Hit</Button>
            <Button className="stay" type="button" onClick={callbackTwo}>Stay</Button>
            {/* <Text>
                Wallet:
                <span>{" " + money}</span>
            </Text> */}
            <Text>
                Count: 
                <span>{" " + count}</span>
            </Text> 
        </Content>
      
    </Wrapper>
)


export default ControlBar