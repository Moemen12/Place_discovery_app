import styled from "styled-components";

const Wrapper = styled.div`
  .swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    .swiper-backface-hidden:nth-child(1) {
      height: 500px !important;
    }
    .swiper-watch-progress {
      height: 70px !important;
    }
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  .mySwiper2 {
    height: 80%;
    width: 100%;
  }

  .mySwiper {
    height: 20%;
    box-sizing: border-box;
  }

  .mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }

  .mySwiper .swiper-slide-thumb-active {
    opacity: 1;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Wrapper;
