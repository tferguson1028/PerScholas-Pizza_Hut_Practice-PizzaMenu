import logo from './logo.svg';

import './App.css';
import "./styles/Header_FooterStyle.css";

import PizzaMenu from './components/menu_pizza/PizzaMenu';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{padding: "0 12%"}}>
        <PizzaMenu />
      </div>
      <Footer />
    </div>
  );
}

export default App;
