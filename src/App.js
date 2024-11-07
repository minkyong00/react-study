import { ThemeProvider } from 'styled-components';
import './App.css';
import GlobalStyle from './global/globalStyle';
import theme from './global/theme';
import ParentContainer from './docs/normal/ParentContainer';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ParentContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
