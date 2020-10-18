import React, {useState} from 'react';
import './style.css';
import '../../globals/globalStyle.css';
import { FaSeedling } from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import { IoIosColorPalette } from "react-icons/io";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/core";

function Indicator(){
    
    const cycleTitles = ['Brotação', 'Crescimento', 'Floração e Vingamento', 'Pintura', 'Maturação'];
    const cycleText = ['Aguarde a germinação da uva, atente-se a todos os cuidados necessários para que a planta cresça saudável.',
                       'Surgirão as folhas do gomo dando origem ao crescimento de um pâmpano (ramo de onde surgem as novas folhas) e, por fim, as inflorescências.',
                       'Começam a surgir os pequenos cachos com minúsculas flores, que se apresentam para realizar a fertilização.',
                       'Os bagos de uva deixam de ser verdes e duros e passam a ter elasticidade e cor tinto, translúcido ou amarelado.',
                       'Pode começar a fazer a colheita, pois a uva recomeça a crescer em volume com migração da água e de seu açúcar.'];
    const [cycleIndex, setCycleIndex] = useState(0);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [days, setDays] = useState(0);
    return (
    <div className="step-container">
        <table>
                <tr>
                    <td><div onClick={() => {setCycleIndex(1); onOpen()}} className="text-center step-target"> Brotação</div></td>
                    <td></td>
                    <td><div onClick={() => {setCycleIndex(1); onOpen()}} className="text-center step-target"> Crescimento</div></td>
                    <td></td>
                    <td><div onClick={() => {setCycleIndex(2); onOpen()}} className="text-center step-target"> Floração e Vingamento</div></td>
                    <td></td>
                    <td><div onClick={() => {setCycleIndex(3); onOpen()}} className="text-center step-target"> Pintura</div></td>
                    <td></td>
                    <td><div onClick={() => {setCycleIndex(4); onOpen()}} className="text-center step-target"> Maturação</div></td>
                </tr>
        </table>
        <table>
                <tr>
                    <td>{days >= 0 ? (
                        <div className="step" onClick={() => {setCycleIndex(0); onOpen()}}>
                            <div className="step-inner">
                                <header className="icons-center-true">
                                    <FaSeedling />
                                </header>
                            </div>
                        </div>
                        ):(
                        <div className="step" onClick={() => {setCycleIndex(0); onOpen()}}>
                            <div className="step-inner-disabled">
                                <header className="icons-center-false">
                                    <FaSeedling />
                                </header>
                            </div>
                        </div>
                    )}</td>
                    <td>
                        <div className="step-line-container">
                            <div className="step-line"></div>
                        </div>
                    </td>
                    <td>{days >= 28 ? (
                        <div className="step" onClick={() => {setCycleIndex(1); onOpen()}}>
                            <div className="step-inner">
                                <header className="icons-center-true">
                                    <GiIcons.GiSeedling />
                                </header>
                            </div>
                        </div>
                        ):(
                        <div className="step" onClick={() => {setCycleIndex(1); onOpen()}}>
                            <div className="step-inner-disabled">
                                <header className="icons-center-false">
                                    <GiIcons.GiSeedling />
                                </header>
                            </div>
                        </div>
                    )}</td>
                    <td>
                        <div className="step-line-container">
                            <div className="step-line"></div>
                        </div>
                    </td>
                    <td>{days >= 42 ? (
                        <div className="step" onClick={() => {setCycleIndex(2); onOpen()}}>
                            <div className="step-inner">
                                <header className="icons-center-true">
                                    <GiIcons.GiFlowerPot />
                                </header>
                            </div>
                        </div>
                        ):(
                        <div className="step" onClick={() => {setCycleIndex(2); onOpen()}}>
                            <div className="step-inner-disabled">
                                <header className="icons-center-false">
                                    <GiIcons.GiFlowerPot />
                                </header>
                            </div>
                        </div>
                    )}</td>
                    <td>
                        <div className="step-line-container">
                            <div className="step-line"></div>
                        </div>
                    </td>
                    <td>{days >= 91 ? (
                        <div className="step" onClick={() => {setCycleIndex(3); onOpen()}}>
                            <div className="step-inner">
                                <header className="icons-center-true">
                                    <IoIosColorPalette />
                                </header>
                            </div>
                        </div>
                        ):(
                        <div className="step" onClick={() => {setCycleIndex(3); onOpen()}}>
                            <div className="step-inner-disabled">
                                <header className="icons-center-false">
                                    <IoIosColorPalette />
                                </header>
                            </div>
                        </div>
                    )}</td>
                    <td>
                        <div className="step-line-container">
                            <div className="step-line"></div>
                        </div>
                    </td>
                    <td>{days >= 130 ? (
                        <div className="step" onClick={() => {setCycleIndex(4); onOpen()}}>
                            <div className="step-inner">
                                <header className="icons-center-true">
                                    <GiIcons.GiGrapes />
                                </header>
                            </div>
                        </div>
                        ):(
                        <div className="step" onClick={() => {setCycleIndex(4); onOpen()}}>
                            <div className="step-inner-disabled">
                                <header className="icons-center-false">
                                    <GiIcons.GiGrapes />
                                </header>
                            </div>
                        </div>
                    )}</td>
                </tr>
        </table>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
              {cycleTitles[cycleIndex]}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {cycleText[cycleIndex]}
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
    )
}

export default Indicator;
