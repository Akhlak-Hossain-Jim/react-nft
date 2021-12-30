import React from "react";
import styled from "styled-components";
import CardComponent from "./CardComponent";

function CardList({ OSdata, setSelectedData }) {
  return (
    <Container>
      {React.Children.toArray(
        OSdata.map((data) => (
          <div onClick={() => setSelectedData(data.token_id)}>
            <CardComponent
              name={data.name}
              id={data.token_id}
              traits={data.traits}
              img={data.image_preview_url}
            />
          </div>
        ))
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  overflow: scroll;
  margin-top: 10px;
  padding-bottom: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default CardList;
