
import React from "react";
import "../To  do Liist/Todo.css"
import { firestore } from "../../pages/config";
import {deleteDoc,updateDoc,getDocs,addDoc,doc,collection} from "firebase/firestore";
import { Container, Form, Button, ListGroup } from "react-bootstrap";
class Firestore extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      todoAryy: [],
    };
  }
   getData=async()=>{
    let { todoAryy } = this.state;
    let arr = []
    const q = collection(firestore, "Todolist");
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  let  obj = doc.data()
  obj.key= doc.id
  console.log(obj)
  arr.push(obj)
  this.setState({todoAryy:arr})

      })
  }
    componentDidMount() {
      this.getData()
    }
  adddata=()=>{

    let  {value} =  this.state
    const docRef =  addDoc(collection(firestore, "Todolist"), {
      value: value,
    }).then((suceses)=>{
      this.getData();
      console.log("added  succesesfully")
    }).catch((err)=>{
      console.log("Missing  some  thing")
    })
  }
  deltFunc =async  (index) => {
    let  {todoAryy}=this.state
    await deleteDoc(doc(firestore, "Todolist", index))
    this.getData();
    this.setState({todoAryy:todoAryy})
  };
  editFunc =async  (index) => {
    let  {value,todoAryy}=this.state
    let updateval  = prompt("update")
    await updateDoc(doc(firestore, "Todolist", index),{value:updateval})
    this.getData();
  }
  render() {
    return (
      <Container className="_Container">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            value={this.state.value}
            onChange={(b) => this.setState({ value: b.target.value })}
            placeholder="Add your Task"
          />
        </Form.Group>
        <Button variant="primary" onClick={() => this.adddata()}>
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
                  <span className="_span">{i + 1}</span> {val.value}
                </div>
              </div>

              <Button
                variant="warning"
                onClick={() => this.editFunc(val.key)}
              >
                Eidt
              </Button>
              <Button variant="danger"
               onClick={() => this.deltFunc(val.key)}>
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

export default Firestore;
