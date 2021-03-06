// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Order from './Order';
import Lista from './Lista';
import UserProfile from './UserProfile';

// import Image from './Image';

class App extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    const users = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      }
    ];

    return (
      <div className="App">
        <h1> Orders recently created </h1>
       <Order order={headphone} />
       <Order order={energyDrink} />    
       <Lista />
       
        {users.map((user, index) => <UserProfile key={ index } user={user} />)}

      </div>
    );
  
}
}

export default App;

// Basta chamar a class, e atribuir à className os objetos disponíveis, assim retornando a class Order.js na tela