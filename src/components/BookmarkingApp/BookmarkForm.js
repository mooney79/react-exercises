import BookMark from "./BookMark";
import {useState} from 'react';

function BookmarkForm(props){

   const [URL, setURL] = useState('');
   const [title, setTitle] = useState('');
   const [tag, setTag] = useState('');
   
   function handleURLChange(event){
      setURL(event.target.value);
    }
  
    function handleTitleChange(event){
      setTitle(event.target.value);
    }

    function handleTagChange(event){
      setTag(event.target.value);
    }
  
    function handleSubmit(event){
      event.preventDefault();
      const newBookmark = {URL, title, tag};
      const updateBookmarks = [...props.bookmarks, newBookmark];
      props.setBookmarks(updateBookmarks);
      const storeBookmarks = JSON.stringify(props.bookmarks);
      localStorage.setItem("bookmarks", storeBookmarks);
      //Console test lines to see if written to storage:   
      // const test3 = localStorage.getItem("bookmarks");
      // console.log(test3)
    }

   return(
     <>
     <form onSubmit={handleSubmit}>
          <input name="URL" type="text" id="URL" value={URL} onChange={handleURLChange} autoComplete="off" placeholder="Link URL:"/>
          <input name="title" type="text" id="title" value={title} onChange={handleTitleChange} autoComplete="off" placeholder="Title"/>
          <input name="tag" type="text" id="tag" value={tag} onChange={handleTagChange} autoComplete="off" placeholder="Bookmark Tag"/>
          <button type="submit">Add Bookmark</button>
    </form>
   
     </>
   )
 }
 
 export default BookmarkForm;
