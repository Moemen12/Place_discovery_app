import styled from "styled-components";

const Wrapper = styled.section`
  background-color: #e4eafc;

  /* font-size: clamp(1rem, 2.4vw, 3rem); */

  h2 {
    font-size: clamp(1.5rem, 2.4vw, 3rem);
  }

  a {
    background: linear-gradient(#002e87, #000719);
    color: #fff;
  }
  span {
    color: #002e87;
  }
`;

export default Wrapper;
