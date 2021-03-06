import { useState } from "react";
import s from './ContactForm.module.css'
import PropTypes from "prop-types";

export default function ContactForm({onSubmit}) { 
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(name,number);
        setName('');
        setNumber('');  
    };

    return (
        <form onSubmit={handleSubmit} className={s.elem}>
            <label>
                <input
                type="text"
                name="name"
                placeholder="Enter name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                value={name}
                onChange={handleChange}
                required
                />
            </label>
            <label>
                <input
                type="tel"
                name="number"
                value={number}
                onChange={handleChange}
                placeholder="Enter number"
                pattern="38[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
                title="Номер может состоять только из цифр. Например 380956665557."
                required
                />
            </label>
            <button type="submit">Save</button>
        </form> 
    )
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
}
