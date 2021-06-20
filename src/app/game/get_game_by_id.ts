import Game from 'domain/game'
import GameModel from 'infra/game/game_model'
import GameRepository from 'infra/game/game_repository'

export default async function GetGameByIdUseCase(id: string): Promise<Game> {
  const data = await GameRepository.findById(GameModel.toId(id))

  const game = GameModel.fromDatabase(data)

  return game
}
