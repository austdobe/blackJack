import styled from 'styled-components';

export const Wrapper = styled.div `
    background: linear-gradient(
        to bottom, rgba(0, 0, 0, .25)
        41%, rgba( 0, 0, 0, 0.85)
        100%
    ), 
    url(${({image}) => image}), var(--darkGrey);
    background-size: 100%, cover;
    background-position: center;
    height: 600px;
    position: relative;
    animation: animateWelcomeImage 2s;

    @keyframes animateWelcomeImage {
        from{
            opacity: 0;
        } to{
            opacity: 1
        }
    }
`;

export const Content = styled.div `
    padding: 20px;
    max-width: var(--maxWidth);
    margin: 0 auto;

`;

export const Text = styled.div `
    z-index: 100;
    max-width: 700px;
    background: linear-gradient(
        to bottom, rgba(0, 0, 0, .85)
        41%, rgba( 0, 0, 0, 0.45)
        100%
    );
    border-radius: 25%;
    padding: 10px 20px;
    vertical-align: middle;
    text-align: center;
    min-height: 100px;
    color: var(--white);
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;
    
    h1{
        font-size: var(--fontSuperBig);

        @media screen and (max-width: 720px){
            font-size: var(--fontBig)

        }
    
    }
    p{
        font-size: var(--fontMed);

        @media screen and (max-width: 720px){
            font-size: var(--fontSmall)
        }
    }
    @media screen and (max-width: 720px){
        max-width: 100%
    }

`;