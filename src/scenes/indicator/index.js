import React, {useState} from 'react';
import './style.css';
import '../../globals/globalStyle.css';
import { Tab } from '@chakra-ui/core';

function Indicator(){
    
    const [days, setDays] = useState(0)
    return (
    <div className="step-container">
         <table>
                <tr>
                    <td><div className="text-center step-target"> Brotação</div></td>
                    <td></td>
                    <td><div className="text-center step-target">  Crescimento</div></td>
                    <td></td>
                    <td><div className="text-center step-target"> Floração e Vingamento</div></td>
                    <td></td>
                    <td><div className="text-center step-target"> Pintor</div></td>
                    <td></td>
                    <td><div className="text-center step-target"> Maturação</div></td>
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
       
    </div>
    )
}

export default Indicator;
