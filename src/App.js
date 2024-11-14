import { ThemeProvider } from 'styled-components';
import './App.css';
import GlobalStyle from './global/globalStyle';
import theme from './global/theme';
import { RouterProvider } from 'react-router-dom';
import router from './routes/route';

function App() {
  return (
    <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={router}/>
        </ThemeProvider>
    </>
  );
}

export default App;
