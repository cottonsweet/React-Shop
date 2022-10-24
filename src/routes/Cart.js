import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCount } from "../store.js";

const Cart = () => {
  const state = useSelector((state) => state);
  const data = state.cart;
  const dispatch = useDispatch();
  return (
    <div>
      {state.user} 의 장바구니
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {data.map((a, i) => {
            return (
              <tr key={i}>
                <td>{data[i].id}</td>
                <td>{data[i].name}</td>
                <td>{data[i].count}</td>
                <td>{data[i].desc}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(changeCount());
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
