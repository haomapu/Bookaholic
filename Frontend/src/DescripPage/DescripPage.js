import Book from "./BookGeneral/book";
import Header from "../components/header/Header";
import Comment from "./Comment/comment";
import Recommend from "./recommend/Recommend";


function DescripPage() {
    return (
        <div>
            <Header />
            <Book />
            <Recommend />
            <Comment />
        </div>
    );
}

export default DescripPage;
