import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import SushiWallet from "./SushiWallet"

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiArray, setSushiArray] = useState([]);
  const [plates, setPlates] = useState([]);
  const [budget, setBudget] = useState(250);

  useEffect(() => {
    fetch(API)
    .then( res => res.json())
    .then( data => setSushiArray(data))
    .catch( error => console.log(error.message));
  }, [])

  function addEatenSushi (eatenSushi) {
    if (eatenSushi.eaten || eatenSushi.price > budget) {
      return
    }

    const updatedSushiArray = sushiArray.map( sushi => {
      return sushi.id === eatenSushi.id ? {...sushi, eaten: true} : sushi
    })
    setSushiArray(updatedSushiArray);
    setPlates(plates => [...plates, eatenSushi]);
    setBudget(budget => budget - eatenSushi.price);
  }

  return (
    <div className="app">
      <SushiContainer sushiArray={sushiArray} addEatenSushi={addEatenSushi} />
      <SushiWallet setBudget={setBudget} />
      <Table plates={plates} budget={budget}/>
    </div>
  );
}

export default App;
