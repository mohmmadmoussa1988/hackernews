import styled from 'styled-components';

export const TopHeader = styled.div`

    & .container{
        box-shadow:0px 10px 10px #eee;
        background:#fff;
        border-bottom:1px solid #eee;
        padding:10px;
    }
`;

export const HeaderLogo = styled.div`
 padding-top:8px;
 & img{
     width:100px;
 }
`;


export const HeaderNavStyle = styled.div`



& li{

    &.active{
        background:#eee;
        & a{
            color:black;
        }
    }    
}

`;
