import {useState} from 'react';
import BookmarkNavButton from './BookmarkNavButton';

function BookmarkNav(props){
    const tags = props.bookmarks.map(tag => tag.tag);
    // const tagsArray = [...props.bookmarks.tag];
    const uniqueTags = [...new Set(tags)];
    const navButtonHTML =uniqueTags.map(tag => <BookmarkNavButton key={tag} 
        value={tag} setSelection={props.setSelection} selection={props.selection}/>);
    
    return(
        <>
            {navButtonHTML}
            {/* <h1>{uniqueTags.length}</h1>
            <h1>{props.selection}</h1> */}
        </>
    )
}

export default BookmarkNav;

//Find every unique tag
//List them out...
//Selecting them .filters the bookmarks


