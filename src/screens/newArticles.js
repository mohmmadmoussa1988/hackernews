import React,{useEffect,useState} from 'react';
import {StoriesContainer} from '../containers/StoriesContainer';
import {getNewStoryIds} from '../services/api';
import { useSelector,useDispatch } from 'react-redux';
import {ShowLoading} from '../redux/App/app.actions';

const NewArticles=() =>{
const [stories,setStories] = useState([]);
const dispatch = useDispatch();

useEffect(()=>{
dispatch(ShowLoading(true));      
getNewStoryIds().then(data=>{ dispatch(ShowLoading(false)); setStories(data)});
 },[])


return( 
        <>
        {stories.length>0 ? 
        <StoriesContainer storiesIds={stories}/>
        :
        ''
        }
        </>
        )
}



export default NewArticles;