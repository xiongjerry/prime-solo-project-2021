function SearchItem( { book }) {

    const title = book.volumeInfo.title;
    const author = book.volumeInfo.authors
    let bookUrl = book.volumeInfo.imageLinks.thumbnail;
    
return (
  
      <div>
        <p> Title: {title}</p>
        <p> {book.volumeInfo.subtitle}</p>
        <p> Author: {author}</p>
        <img src={bookUrl} alt="searched Book results" width="300px"></img>
      </div>

  );

    
}

export default SearchItem;