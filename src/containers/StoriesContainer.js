import React,{useEffect,useState,memo} from 'react';
import {Story} from '../components/Story';
import {StoriesContainerWrapper} from '../styles/StoriesContainerStyles';
import {InfiniteScroll} from '../hooks/infiniteScroll';
import { Container, Row, Col } from 'reactstrap';
import { useSelector,useDispatch } from 'react-redux';

export const StoriesContainer=({storiesIds}) =>{
const [storyIds,setStoryIds]=useState([]);
const filterValue = useSelector(state=>state.app.filter_value);
//const {count} = InfiniteScroll();
const {count} =10;
useEffect(()=>{

  if(storyIds.length==0){setStoryIds(storiesIds);}
  console.log('filter_value',filter_value);
},[filterValue])


  return (
    <StoriesContainerWrapper data-test-id="stories-container">
    {
      storyIds.slice(0,count).map(storyId =>(
        <Story storyId={storyId} key={storyId}/>
      ))
    }
    </StoriesContainerWrapper>
)
  
}