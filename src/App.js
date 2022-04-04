import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme';
import { InsuranceProvider } from './context/InsuranceContext';
import Home from "./components/Home"

function App() {
  return (  
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <InsuranceProvider>
        <Home />
      </InsuranceProvider>
    </ThemeProvider>
  );
}

export default App;
