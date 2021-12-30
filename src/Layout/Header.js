import React, { useState } from "react";
import styled from "styled-components";

import { BiSearchAlt } from "react-icons/bi";
import { HiSun } from "react-icons/hi";

const Header = () => {
  const [toggler, setToggler] = useState();
  return (
    <Container>
      <div className="logoContainer">
        <div className="logo">Jim</div>
      </div>
      <div className="searchContainer">
        <BiSearchAlt className="icon" />
        <input
          className="searchInput"
          type="search"
          name=""
          id=""
          placeholder="Collection, item or user"
        />
      </div>
      <div className="mobile_response">
        <div
          className={`phone__nav__icon `}
          onClick={() => setToggler(!toggler)}
          tabIndex="0"
        >
          <div className={toggler ? "hamInner active" : "hamInner"}></div>
        </div>
        <div className={`mobile_response_nav ${toggler ? "active" : ""}`}>
          <div className="navItems">
            <div className="navItems_item">Drops</div>
            <div className="navItems_item">Marketplace</div>
            <div className="navItems_item">Create</div>
          </div>
          <div className="actions">
            <div className="actions_items">
              <HiSun />
            </div>
            <div className="actions_items">Get in</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 20px;
  @media (max-width: 548px) {
    padding: 10px;
  }
  .logoContainer {
    .logo {
      font-size: 25px;
      font-weight: 600;
    }
  }
  .searchContainer {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* border: 2px solid #61dafb; */
    background-color: #1c1c1e;
    flex: 1;
    border-radius: 50px;
    height: 35px;
    min-width: 100px;
    padding-right: 10px;
    .icon {
      margin: auto 10px;
      color: #eee;
    }
    .searchInput {
      height: 100%;
      width: 100%;
      background: transparent;
      border: none;
      outline: none;
      color: #eee;
    }
  }
  .mobile_response {
    &_nav{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
      @media (max-width: 600px) {
        display: none;
        &.active {
          display: grid;
          grid-template-columns: 1fr;
          text-align: center;
          align-items: center;
          justify-content: flex-start;
          gap: 15px; 
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          height: 100vh;
          width: 80%;
          background: hsl(220deg 13% 18% / 96%);
          padding: 20px;
          .navItems{
          display: grid;
          align-items: center;
          gap: 15px; 
          }
        }
      }
    }
    .phone__nav__icon {
      margin: auto 0px;
      position: relative !important;
      outline: none;
      height: 30px;
      width: 30px;
      @media (min-width: 601px) {
        display: none;
      }
      .hamInner {
        transition: all cubic-bezier(0.67, -0.62, 0, 1.53) 300ms;
        z-index: 12;
        position: absolute;
        top: 50%;
        right: 0px;
        width: 25px;
        height: 2px;
        border-radius: 4px;
        background: linear-gradient(to right,#59f9b7,#66feea);;
        transform: rotate(0deg);
        &::after {
          transition: all cubic-bezier(0.67, -0.62, 0, 1.53) 300ms;
          bottom: -10px;
          transform: rotate(0deg);
          content: "";
          display: block;
          position: absolute;
          right: 0px;
          width: 25px;
          height: 2px;
          border-radius: 4px;
          background: linear-gradient(to right,#59f9b7,#66feea);;
        }
        &::before {
          transition: all cubic-bezier(0.67, -0.62, 0, 1.53) 300ms;
          top: -10px;
          opacity: 1;
          content: "";
          display: block;
          position: absolute;
          right: 0px;
          width: 25px;
          height: 2px;
          border-radius: 4px;
          background: linear-gradient(to right,#59f9b7,#66feea);;
        }
        &.active {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          width: 0;
          height: 0;
          border-radius: 4px;
          background: linear-gradient(to right,#59f9b7,#66feea);;
          transform: rotate(0deg);
          &::after {
            content: "";
            display: block;
            position: absolute;
            top: 12px;
            bottom: 0;
            right: 0;
            left: 2.5px;
            width: 30px;
            height: 2px;
            border-radius: 4px;
            background: linear-gradient(to right,#59f9b7,#66feea);;
            transition-timing-function: ease;
            transition-duration: 0.15s;
            transition-property: transform;
            transform: rotate(45deg);
          }
          &::before {
            opacity: 1;
            content: "";
            display: block;
            position: absolute;
            top: 12px;
            bottom: 0;
            right: 0;
            left: 2.5px;
            width: 30px;
            height: 2px;
            border-radius: 4px;
            background: linear-gradient(to right,#59f9b7,#66feea);;
            transition-timing-function: ease;
            transition-duration: 0.15s;
            transition-property: transform;
            transform: rotate(-45deg);
          }
        }
      }
  }
  .navItems {
    display: flex;
    align-items: center;
    gap: 15px;
    color: #eee;
    font-weight: 600;
    &_item {
      cursor: pointer;
    }
  }
  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    &_items {
      &:nth-child(1) {
        color: #eee;
        background: #1c1c1e;
        border-radius: 50%;
        padding: 5px 7px 3px;
        font-size: 22px;
        object-fit: contain;
      }
      &:nth-child(2) {
        text-transform: uppercase;
        color: #eee;
        cursor: pointer;
        background: linear-gradient(to right, #59f9b7, #66feea);
        border-radius: 40px;
        padding: 10px 20px;
        color: #000;
        font-weight: 600;
      }
    }
  }
`;

export default Header;
