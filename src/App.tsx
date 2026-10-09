import { Routes, Route, useLocation} from "react-router-dom"
import NewsPage from "./page/NewsPage"
import NewsPageDatails from "./page/NewsPageDatails"
import { useEffect, useState } from "react"
import Header from "./layout/Header"
import Sidebar from "./components/Sidebar"

function App() {
  const location = useLocation()

  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false)
  const toggleSidebarOpen = () => setIsSidebarOpen(!isSidebarOpen)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <>
    <Header toggleSidebar={toggleSidebarOpen} />
    <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebarOpen} />

      <Routes>
        <Route path="/" element={<NewsPage />}/>
        <Route path="/details/:title" element={<NewsPageDatails/>}/>
      </Routes>
    </>
  )
}

export default App
