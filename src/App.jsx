import React from 'react'
import Footer from './Footer'


import { BrowserRouter,Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>

        
<BrowserRouter>

<Routes>
      <Route path="/" element={<Footer/>} />
      

      

    

      {/* Add other routes as needed */}
    </Routes>
</BrowserRouter>
    
    </div>
  )
}

export default App