import styled from "styled-components";

const Wrapper = styled.header`
  position: relative;
  min-height: 100vh;

  input {
    background: #c0c0c0;
    max-width: 45rem;
  }

  .trip-slider::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
`;

export default Wrapper;
