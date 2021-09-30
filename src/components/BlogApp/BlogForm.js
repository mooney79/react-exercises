import {useState, useEffect} from 'react';

function BlogForm(props) {
    
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        // const newBlogEntry = {title, body};
        props.addBlogEntry(props.counter, title, body);
        setTitle('');
        setBody('');
    }

      function handleTitleChange(event){
        setTitle(event.target.value);
      }
    
      function handleBodyChange(event){
        setBody(event.target.value);
      }
    
    //   useEffect(() => {
    //     localStorage.setItem('blogPosts', JSON.stringify(posts));
    //   },[posts]);

    return(
        <form onSubmit={handleSubmit}>
            <h2>Enter your Blog Stuff below:</h2>
            <input name="title" type="text" id="title" value={title} onChange={handleTitleChange} autoComplete="off" placeholder="Title"/>
            <input name="body" type="text" id="body" value={body} onChange={handleBodyChange} autoComplete="off" placeholder="Body"/>
            <button type="submit">Submit Post</button>
        </form>
    )
}

export default BlogForm;
