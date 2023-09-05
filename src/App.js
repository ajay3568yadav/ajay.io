import logo from './logo.svg';
import Header from './components/Header';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Work from './components/Work';
import Block from './components/Block';
import Honors from './components/Honors'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Cards/>
      <div class="component">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f0f0f0" fill-opacity="1" d="M0,160L48,165.3C96,171,192,181,288,176C384,171,480,149,576,154.7C672,160,768,192,864,192C960,192,1056,160,1152,133.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
    <Work/>
    <Block/>
    <Honors/>
    <Footer/>
    </div>
  );
}

export default App;
