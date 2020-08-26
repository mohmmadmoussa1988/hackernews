import React from 'react';
import { Router } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { mount,shallow, configure } from 'enzyme';
import { MemoryRouter } from 'react-router';
import NewArticles from '../screens/newArticles';
import TopArticles from '../screens/topArticles';
import NotFoundPage from '../screens/notFoundPage';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

import App from '../App';

configure({adapter: new Adapter()});


describe('App Router', () => {


it('Shallowing the App', () => {
const wrapper = shallow(
<Provider store={store}>
<App />
</Provider>);

expect(wrapper.length).toEqual(1);   
});

it('Shallowing the App', () => {
  const wrapper = shallow(
  <Provider store={store}>
  <App />
  </Provider>);
  
  expect(wrapper.length).toEqual(1);   
  });

  it('Shallowing the App', () => {
    const wrapper = shallow(
      <Provider store={store}>
    <NewArticles/>
    </Provider>
    );
    
    expect(wrapper.length).toEqual(1);   
    });


    it('Shallowing the App', () => {
      const wrapper = shallow(
<Provider store={store}>
      <TopArticles />
      </Provider>);
      
      expect(wrapper.length).toEqual(1);   
      });


})

