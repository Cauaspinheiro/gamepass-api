import HomePageContent from 'domain/home_page_content'
import HomePageContentModel from 'infra/home_page_content/home_page_content_model'
import HomePageContentRepository from 'infra/home_page_content/home_page_content_repository'

export default async function GetHomePageContentUseCase(): Promise<HomePageContent> {
  const data = await HomePageContentRepository.getHomePageContent()

  const homePageContent = HomePageContentModel.fromDatabase(data)

  return homePageContent
}
