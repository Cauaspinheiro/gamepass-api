import SpotlightCollection from 'domain/spotlight_collection'
import SpotlightView from 'infra/spotlight/spotlight_view'

import SpotlightCollectionViewDTO from './dto/spotlight_collection_view_dto'

export default class SpotlightCollectionView {
  static toJSON(
    spotlightCollection: SpotlightCollection
  ): SpotlightCollectionViewDTO {
    return {
      id: spotlightCollection.id,
      title: spotlightCollection.title,
      games: spotlightCollection.games.map((value) =>
        SpotlightView.toJSON(value)
      ),
    }
  }
}
