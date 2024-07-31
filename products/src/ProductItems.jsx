
const ProductItems = ({products}) => {
    const {Name, price, img} = products;

  return (
      <div>
      <img src={img} alt={Name}/>
      <h2>{Name}</h2>
      <p>${price}</p>
    </div>
  )
}

export default ProductItems;