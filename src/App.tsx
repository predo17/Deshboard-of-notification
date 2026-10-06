import { Routes, Route, useLocation} from "react-router-dom"
import NewsPage from "./page/NewsPage"
import NewsPageDatails from "./page/NewsPageDatails"
import { useEffect } from "react"

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <>
      <Routes>
        <Route path="/" element={<NewsPage />}/>
        <Route path="/details/:title" element={<NewsPageDatails/>}/>
      </Routes>
    </>
  )
}

export default App
