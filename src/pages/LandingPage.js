import React from 'react';
//Styles
import { Wrapper, Content, Section } from './Landing.styles';
//Components
import WelcomeSection from '../components/WelcomeSection';
//Images
import WelcomeImage from '../images/welcome.PNG'

const LandingPage = ()=>(
<>
    <WelcomeSection 
        id="welcome"
        image={WelcomeImage}
        title='Welcome to Blackjack'
        text='Are the odds in your favor?'
    />
    <Wrapper>
        <Content>
        </Content>
    </Wrapper>
</>
)

export default LandingPage