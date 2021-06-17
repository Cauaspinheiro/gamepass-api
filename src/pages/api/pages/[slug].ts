import { NextApiHandler } from 'next'

import { connectToDatabase } from '../../../database/connection'

const PageDataBySlugRequestHandler: NextApiHandler = async (req, res) => {
  const db = await connectToDatabase()

  const { slug: pageTitle } = req.query

  const pageDataCollection = db.collection('page_data_view')

  try {
    const pageData = await pageDataCollection.findOne({
      title: pageTitle,
    })

    if (!pageData) return res.status(404).json({ error: 'PAGE NOT FOUND' })

    const response = JSON.parse(JSON.stringify(pageData))

    return res.json(response)
  } catch (error) {
    const response = {
      error: 'SOMETHING WENT WRONG',
      details: error.toString(),
    }

    return res.status(500).json(response)
  }
}

export default PageDataBySlugRequestHandler
