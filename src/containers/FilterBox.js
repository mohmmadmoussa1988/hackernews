import React, { useState,useEffect } from 'react';
import {FilterBoxStyle} from '../styles/HeaderStyles.js';

export const FilterBox = ()=>{

    const [value,setValue] = useState('');

    useEffect(()=>{



    },[value])

    const handleChange = (e) =>{

        setValue(e.target.value);

    }


    return(
       <FilterBoxStyle>
           <label>Filter Results</label>
           <input type="text" value={value} onChange={handleChange} />
       </FilterBoxStyle>
    )
}
   