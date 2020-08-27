import React from 'react';
import { css } from "@emotion/core";
import {RiseLoader} from "react-spinners";
import {LoadingStyles} from '../styles/LoadingStyles.js';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  width:30%;
  margin-top:25%;
`;

export const Loading = ()=>{

    return(
        <LoadingStyles>
        <RiseLoader
        css={override}
        size={50}
        color={"#123abc"}
        loading={true}
      />
      </LoadingStyles>
    )   
}
   