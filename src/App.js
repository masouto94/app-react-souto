import './App.css';
import { BrowserRouter,Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu  from './Components/NavMenu/NavMenu';
import CartWidget from './Components/NavMenu/CartWidget';
import  {ItemListContainer}  from './Components/Cards/ItemListContainer';
import  {ItemDetailContainer}  from './Components/Cards/ItemDetailContainer';
import  Cart  from './Components/Cart/Cart';
import CartContextProvider from './Contexts/CartContext'
import {useState} from 'react'


function App() {


  return (
    <CartContextProvider>
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      
      <NavMenu categorias={["Alimento", "Higiene", "Accesorios", "Especiales"]}>
      <CartWidget/>
      </NavMenu>
      </header>
      <Switch  >
      <Route path='/' exact>
      <ItemListContainer mensaje={"Bienvenidx a la Mascotienda"} >
      
      </ItemListContainer>
      </Route>

      <Route   path='/categoria/:Categoria'  component={ItemListContainer} />

      <Route   path='/detalle/:productId' exact component={ItemDetailContainer}/>

      <Route  exact path='/cart'>
      <Cart cartList={cartList}/>
      </Route>
      
      </Switch>
    </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
