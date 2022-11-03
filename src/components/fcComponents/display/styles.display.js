import styled from "styled-components";

const ExpressionSection = styled.div`
  margin-bottom: 50px;
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => (props.theme === "light" ? "#fff" : "#000")};
  padding: 5px;
`;

const ResultSection = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.theme === "light" ? "#fff" : "#000")};
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

export { ExpressionSection, ResultSection };
