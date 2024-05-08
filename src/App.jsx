import Header from './components/Header'
import './App.css'
import AllArticles from './components/Articles'
import { Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <body className='body'>
      <Header />
      <Routes>
        <Route path="/" element={<AllArticles/>} />
      </Routes>
    
       
    </body>
  )
}

export default App
