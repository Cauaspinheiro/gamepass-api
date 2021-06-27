import { NextApiHandler } from 'next'

import GetHomePageContentUseCase from 'app/home_page_content/get_home_page_content'
import HomePageContentView from 'infra/home_page_content/home_page_content_view'

const GetHomePageContentRequestHandler: NextApiHandler = async (req, res) => {
  const data = await GetHomePageContentUseCase()

  const json = HomePageContentView.toJSON(data)

  return res.json(json)
}

export default GetHomePageContentRequestHandler
