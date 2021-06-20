import PageContent from 'domain/page_content'
import PageContentModel from 'infra/page_content/page_content_model'
import PageContentRepository from 'infra/page_content/page_content_repository'

export default async function GetPageContentByTitleUseCase(
  title: string
): Promise<PageContent> {
  const data = await PageContentRepository.findByTitle(title)

  const pageContent = PageContentModel.fromDatabase(data)

  return pageContent
}
