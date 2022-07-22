import Book from "./BookGeneral/book";
import Header from "./Header/header";
import TopBar from "./Topbar/topbar";
import Comment from "./Comment/comment"
function App() {
  return <div>
    <TopBar />
    <Header />
    <Book />
    <Comment />  
  </div>;
}

export default App;
