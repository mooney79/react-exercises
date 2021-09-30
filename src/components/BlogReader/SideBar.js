function SideBar(props){
    return (
        <>
         <button type="button" onClick={() => props.setSelection('article1')}> Article 1</button>
        <button type="button" onClick={() => props.setSelection('article2')}> Article 2</button>
        <button type="button" onClick={() => props.setSelection('article3')}> Article 3</button>
        <button type="button" onClick={() => props.setSelection('article4')}> Article 4</button>
        </>
    )
}

export default SideBar;

//Change "Article 1, Article 2, etc" to get the information dynamically