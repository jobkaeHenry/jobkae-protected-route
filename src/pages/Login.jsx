// import accessTokenAtom from "../recoil/accessToken.js";
// import { useSetRecoilState } from "recoil";
// import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { TokenAtom, isLoginSelector } from "../Recoil/TokenAtom";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const setAccessToken = useSetRecoilState(TokenAtom);
const isLogin = useRecoilValue(isLoginSelector);

  const navigate = useNavigate();

  const location = useLocation();

  const from = location?.state?.redirectedFrom?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/user/login", { id: id, pw: password }).then((res) => {
      console.log(res.data);
      setAccessToken(res.data.accessToken);
      navigate(from);
    });
  };
  
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputWrapper>
        ID
        <input
          type="text"
          autoFocus
          placeholder="아이디를 입력해주세요"
          onChange={(e) => {
            setId(e.target.value);
            console.log(id);
          }}
        />
      </InputWrapper>
      <InputWrapper>
        Password
        <input
          type="password"
          placeholder="패스워드를 입력해주세요"
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputWrapper>
      <Button type="submit">로그인</Button>
    </FormWrapper>
  );
};
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid #eee;
  align-items: flex-start;
  gap: 16px;
`;
const Button = styled.button`
  padding: 16px;
  width: 100%;
  background-color: #00a5ba;
  color: #fff;
`;
const InputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > input {
    padding: 8px 16px;
    border: 1px solid #eee;
  }
`;

export default Login;
