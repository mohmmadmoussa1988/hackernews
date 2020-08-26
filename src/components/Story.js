import React, { useState,useEffect,memo } from 'react';
import {getStory} from '../services/api';
import  {StoryWrapper,StoryTitle,StoryMeta,StoryMetaElement} from '../styles/StoryStyles.js';
import {mapTime} from '../mappers/mapTime';

export const Story = memo(function Story({data}){
    const [storyIds,setStoryIds] = useState();
    const [story,setStory] = useState(data);

    useEffect(()=>{

    },[])


    return story && story.url ? (
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

        <span  data-testid="story-score">
            <StoryMetaElement color="#000">Score:</StoryMetaElement>{story.score}
        </span>


    </StoryMeta>
    </StoryWrapper>
    )
    :
    null;
    


});