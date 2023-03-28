import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Content from './components/layout/Content/Content';
import HomePage from './views/Home';
import { StateAppProvider } from './providers/stateApp'

function App() {
  return (
    <div data-testid="app" className="App">
      <StateAppProvider>
        <Header />
        <Content>
          <HomePage />
        </Content>
        <Footer />
      </StateAppProvider>
    </div>
  );
}

export default App;
