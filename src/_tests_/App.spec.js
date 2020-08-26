import React from 'react';
import {act} from 'react-dom/test-utils';
import {App} from '../App';
import {render,cleanup} from '@testing-library/react';
import {storyIds,singularStory} from '../fixtures';
import {getStory,getStoryIds} from '../services/api';
import {InfiniteScroll} from '../hooks/infiniteScroll';
import {STORY_INCREMENT} from '../constants';

beforeEach(cleanup);


test('render application',async()=>{
    InfiniteScroll.mock
})