import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { StoriesContainer } from '../containers/StoriesContainer';
import { storyIds, singularStory } from '../fixtures';
import { getStory, getStoryIds } from '../services/api';
import { InfiniteScroll } from '../hooks/infiniteScroll';
import { STORY_INCREMENT } from '../constants';

beforeEach(cleanup);

jest.mock('../hooks/infiniteScroll.js');

jest.mock('../services/api', () => ({
  getStory: jest.fn(),
  getStoryIds: jest.fn(),
}));

test('renders the story container with a story', async () => {
    InfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }));
  getStory.mockImplementation(() => Promise.resolve(singularStory));
  getStoryIds.mockImplementation(() => Promise.resolve(storyIds));

  const { getByText, queryByTestId } = render(<StoriesContainer />);
  await waitForElement(() => [
    expect(getByText('Hacker News Stories')).toBeTruthy(),
    expect(getByText('This Title is for testing')).toBeTruthy(),
    expect(queryByTestId('story-by').textContent).toEqual('By: Mohammad Moussa'),
  ]);
});