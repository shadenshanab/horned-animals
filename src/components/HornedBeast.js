import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
                <Button variant="primary">Go somewhere</Button>

                </Card.Body>
            </Card>
                
            </div>
        )
    }
}
export default HornedBeast;
