import "./App.css";
import Header from './component/Common/Header/Header';
import { BrowserRouter,Route,NavLink } from 'react-router-dom';
import Footer from './component/Common/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
