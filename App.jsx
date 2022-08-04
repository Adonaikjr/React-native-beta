import { Log} from './src/pages/Log';
import { ThemeProvider } from 'styled-components'

import theme from './src/style/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
         <Log/>
    </ThemeProvider>
  );
}

