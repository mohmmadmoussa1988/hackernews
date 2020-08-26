import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { Story } from '../components/Story';
import { storyIds } from '../fixtures';
import { getStory } from '../services/api';

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});



test('renders the story component with content', async () => {

  console.log('data',storyIds[0]);
  const { getByText, getByTestId } = render(<Story data={storyIds[0]} />);

  await waitForElement(() => [
    expect(getByTestId('story')).toBeTruthy(),
    expect(getByText('This Title is for testing')).toBeTruthy(),
    expect(getByTestId('story-by').textContent).toEqual('By: Mohammad Moussa'),
  ]);
});