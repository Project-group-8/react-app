import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Main() {
    return (
        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Img variant="top" src="https://www.tastingtable.com/img/gallery/is-an-americano-with-milk-the-same-thing-as-a-latte/l-intro-1670524321.jpg" style={{width: "200px", position:"relative",left:"1600px",bottom:"90px"}} />
        </Card>
      );
}

export default Main;