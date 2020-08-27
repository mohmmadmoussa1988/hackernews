import React, { useState,useEffect } from 'react';
import {FilterBoxStyle} from '../styles/HeaderStyles.js';
import { useDispatch } from 'react-redux';
import {SetFilterValue} from '../redux/App/app.actions.js';

export const FilterBox = ()=>{

    const [value,setValue] = useState('');
    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(SetFilterValue(value));

    },[value])

    const handleChange = (e) =>{

        setValue(e.target.value);

    }


    return(
       <FilterBoxStyle>
           <label>Filter Results</label>
           <input type="text" value={value} onChange={handleChange} placeholder="Filter by article title" />
       </FilterBoxStyle>
    )
}
   