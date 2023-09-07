

import './App.css'
import Counter from './app/features/counter/Counter'
import { Container } from 'react-bootstrap';
import Todo from './app/features/todo-app/Todo'
import FetchPost from './app/features/fetchPost/FetchPost';
import Calculator from './app/features/calculator/Calculator';
import { Route, Routes, Link } from 'react-router-dom';
import PostList from './app/features/postList/PostList';
import HomePage from './app/HomePage';

function App() {
  

  return (
<> <Container className='d-flex m-2 justify-content-center'>

<Routes>
  <Route path='/' element = {<HomePage/>}/>
<Route path='/calculator' element = {<Calculator/>}/>
<Route path='/todo-app' element = {<Todo/>}/>
<Route path='/counter-app' element = {<Counter/>}/>
<Route path='/fetch-post' element = {<PostList/>}/>
</Routes>

</Container>


    </>
  )
}

export default App
