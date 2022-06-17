import './App.css';
import Menu from './component/Menu';
import HomeContent from './component/home/Content';
import ShopContent from './component/shop/Content';
import BlogsContent from './component/blogs/Content';
import AboutContent from './component/about/Content';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/shop" element={<ShopContent />} />
          <Route path="/about" element={<AboutContent />} />
          <Route path="/blogs" element={<BlogsContent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
