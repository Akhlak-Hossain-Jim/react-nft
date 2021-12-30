import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { AiFillInstagram } from "react-icons/ai";
import { BsThreeDots, BsTwitter } from "react-icons/bs";

function CardDetails({ listData, selectedData }) {
  const [activeCard, setactiveCard] = useState(listData[0]);

  useEffect(() => {
    setactiveCard(listData[selectedData]);
  }, [listData, selectedData]);
  return (
    <Container>
      <div className="image">
        <img src={activeCard.image_preview_url} alt="" />
      </div>
      <div className="details">
        <div>
          <div className="details_title">{activeCard.name}</div>
          <span>
            *# {activeCard.token_id} | Top Bid: {activeCard.top_bid}
          </span>

          <div className="seeIn">
            See In:&nbsp;
            <a
              href={activeCard.permalink}
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenSea.io
            </a>
          </div>
        </div>
        <div className="owner_details">
          <div className="owner_details_image">
            <img src={activeCard.owner.profile_img_url} alt="" />
          </div>
          <div className="owner_details_data">
            <div>
              <div className="owner_details_data_address">
                {activeCard.owner.address}
              </div>
              <div className="owner_details_data_name">
                @{activeCard.asset_contract.name}
              </div>
            </div>
            <div className="social_link__container">
              <span className="social_link" onClick={(e) => e.preventDefault}>
                <AiFillInstagram />
              </span>
              <span className="social_link" onClick={(e) => e.preventDefault}>
                <BsTwitter />
              </span>
              <span className="social_link" onClick={(e) => e.preventDefault}>
                <BsThreeDots />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  max-width: calc(100vw - 20px);
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
  margin: 0;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
  @media (max-width: 632px) {
    grid-template-columns: 2fr 3fr;
  }
  @media (max-width: 548px) {
    grid-template-columns: 1fr;
  }
  .image {
    aspect-ratio: 1/1;
    display: flex;
    width: 100%;
    object-fit: cover;
    img {
      width: 100%;
      margin: auto;
      border-radius: 20px;
    }
  }
  .details {
    color: #fff;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-between;
    /* margin: 0 20px; */
    gap: 60px;
    @media (max-width: 768px) {
      gap: 40px;
    }
    @media (max-width: 632px) {
      gap: 30px;
    }
    @media (max-width: 548px) {
      gap: 20px;
    }
    &_title {
      font-size: 30px;
      font-weight: 900;
    }
    span {
      color: #eee;
    }
    .seeIn {
      color: #eee;
      a {
        color: #eee;
      }
    }
    .owner_details {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      &_image {
        width: 40px;
        height: 40px;
        display: flex;
        border-radius: 50%;
        aspect-ratio: 1/1;
        background: #eee;
        overflow: hidden;
        img {
          width: 100%;
          margin: auto;
        }
      }
      &_data {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        flex-wrap: wrap;
        &_address {
          word-break: break-word;
        }
        .social_link {
          color: #eee;
          font-size: 30px;
          line-height: 30px;
          /* margin: 10px; */
          padding: 3px 5px 0px;
          border: 1px solid #eee;
          border-radius: 50%;
          @media (max-width: 768px) {
            font-size: 25px;
            line-height: 25px;
          }
          @media (max-width: 548px) {
            font-size: 20px;
            line-height: 20px;
          }
        }
        .social_link__container {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          gap: 10px;
        }
      }
    }
  }
`;

export default CardDetails;
