import { GameViewDTO } from 'infra/game/game_view'

export default interface SpotlightViewDTO extends GameViewDTO {
  spotlight_title: string
  spotlight_description: string
  spotlight_cover: string
}
