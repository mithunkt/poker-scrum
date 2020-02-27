import React, {useState} from 'react';
import './App.css';
const cardData = [0,0.5,1,2,3,5,8,13,20,40,100,'?','infinity']

function App() {
  const [selectedCard, setSelectedCard] = useState(null)
  const [showCard, setShowCard] = useState(false)
  const handleSelect = (e) => {
    setSelectedCard(e.target.id)
    setShowCard(true)
  }
  const handleClose = (e) => {
    setSelectedCard(null)
    setShowCard(false)
  }
  const getText = (id) => {
    if(id === 'infinity') return <>&infin;</>
    if(parseFloat(id) === 0.5) return <>&#189;</>
    return id
  }
  return (
    <div className="App">
      <header className="App-header">
        Poker Scrum
      </header>
      <section className="card-container">
        {cardData.map((item) => (
          <div className="card" id={item} key={item} onClick={handleSelect}>{getText(item)}</div>
        ))}
      </section>
      {showCard && (
        <section className="card-selected" onClick={handleClose}>
          <span>{getText(selectedCard)}</span>
        </section>
      )}
    </div>
  );
}

export default App;
