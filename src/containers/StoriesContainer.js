import React,{useEffect,useState,memo} from 'react';
import {getNewStoryIds,getStory} from '../services/api';
import {Story} from '../components/Story';
import {StoriesContainerWrapper,GlobalStyle} from '../styles/StoriesContainerStyles';
import {InfiniteScroll} from '../hooks/infiniteScroll';

export const StoriesContainer=() =>{

const [storyIds,setStoryIds]=useState([]);

const {count} = InfiniteScroll();

  useEffect(()=>{
    console.log('count',count);
    getNewStoryIds().then(data=>setStoryIds(data));
  },[count])


  return (
  <>
  <GlobalStyle/>
    <StoriesContainerWrapper data-test-id="stories-container">
    <h2>Hacker News Stories</h2>
    {
    storyIds.slice(0,count).map(storyId =>(
    <Story storyId={storyId} key={storyId}/>
    ))
    }
    </StoriesContainerWrapper>
  </>
)
  
}