import { useParams } from "react-router-dom";
import styled from "styled-components";

const YelloBtn = styled.button`
  background: ${(props) => props.color};
  color: ${(props) => (props.color == "blue" ? "white" : "black")};
  padding: 10px;
`;

const Box = styled.div`
  background: grey;
  padding: 20px;
`;

const Btn = styled.button(YelloBtn)``;

const DetailItem = (props) => {
  const { id } = useParams();
  const getItem = props.shoes.find((a) => {
    return a.id == id;
  });
  return (
    <div className="container">
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
