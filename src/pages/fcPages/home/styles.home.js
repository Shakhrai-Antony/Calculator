import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 700px;
  margin: 50px auto;
`;
const HistorySection = styled.div`
  order: 2;
  display: flex;
  width: 350px;
`;

const CalculatorSection = styled.div`
  order: 1;
  text-align: end;
  border-radius: 15px;
  width: 400px;
  padding: 10px;
  background: ${(props) => (props.theme === "light" ? "#a9a9a9" : "#fff")};
  border: 2px solid #c0c0c0;
`;

const DisplaySection = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  border: 1px solid #c0c0c0;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme === "light" ? "#778899" : "#E6E6FA"};
  height: 120px;
  position: relative;
`;

export { CalculatorSection, DisplaySection, HistorySection, Wrapper };
