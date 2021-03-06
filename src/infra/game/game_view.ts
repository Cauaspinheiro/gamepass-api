import Game from 'domain/game'

type GameViewExclusions = 'ratingReasons'
export interface GameViewDTO extends Omit<Game, GameViewExclusions> {
  rating_reasons: Array<string>
}

export default class GameView {
  static toJSON(game: Game): GameViewDTO {
    return {
      id: game.id,
      description: game.description,
      logo: game.logo,
      publisher: game.publisher,
      rating: game.rating,
      rating_reasons: game.ratingReasons,
      size: game.size,
      title: game.title,
      trailer: game.trailer,
    }
  }
}
