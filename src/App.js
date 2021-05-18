import { Redirect, Route } from 'react-router-dom';
import Header from './components/header';
import Products from './features/Products';
import './App.css';
import Cart from './features/cart/index';
import Email from './components/email';
import Footer from './components/footer';
import Home from './features/home';

function App() {

    return (
        <div className="app">
            <Header />
           <Route path="/products" component={Products}  />
           <Route path="/cart" component={Cart}  />
           <Route path="/" component={Home}  />
           <Email/>
           <Footer/>
           <Redirect>Not Found</Redirect>
        </div>
    );
}

export default App;
