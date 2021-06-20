import PageContent from 'domain/page_content'
import GameModel from 'infra/game/game_model'
import GamesListModel from 'infra/games_list/games_list_model'
import BaseModel from 'infra/shared/base_model'

import PageContentRepositoryDTO from './page_content_repository_dto'

export default class PageContentModel extends BaseModel {
  static fromDatabase(data: PageContentRepositoryDTO): PageContent {
    return new PageContent({
      id: data._id,
      title: data.title,
      spotlight: GameModel.fromDatabase(data.spotlight),
      gamesLists: data.games_lists.map((value) =>
        GamesListModel.fromDatabase(value)
      ),
    })
  }
}
