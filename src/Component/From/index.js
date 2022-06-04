import React from "react";
import {Button ,Container,Form,ListGroup} from "react-bootstrap"
class  From extends React.Component{
    constructor(){
        super();
        this.state={

               fname:"",
               lname:"",
               email:"",
               password:"",
          

        }
    }
    submit(){
        // let {saveData} = this.state;

        // this.setState({saveData:saveData})
        // saveData.unshift(
        //     this.state.fname,
        //     this.state.lname,
        //     this.state.email,
        //     this.state.password);
        // console.log(saveData)
    }
    render(){
        return(
            <Container className="_container">

            <Form>
  <Form.Group className="mb-3">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text"
    value={this.state.fname}
     onChange={(b) => this.setState({ fname: b.target.value })}
    placeholder="Enter  your First  Name" />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Last  Name</Form.Label>
    <Form.Control type="text"
      value={this.state.lname}
      onChange={(b) => this.setState({ lname: b.target.value })}
    placeholder="Enter your  Last Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email"
      value={this.state.email}
      onChange={(b) => this.setState({ email: b.target.value })}
    placeholder="Enter your email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password"
      value={this.state.password}
      onChange={(b) => this.setState({ password: b.target.value })}
    placeholder=" Enter  your Password" />
  </Form.Group>
  <Button onClick={()=>this.submit()} variant="primary">
    Submit
  </Button>
</Form>
<ListGroup>
  <ListGroup.Item>{this.state.fname}</ListGroup.Item>
  <ListGroup.Item>{this.state.lname}</ListGroup.Item>
  <ListGroup.Item>{this.state.email}</ListGroup.Item>
  <ListGroup.Item>{this.state.password}c</ListGroup.Item>
  
</ListGroup>
            </Container>
        )
    }
}

export default From;