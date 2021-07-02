import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

function SearchItem( { book }) {

    const dispatch = useDispatch();

    const title = book.volumeInfo.title;
    const author = book.volumeInfo.authors
    let bookUrl = book.volumeInfo.imageLinks.thumbnail;
    
    const handleClick = () => {
        dispatch({type: 'ADD_BOOK', payload: book})
    }

return (
  
      <div>
        <p> Title: {title}</p>
        <p> {book.volumeInfo.subtitle}</p>
        <p> Author: {author}</p>
        <img src={bookUrl} alt="searched Book results" width="300px"></img>

        <Button variant="contained" onClick={handleClick}>Add to List</Button>
      </div>

  );

    
}

export default SearchItem;