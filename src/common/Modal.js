import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "./forms/Button";

class CustomModal extends Component {

    render() {
        return (
            <Modal 
                show={this.props.showModal} 
                onHide={this.props.handleClose} 
                size={this.props.size}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.children}</Modal.Body>
                <Modal.Footer>
                    <Button type="primary" onClick={this.props.handleClose} btnText="Save" />
                    <Button variant="secondary" onClick={this.props.handleClose} btnText="Cancel" />
                </Modal.Footer>
            </Modal>
        )
    }
}

export default CustomModal;