import styled from 'styled-components';

export const TopHeader = styled.div`
box-shadow:0px 10px 10px #eee;
background:#fff;
border-bottom:1px solid #eee;
padding:10px;
`;

export const HeaderLogo = styled.div`
 padding-top:8px;
 & img{
     width:100px;
 }
 & span{
     font-weight:bold;
     font-size:14px;
 }
`;


export const HeaderNavStyle = styled.div`
& li{
    font-size:12px;
    & a{
        color:black;
    }
    &.active{
        background:#eee;
    }    
}
`;

export const FilterBoxStyle = styled.div`
  
  & label{
      display:inline-block;
      font-size:10px;
      margin-right:10px;
  }

  & input{
    display:inline-block;

    ::placeholder{
        font-size:10px;
        font-style:italic;
    }
  }
}
`;
