import React from "react";
import { Form, Button } from "react-bootstrap";

class CreateGrid extends React.Component {


handleChange = (name) => {

}
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title"
                onChange = {(e) => this.props.handleChangeTitle(e.target.value)}
                value = {this.props.title} 
            />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Body</Form.Label>
          <Form.Control type="text" placeholder="Enter Body" 
            onChange = {(e) => this.props.handleChangeBody(e.target.value)}
            value = {this.props.body} 
          />
        </Form.Group>
        <Button onClick={this.props.saveGridData} variant="primary" type="button">
          Submit
        </Button>
      </Form>
    );
  }
}
export default CreateGrid;
