import styled from "styled-components";

const Wrapper = styled.header`
  position: relative;
  min-height: 100vh;

  .app-container {
    background: white;
  }

  .trip-slider {
    content: "";
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }

  @media screen and (max-width: 640px) {
    min-height: 200px !important;
  }
`;

export default Wrapper;
