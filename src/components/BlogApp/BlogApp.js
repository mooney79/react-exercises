import { useState, useEffect } from 'react';

import BlogDisplay from "./BlogDisplay";
import BlogForm from "./BlogForm";

function BlogApp(props){
  const [blogEntries, setBlogEntries] = useState([]);
  const [counter, setCounter] = useState(4);

  useEffect(() => {
    setBlogEntries([
      {
        id: 1,
        title: "Dealing with grief",
        body: "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies. (C.A.R. Hoare) Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter. (Eric Raymond) I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing. (Oktal) True innovation often comes from the small startup who is lean enough to launch a market but lacks the heft to own it. (Timm Martin) Good programmers use their brains, but good guidelines save us having to think out every case. (Francis Glassborow) It’s not a bug – it’s an undocumented feature. (Anonymous) The best thing about a boolean is even if you are wrong, you are only off by a bit. (Anonymous) The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time. (Tom Cargill) Complexity kills. It sucks the life out of developers, it makes products difficult to plan, build and test, it introduces security challenges, and it causes end-user and administrator frustration. (Ray Ozzie) I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing. (Oktal) Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. (Martin Golding) Good programmers use their brains, but good guidelines save us having to think out every case. (Francis Glassborow) Computer language design is just like a stroll in the park. Jurassic Park, that is. (Larry Wall) That’s what’s cool about working with computers. They don’t argue, they remember everything, and they don’t drink all your beer. (Paul Leary) Without requirements or design, programming is the art of adding bugs to an empty text file. (Louis Srygley)"
      }, {
        id: 2,
        title: "Sleep, I needs it",
        body: "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies. (C.A.R. Hoare) Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter. (Eric Raymond) I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing. (Oktal) True innovation often comes from the small startup who is lean enough to launch a market but lacks the heft to own it. (Timm Martin) Good programmers use their brains, but good guidelines save us having to think out every case. (Francis Glassborow) It’s not a bug – it’s an undocumented feature. (Anonymous) The best thing about a boolean is even if you are wrong, you are only off by a bit. (Anonymous) The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time. (Tom Cargill) Complexity kills. It sucks the life out of developers, it makes products difficult to plan, build and test, it introduces security challenges, and it causes end-user and administrator frustration. (Ray Ozzie) I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing. (Oktal) Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. (Martin Golding) Good programmers use their brains, but good guidelines save us having to think out every case. (Francis Glassborow) Computer language design is just like a stroll in the park. Jurassic Park, that is. (Larry Wall) That’s what’s cool about working with computers. They don’t argue, they remember everything, and they don’t drink all your beer. (Paul Leary) Without requirements or design, programming is the art of adding bugs to an empty text file. (Louis Srygley)"
      }, {
        id: 3,
        title: "Am I doing it right?",
        body: "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies. (C.A.R. Hoare) Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter. (Eric Raymond) I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing. (Oktal) True innovation often comes from the small startup who is lean enough to launch a market but lacks the heft to own it. (Timm Martin) Good programmers use their brains, but good guidelines save us having to think out every case. (Francis Glassborow) It’s not a bug – it’s an undocumented feature. (Anonymous) The best thing about a boolean is even if you are wrong, you are only off by a bit. (Anonymous) The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time. (Tom Cargill) Complexity kills. It sucks the life out of developers, it makes products difficult to plan, build and test, it introduces security challenges, and it causes end-user and administrator frustration. (Ray Ozzie) I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing. (Oktal) Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. (Martin Golding) Good programmers use their brains, but good guidelines save us having to think out every case. (Francis Glassborow) Computer language design is just like a stroll in the park. Jurassic Park, that is. (Larry Wall) That’s what’s cool about working with computers. They don’t argue, they remember everything, and they don’t drink all your beer. (Paul Leary) Without requirements or design, programming is the art of adding bugs to an empty text file. (Louis Srygley)"
      },
    ])
  }, []);

  useEffect(() => {
    localStorage.setItem('blogEntries', JSON.stringify(blogEntries));
  },[blogEntries]);


  function addBlogEntry(id, title, body) {
    const newBlogEntry = { id: counter, title, body};
    setBlogEntries([...blogEntries, newBlogEntry]);
    setCounter(counter + 1);
  }

  function deleteEntry(id){
    const index=blogEntries.findIndex(blogEntry => blogEntry.id === id);
    const remainingEntries = [...blogEntries];
    remainingEntries.splice(index, 1);
    setBlogEntries(remainingEntries);
  }
  
  function editEntry(id, newTitle, newBody){
    const index = blogEntries.findIndex(blogEntry => blogEntry.id === id);
    const updatedEntries = [...blogEntries];
    updatedEntries[index].title = newTitle;
    updatedEntries[index].body = newBody;
    setBlogEntries(updatedEntries);
  }
  

  return(
    <>
      <h1>Blog CMS!</h1>
      <BlogForm addBlogEntry={addBlogEntry}/>
      <BlogDisplay blogEntries={blogEntries} deleteEntry={deleteEntry} editEntry={editEntry}/>
    </>
  )
}

export default BlogApp;










 
