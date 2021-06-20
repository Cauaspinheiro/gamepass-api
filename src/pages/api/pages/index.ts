import { NextApiHandler } from 'next'

import GetPagesContentsUseCase from 'app/page_content/get_pages_contents'
import PageContentView from 'infra/page_content/page_content_view'

const PagesContentsRequestHandler: NextApiHandler = async (_, res) => {
  const pagesContents = await GetPagesContentsUseCase()

  const response = pagesContents.map((value) => PageContentView.toJSON(value))

  return res.json(response)
}

export default PagesContentsRequestHandler
