import { useState, useEffect } from 'react';

function BlogPostForm(props){

  const [posts, setPosts] = useState([{}]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  
  function handleSubmit(event){
    event.preventDefault();
    const newBlog = {title, body};
    const updatePosts = [...posts, newBlog];
    setPosts(updatePosts);
    // const storePosts = JSON.stringify(posts);
    // localStorage.setItem("blogposts", storePosts);
    //Console test lines to see if written to storage:   
    // const test = localStorage.getItem("blogposts");
    // console.log(test)
  }

  function handleTitleChange(event){
    setTitle(event.target.value);
  }

  function handleBodyChange(event){
    setBody(event.target.value);
  }

  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  },[posts]);

  return(
    <form onSubmit={handleSubmit}>
          <h2>Enter your Blog Stuff below:</h2>
          <input name="title" type="text" id="title" value={title} onChange={handleTitleChange} autoComplete="off" placeholder="Title"/>
          <input name="body" type="text" id="body" value={body} onChange={handleBodyChange} autoComplete="off" placeholder="Body"/>
          <button type="submit">Submit Post</button>
    </form>
  )
}

export default BlogPostForm;

