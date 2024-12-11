"use client"; // Ensures the component runs on the client side

import React from 'react';
import { useRouter } from 'next/navigation';

export default function OrderProduct() {
  const router = useRouter(); // Client-side hook for navigation

  const handleClick = () => {
    console.log('Button has been clicked');
    router.push("/"); // Navigate to home page
  };

  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}
