/*

 contact form
    reqs: first name, last name, address, phone number, as you add contacts, have 
    them listed out  (bootstrap cards?)
    list contacts as they are added.  Save them to local storage

       Create a form that saves a contact to localStorage. Each contact
  should have a first name, last name, address, and phone number and should 
  display in the browser once created.

*/
import { useState, useEffect } from 'react';
import ContactCard from "./ContactCard";

function ContactForm(props){

   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [address, setAddress] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');
   const [contacts, setContacts]= useState([]);

   const contactsHTML = contacts.map(contact => <ContactCard key={contact.phoneNumber} {...contact}/>);


   function handleFirstNameChange(event){
      setFirstName(event.target.value);
    }
  
    function handleLastNameChange(event){
      setLastName(event.target.value);
    }

    function handleAddressChange(event){
      setAddress(event.target.value);
    }
  
    function handlePhoneNumberChange(event){
      setPhoneNumber(event.target.value);
    }

    function handleSubmit(event){
      event.preventDefault();
      const newContact = {firstName, lastName, address, phoneNumber};
      const updateContacts = [...contacts, newContact];
      setContacts(updateContacts);
      // const storeContacts = JSON.stringify(contacts);
      // localStorage.setItem("contacts", storeContacts);
      //Console test lines to see if written to storage:   
      // const test2 = localStorage.getItem("contacts");
      // console.log(test2)
    }

    useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    },[contacts]);

   return(
     <>
     <form onSubmit={handleSubmit}>
          <input name="firstName" type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} autoComplete="off" placeholder="First Name"/>
          <input name="lastName" type="text" id="lastName" value={lastName} onChange={handleLastNameChange} autoComplete="off" placeholder="Last Name"/>
          <input name="address" type="text" id="address" value={address} onChange={handleAddressChange} autoComplete="off" placeholder="123 Placeholder St"/>
          <input name="phoneNumber" type="text" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} autoComplete="off" placeholder="(123)456-7890"/>
          <button type="submit">Add Contact</button>
    </form>
    {contactsHTML}
     </>
   )
 }
 
 export default ContactForm;
