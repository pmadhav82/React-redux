

import './App.css'
import Counter from './app/features/counter/Counter'
import { Container } from 'react-bootstrap';
import Todo from './app/features/todo-app/Todo'
import FetchPost from './app/features/fetchPost/FetchPost';
import Calculator from './app/features/calculator/Calculator';
function App() {
  

  return (
    <>
     <Container className="d-flex flex-column justify-content-center m-2 align-items-center ">
     {/* <Counter/>
 
<Todo/>  
<FetchPost/> */}

<Calculator/>

     </Container>
    </>
  )
}

export default App
