import React,{useEffect,useState,memo} from 'react';
import {Story} from '../components/Story';
import {StoriesContainerWrapper} from '../styles/StoriesContainerStyles';
import {InfiniteScroll} from '../hooks/infiniteScroll';
import { Container, Row, Col } from 'reactstrap';
import { useSelector,useDispatch } from 'react-redux';

export const StoriesContainer=({storiesIds}) =>{
const [storyIds,setStoryIds]=useState([]);
const [filterValue,setFilterValue] = useState('');
const filter_value = useSelector(state=>state.app.filter_value);
const {count} = InfiniteScroll();
const delay = ms => new Promise(res => setTimeout(res, ms));

useEffect(()=>{
if(storyIds.length==0){setStoryIds(storiesIds);}
setFilterValue(filter_value);
},[filter_value])


  return (
    <StoriesContainerWrapper data-test-id="stories-container">
    {
      storyIds.slice(0,count).filter(story=>{
        if(filterValue!='') { return((story.title).toLowerCase().includes(filterValue.toLowerCase())) } else { return(story)}
      }).map(story =><Story data={story} key={story.id}/>)
        
    }
    </StoriesContainerWrapper>
)
  
}