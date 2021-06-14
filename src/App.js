import { Redirect, Route, useHistory } from 'react-router-dom';
import './App.css';
import Email from './components/email';
import Footer from './components/footer';
import Header from './components/header';
import SearchProvider from './contextSearch/searchContex';
import Cart from './features/cart/index';
import Home from './features/home';
import Products from './features/Products';

function App() {
    const history=useHistory();
    history.push('/products');
    return (
        <div className="app">
            <SearchProvider>
                <Header />
                <Route path="/products" component={Products} />
                <Route path="/cart" component={Cart} />
                <Route path="/search" component={Home} exact />
                <Email />
                <Footer />
                <Redirect>Not Found</Redirect>
            </SearchProvider>
        </div>
    );
}

export default App;
