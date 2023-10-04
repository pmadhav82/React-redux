

import './App.css'
import Counter from './app/features/counter/Counter'
import { Container } from 'react-bootstrap';
import Todo from './app/features/todo-app/Todo'
import FetchPost from './app/features/fetchPost/FetchPost';
import Calculator from './app/features/calculator/Calculator';
import { Route, Routes, Link } from 'react-router-dom';
import PostList from './app/features/postList/PostList';
import HomePage from './app/HomePage';
import CommentUI from './app/features/nastedComment/CommentUI';

function App() {
  

  return (
<> <Container className='d-flex m-2 justify-content-center flex-wrap align-items-center gap-2'>

<Routes>
  <Route path='/' element = {<HomePage/>}/>
<Route path='/calculator' element = {<Calculator/>}/>
<Route path='/todo-app' element = {<Todo/>}/>
<Route path='/counter-app' element = {<Counter/>}/>
<Route path='/fetch-post' element = {<PostList/>}/>
<Route path='/fetch-post-asyncThunk' element = {<FetchPost/>}/>
<Route path='/comment' element = {<CommentUI/>} />
</Routes>

</Container>


    </>
  )
}

export default App
