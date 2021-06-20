import { NextApiHandler } from 'next'

import GetPageContentByTitleUseCase from 'app/page_content/get_page_content_by_title'
import PageContentView from 'infra/page_content/page_content_view'

const PageContentByTitleRequestHandler: NextApiHandler = async (req, res) => {
  const pageContent = await GetPageContentByTitleUseCase(
    req.query.title.toString()
  )

  const response = PageContentView.toJSON(pageContent)

  return res.json(response)
}

export default PageContentByTitleRequestHandler
