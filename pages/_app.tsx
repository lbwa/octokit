import { AppProps } from 'next/app'
import '../styles/globals.css'

const App: React.FC<AppProps> = function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default App
