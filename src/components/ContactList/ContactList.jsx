import s from './ContactList.module.css'
import PropTypes from 'prop-types';

export default function ContactList({ contacts, deleteContact}) {
   return (
       <ul className={s.list}>
           {/* {console.log(contacts)} */}
           {contacts.map(contact => (
                <li key={contact.id} className={s.elem}>
                    <p className={s.title}>{  contact.name } : </p>
                    <p className={s.title}>{contact.number}</p>
                    <button className={s.button} onClick={() => deleteContact(contact.id)}  type="button">Delete</button>
                </li>   
            ))}
       </ul>
    )
}


ContactList.propTypes = {
    contacts: PropTypes.array,
    deleteContact: PropTypes.func,
}

