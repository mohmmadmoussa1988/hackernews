import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import NewArticles from './screens/newArticles';
import {Header} from './containers/Header';
import { Container } from 'reactstrap';
import {Loading} from './components/Loading';
const App = () =>{
  return (
    <Container>
      <Loading />
      <Header/>
       <Switch>
           <Route   path='/' component={NewArticles}/>
      </Switch>     

      </Container>
  );
}


  

export default App;
