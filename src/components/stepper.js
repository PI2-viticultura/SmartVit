import React, {useState} from 'react';
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
import PropTypes from 'prop-types';

Stepper.propTypes = {
    days: PropTypes.number.isRequired,
};

function Stepper({days}){
    
    const cycleTitles = ['Brotação', 'Crescimento', 'Floração e Vingamento', 'Pintor', 'Maturação'];
    const cycleDates = ['0 a 27 dias', '28 a 41 dias', '42 a 90 dias', '91 a 129 dias', 'Acima de 130 dias'];
    const cycleText = ['Agora aguardar a germinação da uva, atente-se a todos os cuidados necessários para que a planta cresça saudavél.',
                       'Começa a surgir folhas do gomo dando origem ao crescimento de um pâmpano - ramo de onde surgem novas folhas e, por fim, as inflorescências.',
                       'Durante essa fase começam a surgir os pequenos cachos com minúsculas flores, que se apresentam para a fertilização.',
                       'Os bagos de uva deixam de ser verdes e duros e passam a ter elasticidade e cor tinto, translúcido ou amarelado',
                       'Pode começar a fazer a colheita, pois a uva recomeça a crescer em volume com migração da água e de seu açúcar.'];
    const [cycleIndex, setCycleIndex] = useState(0);
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div className="step-container">
            <table>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

            <div className="steps">
                <div className="step-item">
                    {days >= 0 ? (
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
                    )}
                    <div className="step-text" onClick={() => {setCycleIndex(1); onOpen()}}> Brotação</div>
                </div>
                <div className="step-line-container">
                    <div className="step-line"></div>
                </div>
                <div className="step-item">
                    {days >= 28 ? (
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
                    )}
                    <div className="step-text" onClick={() => {setCycleIndex(1); onOpen()}}> Crescimento</div>
                </div>
                <div className="step-line-container">
                    <div className="step-line"></div>
                </div>
                <div className="step-item">
                    {days >= 42 ? (
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
                    )}
                    <div className="step-text" onClick={() => {setCycleIndex(2); onOpen()}}> Floração e Vingamento</div>
                </div>
                <div className="step-line-container">
                    <div className="step-line"></div>
                </div>

                <div className="step-item">
                    {days >= 91 ? (
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
                    )}
                    <div className="step-text" onClick={() => {setCycleIndex(3); onOpen()}}> Pintor</div>
                </div>
                <div className="step-line-container">
                    <div className="step-line"></div>
                </div>
                <div className="step-item">
                    {days >= 130 ? (
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
                    )}
                    <div className="step-text" onClick={() => {setCycleIndex(4); onOpen()}}> Maturação</div>
                </div>
            </div>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>
                    {cycleTitles[cycleIndex]}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p>{cycleDates[cycleIndex]}</p><br/>
                    {cycleText[cycleIndex]}
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default Stepper;
