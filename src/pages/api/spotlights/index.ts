import { NextApiHandler } from 'next'

import GetSpotLightCollectionsUseCase from 'app/spotlight_collection/get_spolight_collections'
import SpotlightCollectionView from 'infra/spotlight_collection/spotlight_collection_view'

const GetSpotLightCollectionsRequestHandler: NextApiHandler = async (
  req,
  res
) => {
  const data = await GetSpotLightCollectionsUseCase()

  const response = data.map((value) => SpotlightCollectionView.toJSON(value))

  return res.json(response)
}

export default GetSpotLightCollectionsRequestHandler
