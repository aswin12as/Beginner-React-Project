import "./Products.css";
import Card from '../components/Card';

const Products = ({items}) => {
  
  return (
    <>
      <section className="card-container">
        {items.map((item,index) => (
          <Card item={item} index={index}/>
        ))}
      </section>
    </>
  )
}

export default Products;