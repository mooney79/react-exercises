import {useState} from 'react';

function BookmarkNavButton(props){
    function handleClick(event){
        if (props.selection === props.value){
            props.setSelection('all');
        } else {
            props.setSelection(props.value);
        }
    }
    
    return (
        <>
            <button type="button" key={props.key} onClick={handleClick}>{props.value} </button>
        </>
    )
}

export default BookmarkNavButton;

//Create an onClick function to pass up the chain.
//() => props.setSelection(props.value)