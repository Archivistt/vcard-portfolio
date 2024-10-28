import Sidebar from "./components/Sidebar.jsx"
import Navigation from "./components/Navigation.jsx"
import Displayer from "./components/Displayer.jsx"
import { useState } from "react"

function App() {
  const [ activePage, setActivePage ] = useState('about');

  function handlePageChange(page) {
    setActivePage(page);
  }

  return (
    <>
      <main>
        <Sidebar />
        <div className="main-content">
          <Navigation activePage={activePage} handlePageChange={handlePageChange}/>
          <Displayer activePage={activePage}/>
        </div>
      </main>
    </>
  )
}

export default App