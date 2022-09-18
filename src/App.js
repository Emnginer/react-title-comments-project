import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Post from './Components/Post/Post';
import PostDetail from "./Components/PostDetail/PostDetail";
import PostImages from "./Components/PostImages/PostImages";

function App() {
  return (
    <div>

 
     <BrowserRouter>
     <Routes>
          
         <Route path="/" element={<Post/>}></Route>
         <Route path="/post/:id" element={<PostDetail />}></Route>
         <Route path="/img" element={<PostImages/>}></Route>
           
     </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
