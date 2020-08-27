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

    test('invalid path should redirect to 404', () => {
        const wrapper = mount(
          <MemoryRouter initialEntries={[ '/random' ]}>
            <Provider store={store}>
            <App />
            </Provider>
          </MemoryRouter>
        );
        console.log('wrapper',wrapper);
        expect(wrapper.find(NotFoundPage)).toHaveLength(1);
      });


      test('/ should render NewArticles', () => {
        const wrapper = mount(
          <MemoryRouter initialEntries={[ '/' ]}>
            <Provider store={store}>
            <App />
            </Provider>
          </MemoryRouter>
        );
        console.log('wrapper',wrapper);
        expect(wrapper.find(NewArticles)).toHaveLength(1);
        expect(wrapper.find(NotFoundPage)).toHaveLength(0);
      });

      test('/top-articles should render TopArticles', () => {
        const wrapper = mount(
          <MemoryRouter initialEntries={[ '/top-articles' ]}>
            <Provider store={store}>
            <App />
            </Provider>
          </MemoryRouter>
        );
        console.log('wrapper',wrapper);
        expect(wrapper.find(TopArticles)).toHaveLength(1);
        expect(wrapper.find(NotFoundPage)).toHaveLength(0);
      });



it('Shallowing the App', () => {
const wrapper = shallow(
<Provider store={store}>
<App />
</Provider>);

expect(wrapper.length).toEqual(1);   
});

})

