import { FC } from 'react'

import Form, { GameData } from '../components/Form'

const HomePage: FC = () => {
  const handleSubmit = (data: GameData) => {
    console.log(data)
  }

  return (
    <div className="container">
      <h1>Gamepass Game Form</h1>

      <Form handleSubmit={handleSubmit} />
    </div>
  )
}

export default HomePage
