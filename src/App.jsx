import Banner from "./components/banner"
import Layout from "./layouts/layout"
import Animation from "./animations/Animation"
import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"

function App() {
 

  return (
    <Layout>
      <Animation>
        <Routes>
        <Route path="/" element={<Navigate to="/home" replace/>}/>
          <Route path="/home" element={<HomePage />}/>
        </Routes>
      </Animation>
    </Layout>

  )
}

export default App
