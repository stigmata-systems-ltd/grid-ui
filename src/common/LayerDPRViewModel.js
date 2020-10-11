import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from "react-bootstrap/Modal";
import Button from "./forms/Button";

class LayerDPRViewModel extends Component {

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
            </Modal>
        )
    }
}

export default LayerDPRViewModel;