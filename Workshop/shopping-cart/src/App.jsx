// import logo from './logo.svg';
import React from 'react';
// import './App.css';
import ProductItem from './ProductItem';

function App() {
    let products = [
      { name: 'Milk', cost: 5, imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Oat_milk_glass_and_bottles.jpg' },
      { name: 'Bread', cost: 10, imgUrl: 'https://assets.bonappetit.com/photos/5c62e4a3e81bbf522a9579ce/5:4/w_2815,h_2252,c_limit/milk-bread.jpg' },
      { name: 'Eggs', cost: 15, imgUrl: 'https://img.taste.com.au/oI-2zjyU/taste/2007/04/eggs-182316-1.jpg' },
    ];

    const handleOnClick = (event) => {
      console.log('Clicked');
    }

    return (
      <div className="App">
        <header className="App-header">
           Hello React {products.map((p, index) => (
              <ProductItem
                key={index}
                imgUrl={p.imgUrl}
                name={p.name}
                cost={p.cost}
                handleOnClick={handleOnClick}
                />
           ))}
        </header>
      </div>
    );
}

// function App() {
//   // let name = 'Jostradamus';
//   return (
//     <div className="App">
//       let name = 'Jostradamus'
//       <header className="App-header">
//       {/* Hello {name} */}

//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
