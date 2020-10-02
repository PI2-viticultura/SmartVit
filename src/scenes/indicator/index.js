import React, {useState} from 'react';
import './style.css';
import '../../globals/globalStyle.css';
import { Tab } from '@chakra-ui/core';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure
} from "@chakra-ui/core";

function Indicator(){
    
    const cycleText = ['brotacao', 'crescimento',' Em um período de 42 a 100 dias, sua videira entra na fase de Floração e Vingamento. Durante essas fases do ciclo começam a surgir os pequenos cachos com minúsculas flores, que se apresentam para a fertilização (que pode variar de vinha para vinha, já que há variedades que realizam este processo antes da floração, ou então que precisam de outras variedades presentes para dar prosseguimento ao processo).', 'pintor', 'maturacao'];
    const [cycleIndex, setCycleIndex] = useState(0);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [days, setDays] = useState(0);
    return (
    <div className="step-container">
        <table>
                <tr>
                    <td><div onClick={() => {setCycleIndex(0); onOpen()}} className="text-center step-target"> Brotação</div></td>
                    <td></td>
                    <td><div onClick={() => {setCycleIndex(1); onOpen()}} className="text-center step-target"> Crescimento</div></td>
                    <td></td>
                    <td><div onClick={() => {setCycleIndex(2); onOpen()}} className="text-center step-target"> Floração e Vingamento</div></td>
                    <td></td>
                    <td><div onClick={() => {setCycleIndex(3); onOpen()}} className="text-center step-target"> Pintor</div></td>
                    <td></td>
                    <td><div onClick={() => {setCycleIndex(4); onOpen()}} className="text-center step-target"> Maturação</div></td>
                </tr>
        </table>
        <table>
                <tr>
                    <td>{days >= 0 ? <div className="step">
                        <div className="step-inner"></div></div>:<div className="step">
                        <div className="step-inner-disabled"></div></div>}</td>
                    <td><div className="step-line-container">
                        <div className="step-line"></div></div></td>
                    <td>{days >= 28 ? <div className="step">
                        <div className="step-inner"></div></div>:<div className="step">
                        <div className="step-inner-disabled"></div></div>}</td>
                    <td><div className="step-line-container">
                        <div className="step-line"></div></div></td>
                    <td>{days >= 42 ? <div className="step">
                        <div className="step-inner"></div></div>:<div className="step">
                        <div className="step-inner-disabled"></div></div>}</td>
                    <td><div className="step-line-container">
                        <div className="step-line"></div></div></td>
                    <td>{days >= 91 ? <div className="step">
                        <div className="step-inner"></div></div>:<div className="step">
                        <div className="step-inner-disabled"></div></div>}</td>
                    <td><div className="step-line-container">
                        <div className="step-line"></div></div></td>
                    <td>{days >= 130 ? <div className="step">
                        <div className="step-inner"></div></div>:<div className="step">
                        <div className="step-inner-disabled"></div></div>}</td>
                </tr>
        </table>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Floração e Vingamento</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {cycleText[cycleIndex]}
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
    )
}

export default Indicator;
