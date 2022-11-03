import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 400px;
  box-sizing: border-box;
  padding: 10px;
`;
const Button = styled.button`
  box-sizing: border-box;
  width: 70px;
  padding: 22px;
  border-radius: 40px;
  border: 1px solid #fffff0;
  background-color: ${(props) =>
    props.theme === "light" ? "#ffffff" : "#696969"};
  color: ${(props) => (props.theme === "light" ? "#000000" : "#fff")};
  font-size: 20px;
  margin-bottom: 15px;
  margin-right: 5px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: ${(props) =>
      props.theme === "light" ? "#A0522D" : "#FF6347"};
    border-color: #a0522d;
    color: #fff;
  }
`;
export { Button, Wrapper };
