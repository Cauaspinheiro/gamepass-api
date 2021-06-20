import GameModel from 'infra/game/game_model'
import GameRepository from 'infra/game/game_repository'

import CreateGameDTO from './create_game_dto'

export default async function CreateGameUseCase(
  game: CreateGameDTO
): Promise<string> {
  const data = GameModel.toDatabase(game)

  const id = await GameRepository.create(data)

  return id
}
