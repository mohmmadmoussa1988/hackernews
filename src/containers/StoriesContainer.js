import React,{useEffect,useState} from 'react';
import {Story} from '../components/Story';
import {StoriesContainerWrapper} from '../styles/StoriesContainerStyles';
import {InfiniteScroll} from '../hooks/infiniteScroll';
import { useSelector } from 'react-redux';

export const StoriesContainer=({storiesIds}) =>{
const [storyIds,setStoryIds]=useState([]);
const [filterValue,setFilterValue] = useState('');
const filter_value = useSelector(state=>state.app.filter_value);
const {count} = InfiniteScroll();

useEffect(()=>{
if(storyIds.length===0){setStoryIds(storiesIds);}
setFilterValue(filter_value);
},[filter_value])


  return (
    <StoriesContainerWrapper data-testid="stories-container">
    {
      storyIds.slice(0,count).filter(story=>{
        if(filterValue!=='') { return((story.title).toLowerCase().includes(filterValue.toLowerCase())) } else { return(story)}
      }).map(story =><Story data={story} key={story.id}/>)
        
    }
    </StoriesContainerWrapper>
)
  
}