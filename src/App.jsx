import Banner from "./components/banner"
import Layout from "./layouts/layout"
import Animation from "./animations/Animation"
import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import BlogPage from "./pages/BlogPage"
import ScrollToTop from "./Scrolled/ScrollToTop"

function App() {
 

  return (
    <Layout>
      <Animation>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace/>}/>
            <Route path="/home" element={<HomePage />}/>
            <Route path="/blog" element={<BlogPage />}/> 
          </Routes>
      </Animation>
    </Layout>

  )
}

export default App
