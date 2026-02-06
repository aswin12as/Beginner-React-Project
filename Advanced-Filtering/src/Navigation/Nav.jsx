import "./Nav.css";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const Nav = ({setFilters}) => {
  const handleSearch = (e) => {
    const value = e.target.value;

    setFilters(prev => ({
      ...prev,search: value
    }));
  };

  return (
    <nav className='nav'>
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearch}
      />
      <div className='icon-container'>
        <a  className='icon' href="#">
          <FaRegHeart/>
        </a>
        <a className='icon' href="#">
         <MdOutlineShoppingCart />
        </a>
        <a className='icon' href="#">
          <FaRegUser />
        </a>
      </div>
    </nav>
  )
}

export default Nav;