import { useLocation, useNavigate, Link } from "react-router-dom";

import { useState } from "react";
import React from "react";

import { useAuth } from "../../context/auth-context";

import img00 from "../../assets/img/background.jpg";

import icon00 from "../../assets/svg/icon00.svg";
import icon02 from "../../assets/svg/icon02.svg";
import icon03 from "../../assets/svg/icon03.svg";

import "./index.css";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  InputRightElement,
  InputGroup,
  Box,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { Icon } from "@chakra-ui/react";

function Access() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const from = location.state?.from?.pathname || "/home";

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    await signin({ email, password });
    navigate(from, { replace: true });
    console.log(event);
  }

  return (
    <div className="login">
      <div className="login-img">
        <img className="img" src={img00}></img>
        <img className="icon" src={icon00}></img>
        <h1 className="title_img">Comece agora. Conecte-se já.</h1>
      </div>
      {/*       <p>Você precisa estar logado para ver a página {from}</p> */}

      <div className="login-form">
        <h1 className="info_page">Login</h1>

        <Box textAlign="start">
          <form className="form" onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel className="form_label-E-mail" htmlFor="email">
                E-mail:
                <Input
                  bg="transparent"
                  focusBorderColor="#00acc1"
                  errorBorderColor="red.300"
                  name="email"
                  type="text"
                  placeholder="E-mail"
                />
              </FormLabel>
              <FormLabel className="form_label-Senha" htmlFor="password">
                Senha:
                <InputGroup>
                  <Input
                    focusBorderColor="#00acc1"
                    errorBorderColor="red.300"
                    name="password"
                    type={show ? "text" : "password"}
                    placeholder="Senha:"
                  />
                  <InputRightElement>
                    <Button
                      _hover={{ background: "none" }}
                      _active={{ background: "none" }}
                      _focus={{ boxShadow: "none" }}
                      border="none"
                      onClick={handleClick}
                    >
                      {show ? (
                        <Icon as={ViewIcon} />
                      ) : (
                        <Icon as={ViewOffIcon} />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormLabel>
              <Button
                _hover={{ background: "#00acc1" }}
                _active={{ background: "#00acc1" }}
                _focus={{ boxShadow: "none" }}
                backgroundColor="#00acc1"
                color="white"
                className="form_btn"
                type="submit"
                w="full"
              >
                Entrar
              </Button>
            </FormControl>
          </form>
        </Box>

        {/*   <form className="form">
          <label className="form_label-E-mail">
            E-mail: <input name="email" type="text" placeholder="E-mail" />
          </label>
          <label className="form_label-Senha">
            Senha:
            <input
              name="password"
              type="password"
              placeholder="Senha"
              icon01={icon01}
            />
            <img className="icon-input" src={icon01}></img>
          </label>
          <button className="form_btn" type="submit">
            Entrar
          </button>
        </form> */}

        <div className="info_link">
          <p className="info_link_text">
            Ainda não possui uma conta?<br></br>
            <Link className="info_link_text-link" to="/">
              Cadastrar-se
            </Link>
          </p>
        </div>
        <div className="login-img">
          <img className="login-img-icon" src={icon02}></img>
          <img className="login-img-icon" src={icon03}></img>
        </div>
      </div>
    </div>
  );
}

export default Access;
