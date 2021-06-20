import React, { FormEvent, useState } from 'react'

import Rating from 'domain/rating'

import Input from './Input'

export interface GameFormData {
  title: string
  logo: string
  trailer: string
  description: string
  rating: string
  rating_reasons: string
  size: string
  publisher: string
}

export interface FormProps {
  handleSubmit(data: GameFormData): void
  ratings: Rating[]
}

const Form: React.FC<FormProps> = (props) => {
  const [title, setTitle] = useState('')
  const [logo, setLogo] = useState('')
  const [trailer, setTrailer] = useState('')
  const [description, setDescription] = useState('')
  const [rating, setRating] = useState(props.ratings[0].id)
  const [reasons, setReasons] = useState('')
  const [size, setSize] = useState('')
  const [publisher, setPublisher] = useState('')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = {
      title,
      logo,
      trailer,
      description,
      rating,
      rating_reasons: reasons,
      size,
      publisher,
    }

    props.handleSubmit(data)
  }

  return (
    <form onSubmit={onSubmit}>
      <Input label="Title" name="title" value={title} onChangeText={setTitle} />

      <Input label="Logo" name="logo" value={logo} onChangeText={setLogo} />

      <Input
        label="Trailer"
        name="trailer"
        value={trailer}
        onChangeText={setTrailer}
      />

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
          {props.ratings.map((value) => (
            <option key={value.id} value={value.id}>
              {value.age}
            </option>
          ))}
        </select>
      </div>

      <Input
        label="Rating Reasons"
        name="rating-reasons"
        value={reasons}
        onChangeText={setReasons}
        placeholder="Separated by ,"
      />

      <Input label="Size" name="size" value={size} onChangeText={setSize} />

      <Input
        label="Publisher"
        name="publisher"
        value={publisher}
        onChangeText={setPublisher}
      />

      <button type="submit">SUBMIT</button>
    </form>
  )
}

export default Form
