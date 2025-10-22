import './App.css'
import { PageHeader } from './components/layout/PageHeader'
import { PageFooter } from './components/layout/PageFooter'
import { CryptoSection } from './components/crypto/CryptoSection'
import { NewsSection } from './components/news/NewsSection'
import { useCryptocurrencies } from './hooks/useCryptocurrencies'
import { useNews } from './hooks/useNews'

function App() {
  const crypto = useCryptocurrencies()
  const news = useNews()

  return (
    <div className="app">
      <PageHeader />
      <main className="main">
        <CryptoSection
          data={crypto.data}
          status={crypto.status}
          error={crypto.error}
          onRetry={crypto.refetch}
        />
        <NewsSection data={news.data} status={news.status} error={news.error} onRetry={news.refetch} />
      </main>
      <PageFooter />
    </div>
  )
}

export default App
