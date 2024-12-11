"use client"
import { useRouter } from 'next/router';

function Docs() {
  const router = useRouter(); // Corrected: Declare Router before destructuring `query`
  const { params } = router.query; // Extract params from router.query

  console.log(params);

  return (
    <h1>Docs Home Page</h1> // Ensure the JSX is returned correctly
  );
}

export default Docs;
