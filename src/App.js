import "./App.css";
import { createContext, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import data from "./data.js";
import DetailItem from "./routes/detail.js";
import axios from "axios";
import Cart from "./routes/Cart.js";

// 컨텍스트는 State의 보관함을 만들어주는 함수
export const Context1 = createContext();

function App() {
  const [shoes, setShoes] = useState(data);
  const [stock] = useState([10, 11, 12]);
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
                  {shoes.map((a, i) => {
                    return <Itemlist shoes={shoes[i]} link={i}></Itemlist>;
                  })}
                </div>
                <button
                  onClick={() => {
                    const URL = "https://codingapple1.github.io/shop/data2.json";
                    axios.get(URL).then((result) => {
                      const data = result.data;
                      let copy = [...shoes, ...data];
                      setShoes(copy);
                    });
                    axios.post("url", {
                      name: "kim",
                    });
                  }}
                >
                  버튼
                </button>
              </div>
            </>
          }
        />

        <Route path="/detail/:id" element={<DetailItem shoes={shoes} />} />

        <Route path="/cart" element={<Cart />} />

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
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.link + 1) + ".jpg"} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
};

export default App;
