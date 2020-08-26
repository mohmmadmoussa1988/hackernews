import styled,{keyframes} from 'styled-components';


const ShowAnimation = keyframes`
 0% { opacity:0 }
 100% { opacity:1 }
 `;


export const StoryWrapper = styled.section`
border-top:1px solid #cccccc;
padding:10px;

&:first-of-type{
    border-top:0;
}

&:last-of-type{
    margin-bottom:0;
    padding-bottom:0;
}

&:nth-of-type(odd){
        background: white;
        }
&:nth-of-type(even){
background: #f6f6f6;
}

animation-name: ${ShowAnimation};
animation-duration: 2s;

`;

export const StoryTitle = styled.h1`
margin-bottom:5px;
font-size:14px;
text-decoration:none;
padding-bottom:10px;
a {
    color:#2e2e2c;
    text-decoration:none;
}
`;


export const StoryMeta = styled.div`
font-style : italic;
font-size:12px;
color:red;

> span:first-child{
    margin-right:10px;
}
>span:not(:first-child):before{
    margin: 0 7px;
}

>span{
    margin-right:10px;
}

.story__meta-bold {
    font-weight:bold;
}
`;

export const StoryMetaElement = styled.span`
font-weight:bold;
color:${props=>props.color || 'red'};
`;


