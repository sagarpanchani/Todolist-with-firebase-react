import React from "react";
import "./Todo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, ListGroup } from "react-bootstrap";
import {
  ref,
  onChildAdded,
  push,
  update,
  remove,
} from "firebase/database";
import { db } from "../../pages/config";
class Todolist extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      todoAryy: [],
    };
  }
  getData = () => {
    let { todoAryy } = this.state;
    let arr = [];
    const commentsRef = ref(db, "Todolist");
    onChildAdded(commentsRef, (data) => {
      let obj = data.val();
      obj.key = data.key;
      arr.unshift(obj);
      this.setState({ todoAryy: arr });
    });
  };
  componentDidMount() {
    this.getData();
  }
  addItem = () => {
    let { userInput, todoAryy } = this.state;
    let obj = {
      userInput: userInput,
    };
    push(ref(db, "Todolist/"), obj)
      .then((succes) => {
        this.getData();
        // console.log("added  succesfully");
      })
      .catch((err) => {
        console.log("not   added");
      });
  };

  deltFunc = (index) => {
    let { todoAryy } = this.state;
    remove(ref(db, "Todolist/" + index + "/", index));
    this.getData();
  };
  editFunc = (index) => {
    console.log(index);
    let updateval = prompt("update value");
    let { todoAryy } = this.state;
    update(ref(db, "Todolist/" + index + "/", index), { userInput: updateval });
    this.getData();
  };

  render() {
    return (
      <Container className="_Container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              value={this.state.userInput}
              onChange={(b) => this.setState({ userInput: b.target.value })}
              placeholder="Add your Task"
            />
          </Form.Group>
          <Button variant="primary" onClick={() => this.addItem()}>
            Add Item
          </Button>
        </Form>
        {/* <br  /> */}
        {this.state.todoAryy.map((val, i) => {
          return (
            <ListGroup as="ol" numbered key={i}>
              <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    <span className="_span">{i + 1}</span> {val.userInput}
                  </div>
                </div>

                <Button
                  variant="warning"
                  onClick={() => this.editFunc(val.key)}
                >
                  Eidt
                </Button>
                <Button variant="danger" onClick={() => this.deltFunc(val.key)}>
                  Delete
                </Button>
              </ListGroup.Item>
            </ListGroup>
          );
        })}
      </Container>
    );
  }
}

export default Todolist;
