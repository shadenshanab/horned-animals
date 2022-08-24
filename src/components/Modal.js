import {Modal,Button} from "react-bootstrap";
import React from "react";
class UserModal extends React.Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.sentData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.sentData.image_url}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default UserModal;