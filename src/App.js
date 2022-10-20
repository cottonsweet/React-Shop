import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import data from "./data.js";

function App() {
  const [shoes, setShoes] = useState(data);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="navbar">
        <Container>
          <Navbar.Brand className="home" href="#home">
            메뉴
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">사진</Nav.Link>
            <Nav.Link href="#pricing">가격</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {/* <Itemlist shoes={shoes[0]} i={1}></Itemlist>;<Itemlist shoes={shoes[1]} i={2}></Itemlist>;<Itemlist shoes={shoes[2]} i={3}></Itemlist>; */}
          {shoes.map((a, i) => {
            return <Itemlist shoes={shoes[i]} i={i}></Itemlist>;
          })}
        </div>
      </div>
    </div>
  );
}

const Itemlist = (props) => {
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
};

export default App;
