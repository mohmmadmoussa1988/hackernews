import React from 'react';
import {act} from 'react-dom/test-utils';
import App from '../App';
import {render,cleanup,waitForElement} from '@testing-library/react';
import {storyIds,singularStory} from '../fixtures';
import {getStory,getStoryIds} from '../services/api';
import {InfiniteScroll} from '../hooks/infiniteScroll';
import {STORY_INCREMENT} from '../constants';

beforeEach(cleanup);

jest.mock('../hooks/infiniteScroll.js');
jest.mock('../services/api.js',()=>({
    getStory: jest.fn(),
    getStoryIds:jest.fn()
}));

test('render application',async()=>{
    InfiniteScroll.mockImplementation(()=>({
        count:STORY_INCREMENT,
    }));
    getStory.mockImplementation(()=> Promise.resolve(singularStory));
    getStoryIds.mockImplementation(()=> Promise.resolve(storyIds));

    await act(async()=>{
        const {getByText,queryByTestId} = render(<App />);

        await waitForElement(() => [
            expect(getByText('Hacker News Stories')).toBeTruthy(),
            expect(getByText('This Title is for testing')).toBeTruthy(),
            expect(queryByTestId('story-by').textContent).toEqual('By: Mohammad Moussa'),
          ]);
    })
})