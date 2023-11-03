import { useState } from "react";
import { FilterInput } from "./FilterForm.styled"
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from "redux/contactsSlice";


export const FilterForm = () => {
      const [value, setValue] = useState('');

    const dispatch = useDispatch();
  const filter = useSelector(state => state.filter)
    return (
        <div>
            <p>Find contact by name</p>
            <FilterInput onChange={event => { setValue(event.target.value); dispatch(filterContact(value)) }} type="text" placeholder="Find by name" value={value} />
        </div>
    )
}