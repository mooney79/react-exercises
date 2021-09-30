/*

blog-reading app
    reqs: list out blog posts on the right(titles).  When one is clicked on, that 
    post loads in the rest of the screen.  Can hard-code static data. No need to 
    use local storage

  

- c) Create a "blog reading app", where you have a list of blog posts (static data)
  on the side and when you click on a post title, it opens that post on the right.
  Hint: which blog post is selected is "application state".

 

- 
*/
import {useState} from 'react';
import Article1 from './Article1';
import Article2 from './Article2';
import Article3 from './Article3';
import Article4 from './Article4';
import SideBar from './SideBar';

function BlogReader(props){
  const [selection, setSelection] = useState('article1');

  let html;
  if (selection === 'article1') {
    html = <Article1 />
  } else if (selection === 'article2') {
    html = <Article2 />
  } else if (selection === 'article3') {
    html = <Article3 />
  } else if (selection === 'article4') {
    html = <Article4 />
  }  
  

  return(
    <>
      <SideBar setSelection={setSelection} />
      {html}
    </>
  )
}

export default BlogReader;
