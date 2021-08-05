import styled from 'styled-components';

export const Wrapper = styled.div `
    width: 100%;
    margin: 0 auto;
    background: rgb(0, 0, 0);
    background-size: 100%;

    h1 {        
        @media screen and (max-width: 768px){
            font-size: var(--fontBig)
        }
    }
    p {
        color: var(--white);
        
        @media screen and (max-width: 768px){
            font-size: var(--fontBig)
        }
    }
    
    
`;

export const Content = styled.div `
    display: block;
    max-width: var(--maxWidth);
    justify-items: center;
    justify-content: center;
    align-items: center;
    align-content: center;

    .profileCard{
        width: 50%;
        margin: 0 auto;
        padding: 20px;
        background-color: var(--medGrey);
        display:block;
        text-align: center;
        border-radius: 60px;
        @media screen and (max-width: 768px){
            width: 100%
        }
        
        li{
            margin: 0 20px;
            padding: 10px 20px;
            list-style: none;
            display: inline-flex;
            border-radius: 10px;
            cursor: pointer;
        }
        li:hover{
            background-color: var(--darkGrey);
            opacity: 0.6;
        }
        a{
            text-decoration: none;
            color: white;
        }
    
        
    }
    .rules{
        width: 100%;
        text-align: center;
        li{
            padding: 5px;
            list-style: armenian;
            display: inline-flex;
        }
        div{
            display: inline-block;
            width: 50%;
            @media screen and (max-width: 768px){
                display: block;
                width: 100%;
                
            }
        }
        .rulesImage{
            display: inline-block;
            width: 50%;
            padding-top: 20px;
        }
       
        @media screen and (max-width: 768px){
            width: 100%
        }
    }
    .underHood{
        width: 100%;
        margin: 20px;
        text-align: center;
        li{
            padding: 5px;
            list-style: none;
            display: inline-flex;
        }


        @media screen and (max-width: 768px){
            width: 100%
        }
    }

`;

export const Section = styled.div `  
    width: 100%;
    display: inline-block;
    padding: 20px 30px;
`;

export const Image = styled.img ` 
    display: inline-block;
    width: 50%;
    max-height: 400px;
    object-fit: contain;
    border-radius: 15px;
`;