import React, { useState,useEffect } from 'react';
import {getStory} from '../services/api';
import  {StoryWrapper,StoryTitle,StoryMeta,StoryMetaElement} from '../styles/StoryStyles.js';
import {mapTime} from '../mappers/mapTime';
export const Story = ({storyId}) =>{
    const [storyIds,setStoryIds] = useState();
    const [story,setStory] = useState({});
    
    useEffect(()=>{
        getStory(storyId).then(data=>data && data.url && setStory(data));
      },[])


    return story && story.url ?
    <StoryWrapper data-testid="story">
        <StoryTitle>
    <a href={story.url}>{story.title}</a>
    </StoryTitle>
    <StoryMeta>
        <span  data-testid="story-by">
            <StoryMetaElement color="#000">By: </StoryMetaElement>{story.by}
        </span>

        <span  data-testid="story-time">
            <StoryMetaElement color="#000">Posted:</StoryMetaElement>{mapTime(story.time)}
        </span>
    </StoryMeta>
    </StoryWrapper>
    :
    null
    


}