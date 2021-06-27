import SpotlightCollection from 'domain/spotlight_collection'
import SpotlightCollectionModel from 'infra/spotlight_collection/spotlight_collection_model'
import SpotlightCollectionRepository from 'infra/spotlight_collection/spotlight_collection_repository'

export default async function GetSpotLightCollectionsUseCase(): Promise<
  SpotlightCollection[]
> {
  const data = await SpotlightCollectionRepository.findAll()

  const collections = data.map((value) =>
    SpotlightCollectionModel.fromDatabase(value)
  )

  return collections
}
