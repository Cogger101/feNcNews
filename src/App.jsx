import './App.css'
import AllArticles from './components/Articles'
import { Routes, Route } from 'react-router-dom';
import SingleArticle from './components/SingleArticle'
import Home from './components/Home';
import Comments from './components/Comments';
import { Toggle } from "./components/Toggle";
import { useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(true)

  return (
    <>
      <div className='darkLightMode'
        data-theme={isDark ? "dark" : "light"}>
        <Toggle

          isChekced={isDark}
          handleChange={() => setIsDark(!isDark)}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<AllArticles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/articles/:article_id/comments" element={<Comments />} />
        </Routes>
      </div>
    </>
  )
}

export default App
