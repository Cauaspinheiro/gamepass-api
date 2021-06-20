import PageContent from 'domain/page_content'
import PageContentModel from 'infra/page_content/page_content_model'
import PageContentRepository from 'infra/page_content/page_content_repository'

export default async function GetPagesContentsUseCase(): Promise<
  PageContent[]
> {
  const data = await PageContentRepository.findAll()

  const pagesContents = data.map((value) =>
    PageContentModel.fromDatabase(value)
  )

  return pagesContents
}
