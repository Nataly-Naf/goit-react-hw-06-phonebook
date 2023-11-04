import { useState } from "react";
import { FilterInput } from "./FilterForm.styled"
import { useDispatch, useSelector} from 'react-redux';
import { setFilter } from "redux/contactsSlice";
import { getFilter } from "redux/selectors";

export const FilterForm = () => {
      const [value, setValue] = useState('');

    const dispatch = useDispatch();
      const savedFilter = useSelector(getFilter);

    return (
        <div>
            <p>Find contact by name</p>
            <FilterInput onChange={event => {setValue(event.target.value); dispatch(setFilter(value)) }} type="text" placeholder="Find by name" value={savedFilter} />
        </div>
    )
}