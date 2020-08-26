import React,{useEffect,useState,memo} from 'react';
import {Story} from '../components/Story';
import {StoriesContainerWrapper} from '../styles/StoriesContainerStyles';
import {InfiniteScroll} from '../hooks/infiniteScroll';
import { Container, Row, Col } from 'reactstrap';

export const StoriesContainer=({storiesIds}) =>{
const [storyIds,setStoryIds]=useState([]);
const {count} = InfiniteScroll();

useEffect(()=>{
  setStoryIds(storiesIds);
},[])


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