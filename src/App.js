import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import NewArticles from './screens/newArticles';
import {Header} from './containers/Header';
import {TopHeader} from './styles/HeaderStyles.js';

const App = () =>{
  return (
    <div >
      <Header navigation/>
    {/*    <Switch>
           <Route exact  path='/' component={NewArticles}/>
      </Switch>     */}

    </div>
  );
}


  

export default App;
