import { ThemeProvider } from 'styled-components';
import './App.css';
import GlobalStyle from './global/globalStyle';
import theme from './global/theme';
import AnimalsContainer from './docs/expert/AnimalsContainer';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AnimalsContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
