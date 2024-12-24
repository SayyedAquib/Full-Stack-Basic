import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        console.log(response);
        setJokes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>Jokes: {jokes.length}</h1>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.joke}</h3>
        </div>
      ))}
    </>
  );
}

export default App;
