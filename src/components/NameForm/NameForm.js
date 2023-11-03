import { Formik, ErrorMessage } from 'formik';
import {useState } from 'react';
import * as Yup from 'yup';
import { StyledForm, AddBtn, StyledField } from './NameForm.styled';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';


const formSquema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.number().required('Required'),
});


export const NameForm = () => {
    const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleInputChange = evt => {
    const { value, name } = evt.target;
        setValue({[name]: value.trim()});
  };

  const handleSubmit = (values, actions) => {
     dispatch(addContact(values))
    // this.props.onSubmit(values);
    actions.resetForm();
    
  };

 
  return  <Formik
        initialValues={{ id: nanoid(), name: '', number: '' }}
        validationSchema={formSquema}
        onSubmit={handleSubmit}
              >
        <StyledForm>
          <label>
            {' '}
            Name
            <StyledField
              name="name"
              onInput={handleInputChange}
              placeholder="Name"
            />
            <ErrorMessage name="name" />
          </label>

          <label>
            {' '}
            Number
            <StyledField
              name="number"
              onInput={handleInputChange}
              placeholder="Phone number"
            />
            <ErrorMessage name="number" />
          </label>

          <AddBtn type="submit">Add contact</AddBtn>
        </StyledForm>
      </Formik>
    } 
      
    
  

