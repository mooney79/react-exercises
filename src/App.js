import {useState} from 'react';
import './App.css'

import BlogPostForm from './components/BlogPostForm/BlogPostForm';
import BlogApp from './components/BlogApp/BlogApp';
import BlogReader from './components/BlogReader/BlogReader';
import BookmarkingApp from './components/BookmarkingApp/BookmarkingApp';
import ContactForm from './components/ContactForm/ContactForm';



function App() {
  const [selection, setSelection] = useState('blogForm');

  let html;
  if (selection === 'blogForm') {
    html = <BlogPostForm />
  } else if (selection === 'blogApp') {
    html = <BlogApp />
  } else if (selection === 'blogReader') {
    html = <BlogReader />
  } else if (selection === 'bookmark') {
    html = <BookmarkingApp />
  } else if (selection === 'contactForm') {
    html = <ContactForm />
  } 


  return (

    <div className="App">
      <header> 
        <button type="button" onClick={() => setSelection('blogForm')}> Blog Form</button>
        <button type="button" onClick={() => setSelection('contactForm')}> Contact Form</button>
        <button type="button" onClick={() => setSelection('blogReader')}> Blog Reader</button>
        <button type="button" onClick={() => setSelection('bookmark')}> Bookmarking App</button>
        <button type="button" onClick={() => setSelection('blogApp')}> Blog App</button>
      </header>
      
      {html}
    </div>
  );
}

export default App;
