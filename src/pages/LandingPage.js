import React from 'react';
//Styles
import { Wrapper, Content, Section, Image } from './Landing.styles';
//Components
import WelcomeSection from '../components/WelcomeSection';
//Images
import WelcomeImage from '../images/welcome.PNG'
import Headshot from '../images/Headshot.jpg'
import blackJack from '../images/blackjack.jpg'

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
            <Section className="rules" id='rules'>
                    <div>                <h3>Blackjack Rules</h3>
                    <h4>Objective: Get your cards as close to 21 without going over, while also having a higher count than the dealer.</h4>
                    <ul>
                        <li>
                            Card Count: All numbered cards equate to the number that they show. Face cards such as Jack, Queen and King all Equate to 10. Ace is your savior card. It will equate to 11 or 1 depending on what your score is. If you go over 21 and you have an Ace, it drops to 1. If you have a face card and an ace. Congrats, you got blackjack.
                        </li>
                        <li>
                            Once the initial cards are dealt. You have the option to Hit, or to Stay. If you choose to Hit, you are given a random card out of the deck. This card is added to your total. If you go over 21, you bust and lose the round. If you choose to stay, the dealer has the choice to Hit or to stay.
                        </li>
                        <li>
                            Once both decide to stay, the value of the cards are determined and the player closest to 21 without going over wins. 
                        </li>
                        <li>
                            Tie always goes to the dealer. If you both have a card count of 20. The dealer wins.
                        </li>
                    </ul>
                </div>
                <Image className="rulesImage" src={blackJack}/>

            </Section>
            <Section className="underHood" id='aboutBuild'>
                <h2>Under The Hood</h2>
                <h4>Technologies used</h4>
                <ul>
                    <li>
                        React |
                    </li>
                    <li>
                        React Hooks |
                    </li>
                    <li>
                        React Router Dom V6 (Currently in Beta) |
                    </li>
                    <li>
                        Styled Components |
                    </li>
                    <li>
                        Custom CSS |
                    </li>
                    <li>
                        Javascript / JSX |
                    </li>
                </ul>

            </Section>
            <Section className="profileCard" id='meetMe'>
                <h2>Meet the Developer</h2>
                <div >
                    <Image src={Headshot} alt="personal-head-shot"/>
                    <h3>Austin Dober</h3>
                    <p>
                        Merging years of customer service and healthcare experience with Full Stack Development. I help bring clarity and quality to technical problems and their users.
                    </p>
                    <p>
                        Recent Graduate of the University of North Carolina Full Stack Boot Camp.
                        I have deployed and coded over 20 different web applications. 
                    </p>
                    <ul>
                        <li>
                            <a href='https://www.austdobe.github.io' target="_blank" rel='noreferrer'>Portfolio</a>
                        </li>
                        <li>
                            <a href='www.github.com/austobe' target="_blank" rel='noreferrer'>Github</a>
                        </li>
                        <li>
                            <a href='https://docs.google.com/document/d/1_xVJg0XkSRHm0WnBOPPfeAEx8eOQtpS4RPgH-AxphxQ/edit?usp=sharing' target="_blank" rel='noreferrer'>Resume</a>
                        </li>
                    </ul>
                    
                </div>


            </Section>
        </Content>
    </Wrapper>
</>
)

export default LandingPage