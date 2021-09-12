import './App.css';
import NavMenu  from './Components/NavMenu/NavMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './Components/NavMenu/CartWidget';
import { ItemListContainer } from './Components/Cards/ItemListContainer';



function App() {
  const onAdd = (cantidad) =>{
    console.log(cantidad)
  }


  return (
    <div className="App">
      <header className="App-header">
      
      <NavMenu categorias={["Alimento", "Higiene", "Accesorios", "Especiales"]}>
      <CartWidget/>
      </NavMenu>
      </header>
      <ItemListContainer mensaje={"Bienvenidx a la Mascotienda"} onAdd={onAdd}>
      
      </ItemListContainer>
    </div>
  );
}

export default App;
