import React from "react";
import styled from "styled-components";

// import { BsDot } from "react-icons/bs";
import { SiEthereum } from "react-icons/si";

function CardComponent({ id, name, traits, img }) {
  return (
    <Container>
      <div className="img_con">
        <img src={img} alt="" className="img" />
      </div>
      <div className="details">
        <h2 className="title">{name}</h2>
        <div className="id">#{id}</div>
        <div className="price">
          <SiEthereum />
          {traits[0].value}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  background: #1e1e1c;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  color: #fff;
  min-width: 250px;
  width: 250px !important;
  height: 400px;
  margin: 10px;
  cursor: pointer;
  .img_con {
    aspect-ratio: 1/1;
    background: #fff;
    display: flex;
    border-radius: 10px 10px 0 0;
    img {
      width: 100%;
      border-radius: 10px 10px 0 0;
      margin: auto;
    }
  }
  .details {
    padding: 15px 10px;
    flex: 1;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    gap: 5px;
    .title {
      font-size: 20px;
    }
    .id {
      color: #a2a5b0;
      font-size: 18px;
    }
    .price {
      font-size: 18px;
    }
  }
`;

export default CardComponent;
