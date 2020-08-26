import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import NewArticles from './screens/newArticles';
import TopArticles from './screens/topArticles';
import {Header} from './containers/Header';
import { Container } from 'reactstrap';
import {Loading} from './components/Loading';
import { useSelector,useDispatch } from 'react-redux';

const App = () =>{
  const showLoading = useSelector(state=>state.app.showloading);
  console.log("showLoading",showLoading);
  return (
    <Container>
      {showLoading==true && <Loading />}      
      <Header/>
       <Switch>
           <Route   path='/' component={NewArticles}/>
           <Route   path='/top-articles' component={TopArticles}/>
      </Switch>     

      </Container>
  );
}


  

export default App;
