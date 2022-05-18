import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';

function App() {

  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (gun) => {
    const newCart = [...cart, gun];
    setCart(newCart)
  }
console.log(cart)
  

  useEffect(() => {
    fetch ('data.json')
    .then(res => res.json())
    .then(data => setGuns(data))
  }, [])

  
  return (
    <div className="App">
      <Navbar></Navbar>
      <div>
        {
          cart.map((item) => (<p key={item.id}>{item.name}</p>))
        }
      </div>
      <div className="card-container">
        {
          guns.map(gun => <Card
            key={gun.id}
            gun={gun}
            handleAddToCart={handleAddToCart}
          ></Card>)
        }
      </div>
      
    </div>
  );
}

export default App;
