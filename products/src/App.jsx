import { useState } from "react";

import './App.css'
import ProductItems from './ProductItems';
function App() {
  // const [count, setCount] = useState(0)
  

  const products = [
    { Name: "Burger",      price: "$12",      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDcH_MxdsTsK6KMVon-Ybfa2WiT-R70ZjWw&s"
    },
    {
      Name: "Chocolate Coffe", price: "$10", img: "https://static.toiimg.com/thumb/54661662.cms?width=573&height=382" 
      
    },
    {
      Name: "Baked Momos", price: "$9", img: "https://www.pizzahutbd.com/attached_images/popupImage/1713688606.jpg" 
      
    },
    {
      Name: "Juss", price: "$15", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC5rE3S2bc3SEFVThvtAba3-d_aF7UKYHggQ&s" 
      
    },
    {
      Name: "Red Bull", price: "$10", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMkvqaSA2Lm62rJu7bQ-X2QudjH3kGqT8ySA&s" 
      
    },
  ];


  return (

    <div>
     

      {products.map((products, index) =>
      (<ProductItems key={index} products={products} 
            />
          ))}

  </div>
  )
}

export default App
