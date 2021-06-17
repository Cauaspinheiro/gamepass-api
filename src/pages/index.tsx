import { FC, FormEvent, useState } from 'react'

const HomePage: FC = () => {
  const [title, setTitle] = useState('')
  const [logo, setLogo] = useState('')
  const [trailer, setTrailer] = useState('')
  const [description, setDescription] = useState('')
  const [rating, setRating] = useState('L')
  const [reasons, setReasons] = useState('')
  const [size, setSize] = useState('')
  const [publisher, setPublisher] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = {
      title,
      logo,
      trailer,
      description,
      rating,
      reasons,
      size,
      publisher,
    }

    console.log(data)
  }

  return (
    <div className="container">
      <h1>Gamepass Game Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>

          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="input-container">
          <label htmlFor="logo">Logo</label>

          <input
            type="text"
            name="logo"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
          />
        </div>

        <div className="input-container">
          <label htmlFor="trailer">Trailer</label>

          <input
            type="text"
            name="trailer"
            value={trailer}
            onChange={(e) => setTrailer(e.target.value)}
          />
        </div>

        <div className="input-container">
          <label htmlFor="description">Description</label>

          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="input-container">
          <label htmlFor="rating">Age Rating</label>

          <select
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="L">L</option>
            <option value="18">18</option>
          </select>
        </div>

        <div className="input-container">
          <label htmlFor="rating-reasons">Rating Reasons</label>

          <input
            type="text"
            name="rating-reasons"
            placeholder="Separated by ,"
            value={reasons}
            onChange={(e) => setReasons(e.target.value)}
          />
        </div>

        <div className="input-container">
          <label htmlFor="size">Size</label>
          <input
            type="text"
            name="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </div>

        <div className="input-container">
          <label htmlFor="publisher">Publisher</label>

          <input
            type="text"
            name="publisher"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
          />
        </div>

        <button type="submit">ENVIAR</button>
      </form>
    </div>
  )
}

export default HomePage
