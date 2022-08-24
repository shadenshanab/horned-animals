import React from "react";
import { Form, Modal,  } from "react-bootstrap";
import HornedBeast from "./HornedBeast";
import UserModal from './Modal';



class UserForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: 0,
            image_url: "",
            title: "",
            description: "",
            keyword: "",
            horns: 0,
            showModal:false
            
        }
    }
    handleClose = ()=>{
        this.setState({showModal:false})
    }

    // function one() {
    //     return horns == 1;
    // }

    handleSelect = (e) => {
        e.preventDefault();
        if(e===1){HornedBeast.filter()}
        this.setState({
            ID: e.target._id.value,
            image_url: e.target.image_url.value,
            title: e.target.title.checked,
            description: e.target.description.value,
            keyword: e.target.keyword.value,
            horns: e.target.horns.value,
            showModal:true
        });
    
    }
  render() {
    return (
      <>
      <label>Please select the number of horns</label>
        <Form onSelect={this.handleSelect}>
          <Form.Group class="selectClass" >
            <select class="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>100</option>
            </select>
          </Form.Group>

        </Form>
        <UserModal
            showModal={this.state.showModal}
            handleClose={this.handleClose}
            sentData={this.state}
                
        />
      </>
    );
  }
}

export default UserForm;