import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media(max-width: 1500px){
            font-size: 75%;
        }
    }

    body {
        background: rgb(30,30,30);
        font-family: 'Roboto', sans-serif;
    }

    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        border-radius: 10px;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        font-family: 'Roboto', sans-serif;
        &:hover{
            transition: 0.5s all ease;
            letter-spacing: 10px;
            background-color: #23d997;
            color: rgb(30,30,30);
        }
    }

    h2{
        font-weight: lighter;
        font-size: 4rem;
    }

    h3{
        color: white;
    }

    h4{
        font-weight: bold;
        font-size: 2rem;
    }

    a{
        font-size: 1.1rem;
    }

    span{
        font-weight: bold;
        color: #23d997;  
    }

    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
    /* img{
        border-radius: 20px;
        width: 500px;
        height: 500px;
    } */
    .sep-line {
    background: #23d997;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
`;

export default GlobalStyle;
