import './App.css'
import AllArticles from './components/Articles'
import { Routes, Route } from 'react-router-dom';
import SingleArticle from './components/SingleArticle'

import Home from './components/Home';

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/articles" element={<AllArticles/>} />
        <Route path="/articles/:article_id" element={<SingleArticle/>} />
      </Routes>
      </>
  )
}

export default App
