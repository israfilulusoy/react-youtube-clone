import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./Components/Feed";
import VideoDetail from "./Components/VideoDetail";
import { ContextProvider } from "./Context/contextApi";
import "./styles.css";
import SearchResult from "./Components/SearchResult";

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/video/:videoId' element={<VideoDetail />} />
          <Route path='/watch/:videoId' element={<VideoDetail />} />
          <Route path='/search-result/:query' element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
