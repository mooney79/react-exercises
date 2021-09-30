function ContactCard(props){
    return(
        <div>
           {props.firstName} &nbsp; {props.lastName}<br/>
           {props.address} <br/>
           {props.phoneNumber} <br/>
        </div>
        
    )
}

export default ContactCard;

