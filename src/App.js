import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Shop } from './pages/Shop/Shop';
import { Contact } from './pages/Contact';
import { Cart } from './pages/Cart/Cart';
import { ShopContextProvider } from './context/ShopContext';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element= {<Shop/>}> </Route>
          <Route path = '/Contact' element={<Contact/>}></Route>
          <Route path='/Cart' element={<Cart/>}></Route>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
