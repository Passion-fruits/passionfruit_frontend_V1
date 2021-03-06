import styled from "styled-components";
import { COLOR, INP_COLOR, WIDTH } from "../../style";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  border-bottom: 1px solid rgb(50, 50, 50);
  z-index: 300;
  background: rgb(5,5,5);
`;

export const Container = styled.div`
  width: ${WIDTH};
  padding-top: 10px;
  display: flex;
  align-items: center;
  :first-of-type {
    margin-top: 20px;
    justify-content: space-between;
  }
  .active {
    /* border-bottom: 2px solid white; */
    ::before {
      left: 0%;
    }
  }
`;

export const Logo = styled.span`
  font-size: 28px;
  font-family: Freestyle Script;
  b {
    color: red;
    &:last-of-type {
      color: ${COLOR.MAIN_COLOR};
    }
  }
`;

export const SearchBar = styled.div`
  width: 500px;
  height: 35px;
  background-color: ${COLOR.BACKGROUND_COLOR};
  margin-left: 10px;
  border-radius: 24px;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  i {
    color: ${INP_COLOR};
    font-size: 13px;
  }
`;

export const SearchInput = styled.input`
  font-size: 13px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  ::placeholder {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: ${INP_COLOR};
  }
  margin-left: 10px;
`;

export const Menu = styled(NavLink)`
  color: white;
  font-size: 13px;
  padding: 15px 0;
  margin-left: 45px;
  position: relative;
  overflow: hidden;
  font-weight: 600;
  color: rgb(230, 220, 200);
  &:first-of-type {
    margin: 0;
  }
  i {
    font-size: 13px;
    color: ${COLOR.YELLOW};
    margin-left: 5px;
  }
  ::before {
    content: "";
    color: blue;
    width: 100%;
    height: 15px;
    position: absolute;
    left: 0%;
    transition: 0.5s;
    bottom: 0;
    border-bottom: 1px solid white;
    left: -100%;
  }
  :hover::before {
    left: 0%;
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  float: right;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SignBtn = styled.button`
  background-color: ${COLOR.BACKGROUND_COLOR};
  border: none;
  padding: 5px 13px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 13px;
  transition: 0.3s;
  color:${COLOR.FONT_COLOR};
  :first-of-type {
    background-color: ${COLOR.YELLOW};
    color: black;
    margin-right: 10px;
  }
  :hover {
    opacity: 0.8;
  }
`;
