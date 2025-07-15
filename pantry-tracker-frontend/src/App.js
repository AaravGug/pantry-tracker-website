import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/test-db') // or full URL if no proxy
      .then(res => res.json())
      .then(data => {
        console.log("Fetched:", data);
        setMessage(data.ingredient_names || 'No ingredients found');
      })
      .catch(err => console.error("Fetch error:", err));
  }, []);

  return <p>{message}</p>;
}



export default App;
