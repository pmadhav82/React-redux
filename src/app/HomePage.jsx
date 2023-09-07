import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const HomePage = ()=> {
    return <>
    

      <Card style={{ width: '18rem' }}>
    
        <Card.Body>
          <Card.Title>Calculator</Card.Title>
        
          <Button variant="primary">
            <Link className='nav-link' to="/calculator">Calculator</Link>
            </Button>
        </Card.Body>
      </Card>

  <Card style={{ width: '18rem',margin: "0 1rem" }}>
    
        <Card.Body>
          <Card.Title>Todo App </Card.Title>
        
          <Button variant="primary">
            <Link className='nav-link' to="/todo-app">Todo App</Link>
            </Button>
        </Card.Body>
      </Card>



      <Card style={{ width: '18rem',margin: "0 1rem" }}>
    
    <Card.Body>
      <Card.Title> Counter App </Card.Title>
    
      <Button variant="primary">
        <Link className='nav-link' to="/counter-app">Counter App</Link>
        </Button>
    </Card.Body>
  </Card>


  <Card style={{ width: '18rem',margin: "0 1rem" }}>
    
    <Card.Body>
      <Card.Title> Fetch Post </Card.Title>
    
      <Button variant="primary">
        <Link className='nav-link' to="/fetch-post">Fetch Post</Link>
        </Button>
    </Card.Body>
  </Card>

    </>
  }
  
  export default HomePage;