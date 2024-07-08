import { useState } from 'react'
import reviews from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
const App = () => {
  const [person, setPerson] = useState(0)
  const { name, job, image, text } = reviews[person]

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length)
    if (randomNumber === person) {
      randomNumber = person + 1
    }
    setPerson(checkNo(randomNumber))
  }

  const checkNo = (number) => {
    if (number >= reviews.length) {
      return 0
    }
    if (number < 0) {
      return reviews.length - 1
    }
    return number
  }

  const nextPerson = () => {
    setPerson((lastIndex) => {
      const newIndex = lastIndex + 1

      return checkNo(newIndex)
    })
  }

  const prevPerson = () => {
    setPerson((lastIndex) => {
      const newIndex = lastIndex - 1

      return checkNo(newIndex)
    })
  }
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
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
        <button className="btn btn-hipster" onClick={randomPerson}>
          Surprise me
        </button>
      </article>
    </main>
  )
}
export default App
