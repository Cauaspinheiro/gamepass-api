import Spotlight from 'domain/spotlight'
import GameView from 'infra/game/game_view'

import SpotlightViewDTO from './dto/spotlight_view_dto'

export default class SpotlightView {
  static toJSON(spotlight: Spotlight): SpotlightViewDTO {
    return {
      ...GameView.toJSON(spotlight),
      spotlight_cover: spotlight.spotlightCover,
      spotlight_title: spotlight.spotlightTitle,
      spotlight_description: spotlight.spotlightDescription,
    }
  }
}
