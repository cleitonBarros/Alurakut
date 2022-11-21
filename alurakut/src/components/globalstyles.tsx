import { createGlobalStyle } from 'styled-components'
import {AlurakutStyles} from '../lib/AlurakutCommons'

const GlobalStyle = createGlobalStyle`

  
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background:  #d9e6f6;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
   
  }

  #__next{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img{
    max-width: 100%;
    height: auto;
    display: block;  
  }

  @media(max-width: 860px) {

    img.profileImg {
        
      max-width: 50%;
      margin:0  auto
    }
  }

  ${AlurakutStyles}
`

export default GlobalStyle
