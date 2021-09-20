import './App.css';
import { BrowserRouter,Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu  from './Components/NavMenu/NavMenu';
import CartWidget from './Components/NavMenu/CartWidget';
import  {ItemListContainer}  from './Components/Cards/ItemListContainer';
import  ItemDetailContainer  from './Components/Cards/ItemDetailContainer';
import  Cart  from './Components/Cart/Cart';

function App() {
  const onAdd = (cantidad) =>{
    console.log(cantidad)
  }


  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      
      <NavMenu categorias={["Alimento", "Higiene", "Accesorios", "Especiales"]}>
      <CartWidget/>
      </NavMenu>
      </header>
      <Switch exact path='/'>
      <Route>
      <ItemListContainer mensaje={"Bienvenidx a la Mascotienda"} >
      
      </ItemListContainer>
      </Route>

      <Route exact path='/categoria/:Categoria' component={ItemListContainer} />

      <Route exact path='/detalle/:id' component={ItemDetailContainer}/>

      <Route exact path='/cart' component={Cart}/>
      
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
