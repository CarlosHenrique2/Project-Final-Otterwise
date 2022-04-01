import { useState } from "react";
import React from "react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth-context";

import profile from "../../../assets/img/profiledog.jpg";
import iconexit from "../../../assets/svg/iconexit.svg";
import icon02 from "../../../assets/svg/icon02.svg";
import icon03 from "../../../assets/svg/icon03.svg";

import "./index.css";
import "../../../global/global.css";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  Img,
  Link,
  Box,
  HStack,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

function Feed() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showModal, setShowModal] = useState(false);

  let auth = useAuth();
  let navigate = useNavigate();

  const handleClose = () => {
    onClose();
    setShowModal(true);
  };

  return (
    <Box
      className="feed-mobile"
      display="flex"
      alignItems="center"
      boxShadow="0px 0px 1px grey"
    >
      <HStack spacing="50">
        <Box display="flex" alignItems="center" justifyContent="center">
          <Button
            _hover={{ background: "none" }}
            _active={{ background: "none" }}
            _focus={{ boxShadow: "none" }}
            colorScheme="teal"
            background="none"
            color="#00acc1"
            size="lg"
            onClick={onOpen}
          >
            <HamburgerIcon bgSize="lg" />
          </Button>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Img src={icon02} w="30px" />
          <Img src={icon03} w="80px" />
        </Box>
      </HStack>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Img src={profile} />
          </DrawerHeader>

          <DrawerBody
            display="flex"
            alignItems="flex-start"
            flexDirection="column"
            textAlign="center"
            size="xs"
          >
            <Link
              _focus={{ background: "#E6F7F9" }}
              _active={{ borderLeft: "5px solid #00ACC1" }}
              _hover={{ textStyle: "none" }}
              marginTop="16px"
              w="full"
              to="/home"
            >
              Home
            </Link>
            <Link
              _focus={{ background: "#E6F7F9" }}
              _active={{ borderLeft: "5px solid #00ACC1" }}
              _hover={{ textStyle: "none" }}
              marginTop="16px"
              w="full"
              to="/profile"
            >
              Meu perfil
            </Link>
            <Button
              _hover={{ background: "none" }}
              _active={{ background: "none" }}
              _focus={{ boxShadow: "none" }}
              focusBorderColor="#00acc1"
              marginTop="48px"
              bg="transparent"
              w="full"
              onClick={handleClose}
            >
              <Img src={iconexit} w="30px" /> Sair
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Modal
        display="flex"
        alignItems="center"
        size="xs"
        w="full"
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display="flex" margin="0" padding="0" textAlign="start">
            Sair desta conta?
          </ModalHeader>
          <ModalBody display="flex" margin="0" padding="0" textAlign="start">
            Deseja realmente sair desta conta?
          </ModalBody>
          <ModalFooter
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            w="full"
          >
            <Button
              _hover={{ background: "none" }}
              _active={{ background: "none" }}
              _focus={{ borderColor: "none" }}
              focusBorderColor="#00acc1"
              borderColor="#00acc1"
              paddingLeft="40px"
              paddingRight="40px"
              bg="transparent"
              color="#00acc1"
              onClick={() => {
                auth.signout(() => navigate("/"));
              }}
            >
              Sair
            </Button>
            <Button
              _hover={{ background: "#00acc1" }}
              _active={{ background: "#00acc1" }}
              _focus={{ border: "#00acc1" }}
              focusBorderColor="#00acc1"
              backgroundColor="#00acc1"
              paddingLeft="40px"
              paddingRight="40px"
              bg="transparent"
              color="white"
              mr={3}
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Feed;
