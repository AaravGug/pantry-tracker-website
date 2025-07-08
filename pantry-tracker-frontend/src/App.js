import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/message') // or full URL if no proxy
      .then(res => res.json())
      .then(data => {
        console.log("Fetched:", data);
        setMessage(data.message);
      })
      .catch(err => console.error("Fetch error:", err));
  }, []);

  return <h1>{message}</h1>;
}

export default App;
