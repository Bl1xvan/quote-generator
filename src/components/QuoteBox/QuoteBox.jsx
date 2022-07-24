import './QuoteBox.css'

const QuoteBox = ({newquote, newauthor, newlink, quoteFunction}) =>  (
  <>
  <div id="quote-box">
    <div className="half" id="half1">
      <p id="text">{newquote}</p>
    </div>
    <div className="half" id="half2">
      <p id="author">{newauthor}</p>
      {!newlink ? "No link available" : <a id="tweet-quote" href={newlink} target="_blank">{newlink}</a>}
     </div>
    <button id="new-quote" onClick={quoteFunction}>New Quote</button>
    </div>
  </>);

export default QuoteBox