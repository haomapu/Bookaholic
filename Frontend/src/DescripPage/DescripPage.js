import Book from "./BookGeneral/book";
// import Header from "./Header/header";
import Header from "../components/header/Header";
import TopBar from "./Topbar/topbar";
import Comment from "./Comment/comment";
function DescripPage() {
    return (
        <div>
            {/* <TopBar /> */}
            <Header />
            <Book />
            <Comment />
        </div>
    );
}

export default DescripPage;
