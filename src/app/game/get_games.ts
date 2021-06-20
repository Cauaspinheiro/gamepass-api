import Game from 'domain/game'
import GameModel from 'infra/game/game_model'
import GameRepository from 'infra/game/game_repository'

export default async function GetGamesUseCase(): Promise<Game[]> {
  const data = await GameRepository.findAll()

  const games = data.map((value) => GameModel.fromDatabase(value))

  return games
}
