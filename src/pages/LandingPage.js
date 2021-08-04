import React from 'react';
//Styles
import { Wrapper, Content, Section } from './Landing.styles';
import WelcomeSection from '../components/WelcomeSection';

const LandingPage = ()=>(
    <Wrapper>
        <Content>
            <WelcomeSection id="welcome">

                <h1> Hello and welcome to my page</h1>
                <p> You are probably here to see my work... You can click the top right option to go directly to the game, or check out below for more detail on the process.</p>

            </WelcomeSection>
        </Content>
    </Wrapper>
)

export default LandingPage