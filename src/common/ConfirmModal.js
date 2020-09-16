import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "./forms/Button";

class ConfirmModal extends Component {

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
                    <Button btnType="btn-danger" onClick={this.props.handleConfirm} btnText="Yes" />
                    <Button btnType="btn-secondary" onClick={this.props.handleClose} btnText="No" />
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ConfirmModal;