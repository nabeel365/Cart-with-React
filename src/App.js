// import logo from './logo.svg';
import './App.css';
import logo from './images/Logo.svg'
import Shop from './Shop/Shop';

function App() {
  return (
    <div className="App">

      <div className='Apple'>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="nav-title">
        <a href="1">Shop</a>
        <a href="2">Order</a>
        <a href="3">Inventory</a>
        <a href="4">Login</a>
      </div>

      <div>
      </div>

      </div>
      {/* <Product></Product> */}


<div>
<Shop></Shop>

</div>
    



    </div>



  );
}

export default App;
