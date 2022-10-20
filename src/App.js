import "./App.css";
import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import data from "./data.js";
import DetailItem from "./routes/detail.js";

function App() {
  const [shoes] = useState(data);
  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="navbar">
        <Container>
          <Navbar.Brand className="home" href="#home">
            메뉴
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>홈</Nav.Link>
            <Nav.Link href="#features">사진</Nav.Link>
            <Nav.Link onClick={() => navigate("/detail")}>가격</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {/* <Itemlist shoes={shoes[0]} i={1}></Itemlist>;<Itemlist shoes={shoes[1]} i={2}></Itemlist>;<Itemlist shoes={shoes[2]} i={3}></Itemlist>; */}
                  {shoes.map((a, i) => {
                    return <Itemlist shoes={shoes[i]} link={i}></Itemlist>;
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail" element={<DetailItem />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버 !</div>} />
          <Route path="location" element={<div>위치정보 !</div>} />
        </Route>

        <Route path="/event" element={<EvnetPage />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>

        <Route path="*" element={<div>404 없는 페이지야 !</div>} />
      </Routes>
    </div>
  );
}

const EvnetPage = () => {
  return (
    <div>
      <h2>오늘의 이벤트 !!!</h2>
      <Outlet></Outlet>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
      <p>안녕하십니까</p>
    </div>
  );
};

const Itemlist = (props) => {
  return (
    <div className="col-md-4" key={props.i}>
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.link + 1) + ".jpg"} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
};

export default App;
