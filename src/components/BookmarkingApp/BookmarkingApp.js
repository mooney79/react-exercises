/*

bookmarking app
    reqs: save URLS.  Form with URL, title, and tag.  List of all URLS. At top
    of list, a nav based on tags.  When you click on tag, it will filter urls
    by that tag.
    tags: all, humor, by language?

   
  
- d) Create a bookmarking app where you can save URLs to localStorage. It should
  have a form where you enter the URL, a title, and a "tag". There should be a list
  of all the URLs, as well as a list of all the tags (this should be generated
  dynamically). When you click on a tag, the link list should show only those tags.
  Hint: which tag is selected is "application state".

*/

import {useState} from 'react';
import { useEffect } from 'react';
import BookmarkForm from './BookmarkForm';
import BookmarkNav from './BookmarkNav';
import BookmarkList from './BookmarkList';

function BookmarkingApp(props){
  const [selection, setSelection] = useState('all');
  const [bookmarks, setBookmarks] = useState([{}]);

  useEffect(() => {
    setBookmarks([
      {
        URL: "www.funny.com",
        title: "Funny page",
        tag: "funny",
      }, {
        URL: "www.info.com",
        title: "Informative page",
        tag: "news",
      }, {
        URL: "www.evenfunnier.com",
        title: "More Funny page",
        tag: "funny",
      },
    ])
  }, []);

  return(
    <>
    <BookmarkForm bookmarks={bookmarks} setBookmarks={setBookmarks}/>
    <BookmarkNav bookmarks={bookmarks} selection={selection} setSelection={setSelection}/>
    <BookmarkList bookmarks={bookmarks} selection={selection} />
    </>
  )
}

export default BookmarkingApp;