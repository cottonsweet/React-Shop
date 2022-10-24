import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { Nav } from "react-bootstrap";

const YelloBtn = styled.button`
  background: ${(props) => props.color};
  color: ${(props) => (props.color === "blue" ? "white" : "black")};
  padding: 10px;
`;

const Box = styled.div`
  background: grey;
  padding: 20px;
`;

const DetailItem = (props) => {
  const { id } = useParams();
  const [count, setCount] = useState(0);
  const [alert, setAlert] = useState(true);
  const [tab, setTab] = useState(0);
  const [detail, setDetail] = useState("");

  const getItem = props.shoes.find((a) => {
    return String(a.id) === String(id);
  });

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    setDetail("end");
    return () => {
      setDetail("");
    };
  }, []);

  return (
    <div className={`container start ${detail}`}>
      {alert === true ? <div className="alert alert-warning">2초이내 구매시 할인 남은시간</div> : null}

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        안녕
      </button>
      <Box>
        <YelloBtn color="blue">버튼</YelloBtn>
        <YelloBtn color="orange">버튼</YelloBtn>
      </Box>
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + id + ".jpg"} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{getItem.title}</h4>
          <p>{getItem.content}</p>
          <p>{getItem.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => setTab(0)}>
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() => setTab(1)}>
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={() => setTab(2)}>
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
};

const TabContent = ({ tab }) => {
  const [fade, setFade] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      clearTimeout(timer);
      setFade("");
    };
  }, [tab]);
  return (
    <div className={`start ${fade}`}>
      {[<div style={{ marginTop: "35px" }}>내용0</div>, <div style={{ marginTop: "35px" }}>내용1</div>, <div style={{ marginTop: "35px" }}>내용2</div>][tab]}
    </div>
  );
};

export default DetailItem;
