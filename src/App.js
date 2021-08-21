import React from 'react';
import {Provider} from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Home from './pages/Home';
import {Reset} from 'styled-reset';
import '@material/react-text-field/dist/text-field.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App(){

  return( 
 
  
  <ThemeProvider theme={theme}>
<Reset />
<Home />
  </ThemeProvider> 
  )
 
}

export default App;