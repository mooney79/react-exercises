import BookMark from "./BookMark";

function BookmarkList(props){
    let bookmarkHTML;
    let shownBookmarks=[{}];
    if (props.selection === "all"){
        bookmarkHTML = props.bookmarks.map(bookmark => <BookMark key={URL} {...bookmark}/>);
    } 
    else {
        // shownBookmarks = props.bookmarks.filter(() => props.selection === props.bookmarks.tag);
        for (let i=0; i < props.bookmarks.length; i++){
            if (props.bookmarks[i].tag === props.selection){
                shownBookmarks.push(props.bookmarks[i]);
            }
        }
        bookmarkHTML = shownBookmarks.map(shownBookmark => <BookMark key={URL} {...shownBookmark}/>);
    }
    return (
        <>
         {bookmarkHTML}
        </>
    )

}
export default BookmarkList;