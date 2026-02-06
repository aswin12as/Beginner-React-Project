import { IoBag } from "react-icons/io5";

const Card = ({item,index}) => {
  return (
    <section className="card" key={index}>
      <img src={item.img} alt="Shoe" />
      <section className='card-details'>
        <h4 className='card-title'>{item.title}</h4>
        <section className="card-review">
          <div className='star-review'>
             {item.star}
             {item.star}
             {item.star}
             {item.star}
          </div>
          <span className='total-review'>{item.reviews}</span>
        </section>
        <section className='card-price'>
          <div className='item-price'>
            <del>{item.prevPrice}</del>{item.newPrice}
          </div>
          <div className='bag'>
            <IoBag  className='bag-icon'/>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Card;
