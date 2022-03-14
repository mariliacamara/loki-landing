import { createGlobalStyle } from 'styled-components';
import Content from './containers/Content';

const GlobalStyles = createGlobalStyle`
  html {
    --yellow: #FFA800;
    --blue: #0072D2;
    --white: #fff;
    --dark: #131318;
    --font-loki: 'B612', sans-serif;
    --font-open: 'Open Sans', sans-serif;
  }
`;

function App() {
  return (
    <main className="App">
      <GlobalStyles />
      <Content />
    </main>
  );
}

export default App;
