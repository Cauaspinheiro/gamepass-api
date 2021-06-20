import PageContent from 'domain/page_content'
import GameView, { GameViewDTO } from 'infra/game/game_view'
import GamesListView, {
  GamesListViewDTO,
} from 'infra/games_list/games_list_view'

export interface PageContentViewDTO {
  id: string
  title: string
  spotlight: GameViewDTO
  games_lists: GamesListViewDTO[]
}

export default class PageContentView {
  static toJSON(data: PageContent): PageContentViewDTO {
    return {
      id: data.id,
      title: data.title,
      spotlight: GameView.toJSON(data.spotlight),
      games_lists: data.gamesLists.map((value) => GamesListView.toJSON(value)),
    }
  }
}
