import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { FC } from 'react'

import Form from '../components/Form'
import { Game } from '../entities/game'
import { Rating } from '../entities/rating'
import GetRatingsUseCase from '../use-cases/rating/get_ratings'

export interface HomePageProps {
  ratings: Rating[]
}

const HomePage: FC<HomePageProps> = (props) => {
  const router = useRouter()

  const handleSubmit = async (data: Game) => {
    const ratingsReasons = data.rating_reasons.split(', ').join(',').split(',')

    const requestData = { ...data, rating_reasons: ratingsReasons }

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
