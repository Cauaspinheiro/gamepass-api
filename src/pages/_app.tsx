import { AppProps } from 'next/app'
import { FC } from 'react'

import '../styles/styles.css'

const App: FC<AppProps> = ({ pageProps, Component }) => {
  return <Component {...pageProps} />
}

export default App
