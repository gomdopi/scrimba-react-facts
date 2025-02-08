import { createRoot } from "react-dom/client"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"

const root = createRoot(document.getElementById("root")!)

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

root.render(<Page />)
