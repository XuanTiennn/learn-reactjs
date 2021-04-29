import { Route } from 'react-router-dom';
import Header from './components/header';
import Products from './features/Products';
import './App.css';
function App() {

    return (
        <div className="app">
            <Header />
           <Route path="/products" component={Products} exact />
        </div>
    );
}

export default App;
