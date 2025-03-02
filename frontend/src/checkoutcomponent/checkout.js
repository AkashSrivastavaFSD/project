import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext'; // Adjust the path based on your project structure
import { Button, Box, Text, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const navigate = useNavigate();

  // Calculate the total amount
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  // Handle checkout action
  const handleCheckout = () => {
    setIsOrderPlaced(true);
    clearCart();
  };

  return (
    <Box padding="4" maxWidth="600px" margin="auto">
      <Text fontSize="2xl" fontWeight="bold">
        Checkout
      </Text>

      {cart.length === 0 && !isOrderPlaced ? (
        <Text>Your cart is empty.</Text>
      ) : isOrderPlaced ? (
        <Text>Your order has been placed! Once placed, the order cannot be canceled.</Text>
      ) : (
        <>
          {cart.map((item) => (
            <Box key={item.id} borderWidth="1px" borderRadius="lg" padding="4" margin="2" display="flex" alignItems="center">
              <Image src={item.image} boxSize="50px" objectFit="cover" marginRight="4" />
              <Box flex="1">
                <Text fontWeight="bold">{item.name}</Text>
                <Text>₹{item.price}</Text>
              </Box>
              <Button colorScheme="red" onClick={() => removeFromCart(item.id)}>
                Remove
              </Button>
            </Box>
          ))}

          <Box marginTop="4">
            <Text fontSize="lg" fontWeight="bold">
              Total: ₹{calculateTotal()}
            </Text>
            <Button
              colorScheme="green"
              marginTop="4"
              onClick={handleCheckout}
            >
              Place Order
            </Button>
          </Box>
        </>
      )}
      <Button onClick={() => navigate('/user/fruits')} marginTop="4" colorScheme="blue">
        Continue Shopping
      </Button>
    </Box>
  );
}

export default Checkout;
