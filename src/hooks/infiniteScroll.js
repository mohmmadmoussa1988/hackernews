import {useState,useEffect} from 'react';
import {STORY_INCREMENT,MAX_STORIES} from '../constants/index';
import {debounce} from '../utils/debounce';

export const InfiniteScroll = () =>{

    const [loading,setLoading] = useState(false);
    const [count,setCount] = useState(STORY_INCREMENT);

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
        return () =>window.removeEventListener('scroll',handleScroll);
    },[])

    useEffect(()=>{

        console.log('count)',count);

        if(!loading) return;

        if(count+STORY_INCREMENT>= MAX_STORIES){
            setCount(MAX_STORIES);
            console.log('count)',MAX_STORIES);

        }
        else{
            setCount(count + STORY_INCREMENT); 
            console.log('count)',count + STORY_INCREMENT);

        }

        setLoading(false);

    },[loading])

    const handleScroll = debounce(() =>{

        console.log((window.innerHeight  + document.documentElement.scrollTop),document.documentElement.offsetHeight);
        if ((window.innerHeight  + document.documentElement.scrollTop !== document.documentElement.offsetHeight) || loading){
            return false;
        }

        setLoading(true);

    },100)


return {count};



}