
import styled from "styled-components";

export const Wrapper = styled.div `
    background: var(--darkGrey);
    padding: 0 20px;
    
   
`;

export const Content = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
    color: white;
    text-decoration: none;
    outline:none;
    cursor: pointer;


    .links{
        text-decoration: none;
        color: black;

    }
    .links:hover{
        opacity: 0.8;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
    }

    li {
        float: left;
    }

    li a, .dropdownButton {
        display: inline-block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    li a:hover, .dropdown:hover .dropdownButton {
        background-color: white;
    }

    li.dropdown {
        display: inline-block;
    }

    .dropdownContent {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    .dropdownContent a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
    }

    .dropdownContent a:hover   {
        background-color: #f1f1f1;
    }

    .dropdown:hover .dropdownContent {
        display: block;
    }
    
;
`
