import {useState} from 'react';

function BlogEntry(props){
    const [newTitle, setNewTitle] = useState(props.title);
    const [newBody, setNewBody] = useState(props.body);
    const [isEditing, setIsEditing] = useState(false);

    function handleTitleChange(event){
        setNewTitle(event.target.value);
      }
    
      function handleBodyChange(event){
        setNewBody(event.target.value);
      }

    function handleSubmit(event){
        event.preventDefault();
        props.editEntry(props.id, newTitle, newBody);
        setNewTitle(newTitle);
        setNewBody(newBody);
        setIsEditing(false);
    }

    const editHTML = (
        <form onSubmit={handleSubmit}>
                <input type="text" name="newTitle" value={newTitle} onChange={handleTitleChange} />
                <input type="text" name="newBody" value={newBody} onChange={handleBodyChange} />
                <button type="submit">Update</button>
        </form>
    );

    const previewHTML = (
            <div id={props.id}>
                <h2>{props.title}</h2>
                <p> {props.body}</p> <br />
                <button type="button" onClick={() => setIsEditing(true)} >Edit</button>
                <button type="button" onClick={() => props.deleteEntry(props.id)}> Delete </button>
            </div>
    )

    return(

        <div> {isEditing ? editHTML: previewHTML}</div>
    )
}
export default BlogEntry;

