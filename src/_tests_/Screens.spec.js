import React from 'react';
import { Router } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { mount,shallow, configure } from 'enzyme';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import NewArticles from '../screens/newArticles';
import TopArticles from '../screens/topArticles';
import NotFoundPage from '../screens/notFoundPage';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import {StoriesContainer} from '../containers/StoriesContainer';

configure({adapter: new Adapter()});
beforeEach(cleanup);

describe('Screens Components Testing', () => {

it('Rendering the New articles', async () => {
  const { getByTestId } = render(<Provider store={store}><NewArticles /></Provider>);
  await waitForElement(() => [
    expect(getByTestId('stories-container')).toBeTruthy()]);
  });

  it('Rendering the Top articles', async () => {
    const { getByTestId } = render(<Provider store={store}><TopArticles /></Provider>);
    await waitForElement(() => [
      expect(getByTestId('stories-container')).toBeTruthy()]);
    });


    it('Rendering the 404 page', async () => {
      const { getByTestId } = render(<NotFoundPage />);
      await waitForElement(() => [
        expect(getByTestId('Not-Found')).toBeTruthy()]);
      });




})

