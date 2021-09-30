import BlogEntry from "./BlogEntry";

function BlogDisplay(props) {

    const blogEntriesHTML = props.blogEntries.map(blogEntry => <BlogEntry key={props.blogEntries.id} {...blogEntry} deleteEntry={props.deleteEntry} editEntry={props.editEntry}/>);
   


    return(
        <>
            {blogEntriesHTML}
        </>
    )
}

export default BlogDisplay;