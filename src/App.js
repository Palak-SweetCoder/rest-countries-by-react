import './App.css';
import Countries from './components/countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='container'>
      <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
    </div>
  );
}

export default App;
