import React from 'react';
import {
  Box,
  Button,
  Stack,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useToast,
} from '@chakra-ui/react';
import { useCart } from '../contextcomponent/CartContext.js'; // Import useCart

const Cart = () => {
  const { cartItems, updateItemQuantity, removeItemFromCart } = useCart();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const toast = useToast();

  const handleCheckout = () => {
    onOpen();
  };

  const handlePlaceOrder = () => {
    onClose();
    toast({
      title: 'Order placed successfully.',
      description: 'Your order has been placed. Thank you for shopping!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const getTotalAmount = () => {
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const shippingFee = 50; // Delivery fee
    const platformFee = 8; // Platform fee
    return totalPrice + shippingFee + platformFee;
  };

  return (
    <Box>
      <Stack spacing={4} p={4}>
        <Text fontSize="2xl" fontWeight="bold">My Cart</Text>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <Box key={item.id} borderWidth={1} p={4} borderRadius="md">
              <Text>{item.name}</Text>
              <Text>₹ {item.price}/kg</Text>
              <NumberInput
                min={1}
                max={5}
                value={item.quantity}
                onChange={(value) => updateItemQuantity(item.id, value)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Button
                mt={4}
                colorScheme="red"
                onClick={() => removeItemFromCart(item.id)}
              >
                Remove
              </Button>
            </Box>
          ))
        ) : (
          <Text>Your cart is empty.</Text>
        )}
        {cartItems.length > 0 && (
          <>
            <Text fontSize="lg" fontWeight="bold">
              Subtotal: ₹ {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
            </Text>
            <Text>Delivery Fee: ₹ 50</Text>
            <Text>Platform Fee: ₹ 8</Text>
            <Text fontSize="lg" fontWeight="bold">
              Total: ₹ {getTotalAmount()}
            </Text>
            <Button mt={4} colorScheme="blue" onClick={handleCheckout}>
              Checkout
            </Button>
          </>
        )}
      </Stack>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Confirm Order
            </AlertDialogHeader>
            <AlertDialogBody>
              Order once placed cannot be canceled. Are you sure you want to proceed?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" onClick={handlePlaceOrder} ml={3}>
                Place Order
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default Cart;
