import { useDispatch } from 'react-redux';
import { addToCart } from './CartComponent'; // Import the action

const BookComponent = ({ book }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // Dispatch the action to add the book to the cart
    dispatch(addToCart(book));
  };

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};
