import HomePageContent from 'domain/home_page_content'
import GameCollectionView from 'infra/game_collection/game_collection_view'
import GameView from 'infra/game/game_view'
import SpotlightCollectionView from 'infra/spotlight_collection/spotlight_collection_view'

import HomePageContentViewDTO from './dto/home_page_content_view_dto'

export default class HomePageContentView {
  static toJSON(homePageContent: HomePageContent): HomePageContentViewDTO {
    const spotlights = SpotlightCollectionView.toJSON(
      homePageContent.spotlights
    )

    const gamesCollections = homePageContent.collections.map((value) =>
      GameCollectionView.toJSON(value)
    )

    const games = homePageContent.games.map((value) => GameView.toJSON(value))

    return {
      spotlights,
      game_collections: gamesCollections,
      games,
    }
  }
}
