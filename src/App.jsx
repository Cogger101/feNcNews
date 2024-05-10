import './App.css'
import AllArticles from './components/Articles'
import { Routes, Route } from 'react-router-dom';
import SingleArticle from './components/SingleArticle'

import Home from './components/Home';
import Comments from './components/Comments';

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/articles" element={<AllArticles/>} />
        <Route path="/articles/:article_id" element={<SingleArticle/>} />
        <Route path="/articles/:article_id/comments" element={<Comments/>} />
      </Routes>
      </>
  )
}

export default App
