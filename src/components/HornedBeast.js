import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Data from './data.json'



function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {this.props.title}
        </Modal.Title>
        <Modal.Img variant="top" src={this.props.img} alt='img' onClick={this.addVote} />
      </Modal.Header>
      <Modal.Body>
                <Modal.Title>{this.props.title}</Modal.Title>
                <Modal.Text>{this.props.description}</Modal.Text>
                <Modal.Text>Number Of Votes = {this.state.numberOfVotes}</Modal.Text>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function App() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="secondary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  

class HornedBeast extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            numberOfVotes : 0
        }
    }

    addVote = () =>{
        this.setState({
            numberOfVotes : this.state.numberOfVotes +1
        })
    }

    render(){
        return(
            
            <div>
            <Card style={{ width: '18rem' }}>

                <div className="cardImage">
                <Card.Img variant="top" src={this.props.img} alt='img' onClick={this.addVote} />
                </div>

                <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>{this.props.description}</Card.Text>
                <Card.Text>Number Of Votes = {this.state.numberOfVotes}</Card.Text>
                <Button variant="primary" onClick={() => <App/>}> Show </Button>

                </Card.Body>
            </Card>
                
            </div>
        )
    }
}
export default HornedBeast;
