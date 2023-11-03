import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ListBtn } from './Contacts.styled';
import { deleteContact } from 'redux/contactsSlice';



export const ContactsList = () => {
    const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts)
  return (<List>{contacts.map(contact => {
    return (<ListItem key={contact.id}>{contact.name}    {contact.number}   
      <ListBtn onClick={() => dispatch(deleteContact(contact.id))}>Delete</ListBtn> </ListItem>
   )
  })}</List>)
}

