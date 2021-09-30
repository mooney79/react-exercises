function BookMark(props){
    return(
        <div>
            <a href={props.URL}>{props.title}</a><br />
            {/* <p>{props.tag}<br /></p> */}
        </div>
    )
}

export default BookMark;