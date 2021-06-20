import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { FC } from 'react'

import GetRatingsUseCase from '../app/rating/get_ratings'
import Form, { GameFormData } from '../components/Form'
import CreateGameDTO from 'app/game/create_game_dto'
import Rating from 'domain/rating'

export interface HomePageProps {
  ratings: Rating[]
}

const HomePage: FC<HomePageProps> = (props) => {
  const router = useRouter()

  const handleSubmit = async (data: GameFormData) => {
    const ratingsReasons = data.rating_reasons
      .split(',')
      .map((value) => value.trim())

    const requestData: CreateGameDTO = {
      ...data,
      rating_reasons: ratingsReasons,
      rating_id: data.rating,
    }

    const response = await fetch('http://localhost:3000/api/games', {
      method: 'POST',
      body: JSON.stringify(requestData),
    })

    if (response.status >= 500) {
      return alert(await response.text())
    }

    const { id } = await response.json()

    router.replace(`api/games/${id}`)
  }

  return (
    <div className="container">
      <h1>Gamepass Game Form</h1>

      <Form handleSubmit={handleSubmit} ratings={props.ratings} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const ratings = await GetRatingsUseCase()

  return {
    props: {
      ratings: JSON.parse(JSON.stringify(ratings)),
    },
  }
}

export default HomePage
