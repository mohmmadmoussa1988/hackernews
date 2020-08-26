import React,{useEffect,useState} from 'react';
import {StoriesContainer} from '../containers/StoriesContainer';
import {getNewStoryIds} from '../services/api';


const NewArticles=() =>{
const [stories,setStories] = useState([]);

useEffect(()=>{
getNewStoryIds().then(data=>setStories(data));
},[])


return( 
        <>
        {stories.length>0 ? 
        <StoriesContainer storiesIds={stories}/>
        :
        <p>Loading</p>
        }
        </>
        )
}



export default NewArticles;