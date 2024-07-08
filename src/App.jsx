import { useState } from 'react';
import reviews from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
const App = () => {
  const [person, setPerson] = useState(0);
 const {name,job,image,text}= reviews[person]



 const randomPerson = () =>{
 let randomNumber = Math.floor(Math.random() * reviews.length)
 if (randomNumber === person){
  randomNumber = person + 1
 }
 const newIndex = randomNumber % reviews.length
setPerson(newIndex)
 }

 

 const nextPerson = () =>{
   setPerson((lastIndex) => {
   const newIndex = (lastIndex + 1) % reviews.length;
    return newIndex;
   })
 }

 const prevPerson = () => {
   setPerson((lastIndex) => {
     const newIndex =( lastIndex - 1 + reviews.length) % reviews.length
      
     return newIndex 
   })
 }
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img"  />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>Surprise me</button>
      </article>
    </main>
  )

  
};
export default App;
