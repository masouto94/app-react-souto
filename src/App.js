import './App.css';
import NavMenu  from './Components/NavMenu/NavMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './Components/NavMenu/CartWidget';
import ItemListContainer from './Components/NavMenu/ItemListContainer';
import { Cards } from './Components/NavMenu/Cards/Cards';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <NavMenu categorias={["Alimento", "Higiene", "Accesorios", "Especiales"]}>
      <CartWidget/>
      </NavMenu>
      </header>
      <ItemListContainer mensaje={"Bienvenidx a la Mascotienda"}>
      <Cards/>
      </ItemListContainer>
    </div>
  );
}

export default App;
