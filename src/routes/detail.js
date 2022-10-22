import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

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

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const getItem = props.shoes.find((a) => {
    return String(a.id) === String(id);
  });

  return (
    <div className="container">
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
    </div>
  );
};

export default DetailItem;
