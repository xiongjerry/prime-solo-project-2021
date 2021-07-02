function SearchItem( { book }) {

    const title = book.volumeInfo.title;
    const bookUrl = book.volumeInfo.imageLinks.thumbnail

    
return (
  
      <div>
        <p> Title: {title}</p>
        <p> {book.volumeInfo.subtitle} </p>
        <img src={bookUrl} alt="searched Book results" width="360px"></img>
      </div>

  );

    
}

export default SearchItem;