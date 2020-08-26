import React from 'react';
import {HeaderLogo} from '../styles/HeaderStyles.js';
import { css } from "@emotion/core";
import {RiseLoader} from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export const Loading = ()=>{

    return(
        <RiseLoader
        css={override}
        size={150}
        color={"#123abc"}
        loading={true}
      />
    )   
}
   