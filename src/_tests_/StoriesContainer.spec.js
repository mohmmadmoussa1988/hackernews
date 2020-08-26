import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { StoriesContainer } from '../containers/StoriesContainer';
import { storyIds } from '../fixtures';
import { getStory, getNewStoryIds } from '../services/api';
import { InfiniteScroll } from '../hooks/infiniteScroll';
import { STORY_INCREMENT } from '../constants';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
beforeEach(cleanup);

jest.mock('../hooks/infiniteScroll.js');



test('renders the story container with a story', async () => {
    InfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }));
  const { getByText, getByTestId,queryByTestId } = render(<Provider store={store}><StoriesContainer storiesIds={storyIds} /></Provider>);
  await waitForElement(() => [    
    expect(getByTestId('stories-container')).toBeTruthy(),
    expect(getByText('This Title is for testing')).toBeTruthy(),
    expect(queryByTestId('story-by').textContent).toEqual('By: Mohammad Moussa'),
  ]);
});