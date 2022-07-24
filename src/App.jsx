import React, {useState, useEffect} from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox/QuoteBox';
import Title from './components/Title/Title'
const url = "https://inspirational-quotes-api.herokuapp.com/quotes"


function App() {
 const [allQuotes, setAllQuotes] = useState(null);
 const [num, setNum] = useState(0)
  

useEffect(() => {
  fetch(url).then(res => {return res.json()}).then(data => {setAllQuotes(data)})
}, [])

const getRandomIndex = (max) => 
  Math.round(Math.random() * ((allQuotes.length-1) - 0) + 0);

const handleNewQuote = () => {
    setNum(getRandomIndex())
}

const ShowContent = () => {
    return(
      <div id="content">
      <Title />
      {allQuotes && <QuoteBox newquote={allQuotes[num].quote} 
              newauthor={allQuotes[num].source} 
              newlink={allQuotes[num].link}
              quoteFunction={handleNewQuote} 
      />
      }</div>)
}

return (
    <div className="container">
      <ShowContent />
    </div>
  );
      
}

export default App;