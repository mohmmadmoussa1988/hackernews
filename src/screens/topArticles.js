import React,{useEffect,useState} from 'react';
import {StoriesContainer} from '../containers/StoriesContainer';
import {getTopStoryIds} from '../services/api';
import { useSelector,useDispatch } from 'react-redux';
import {ShowLoading} from '../redux/App/app.actions';

const TopArticles=() =>{
const [stories,setStories] = useState([]);
const dispatch = useDispatch();

useEffect(()=>{
dispatch(ShowLoading(true));      
getTopStoryIds().then(data=>{ dispatch(ShowLoading(false)); setStories(data)});
},[])


return( 
    <>
            {stories.length>0 ? 
                    <StoriesContainer data-testid="stories-container" storiesIds={stories}/>
                    :
                    ''
            }
    </>
)
}



export default TopArticles;