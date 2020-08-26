import React from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import NewArticles from './screens/newArticles';
import TopArticles from './screens/topArticles';
import NotFoundPage from './screens/notFoundPage';
import {Header} from './containers/Header';
import { Container } from 'reactstrap';
import {Loading} from './components/Loading';
import { useSelector,useDispatch } from 'react-redux';

const App = () =>{
  const showLoading = useSelector(state=>state.app.showloading);
  console.log("showLoading",showLoading);
  return (
  <Router>
    <Container>
    {showLoading==true && <Loading />}      
    <Header/>
      <Switch>
        <Route exact  path='/' component={NewArticles}/>
        <Route exact  path='/top-articles' component={TopArticles}/>
        <Route component={NotFoundPage}/>           
      </Switch>     
    </Container>
  </Router>
  );
}


  

export default App;
