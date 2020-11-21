import React, {useState} from 'react';
import Chart from "chart.js";
import './style.css';
import '../../globals/globalStyle.css';
import apiWinery from '../../services/api-winery';
import apiIndicator from '../../services/api-indicator';
import Stepper from '../../components/stepper';
import GaugeChart from 'react-gauge-chart';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
  } from "@chakra-ui/core";


function Indicator(){
    let refs = [React.createRef(), React.createRef(), React.createRef(), React.createRef()];
    let qualityChartRef = React.createRef();
    const [fuzzy, setFuzzy] = useState([]);
    const [systems, setSystems] = useState([]);
    const [days, setDays] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [ph, setPh] = useState(0);
    const [celsius, setCelsius] = useState(0);
    const [wind, setWind] = useState(0);
    const [showGraph, setShowGraph] = useState(-1);
    const [winery, setWinery] = useState(null);

    React.useEffect(() => {
        const user = localStorage.getItem("user");
        const getWinery = async () => {
            await apiWinery.get("/winery_by_user/" + user,
            {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
            }).then((res) => {
                setWinery(res.data._id.$oid);
            }).catch((error) => {
            });
        }
        getWinery();
    }, []);

    React.useEffect(() => {
        if(systems.length > 0) {
            systems.map((system, i) => {
                const myChartRef = refs[i].current.getContext("2d");
                
                new Chart(myChartRef, {
                    type: "line",
                    data: {
                        labels: [...system.humidity_percent.keys()],
                        datasets: [
                            {
                                label: "pH",
                                data: system.sensor_ph,
                                pointBackgroundColor: "#fff",
                                borderColor: "#7597C5",
                                backgroundColor: "#7496C4"
                            },
                            {
                                label: "Temperatura",
                                data: system.temp_celsius,
                                pointBackgroundColor: "#fff",
                                borderColor: "#F7AB79",
                                backgroundColor: "#F7AB79"
                            },
                            {
                                label: "Umidade",
                                data: system.humidity_percent,
                                pointBackgroundColor: "#fff",
                                borderColor: "#ABDFFF",
                                backgroundColor: "#ABDFFF"
                            }
                        ]
                    },
                    options: {
                        //Customize chart options
                    }
                });
            });
        }
    }, [systems]);

    React.useEffect(() => {
        if (fuzzy.length > 0){
            const myChsartRef = qualityChartRef.current.getContext("2d");
            
            new Chart(myChsartRef, {
                type: "line",
                data: {
                    labels: [...fuzzy.keys()],
                    datasets: [
                        {
                            label: "qualidade",
                            data: fuzzy.length > 0 ? fuzzy : 0,
                            pointBackgroundColor: fuzzy.map((item) => (item <= 35 ? "#EA4228" : item <= 70 ? "#F5CD19" : "#5BE12C")),
                            borderColor: "#91d0f7",
                            backgroundColor: "#ABDFFF",
                            pointRadius: 4,
                        }
                    ]
                },
                options: {
                    //Customize chart options
                }
            });
        }
    }, [fuzzy]);

    React.useEffect(() => {

        async function fetchData() {
                await apiIndicator.get("/indicators/" + winery,
                {
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest"
                }).then((res) => {
                    setDays(res.data.days);
                    setFuzzy(res.data.fuzzy);
                    setHumidity(res.data.general_indicators.humidity_percent);
                    setPh(res.data.general_indicators.sensor_ph);
                    setCelsius(res.data.general_indicators.temp_celsius);
                    setWind(res.data.general_indicators.vento_MS);
                    setSystems(res.data.systems);
                }).catch((error) => {
                });
        }

        fetchData();
    }, [winery]);

    return (
        <div>
            <div className="page-title">Dashboard</div>
            
            <div className="indicator-container">
                <div className="indicator">
                    <div>
                        <img
                            height={60}
                            alt="..."
                            src={require("../../imgs/ph-icon.png")}
                        />
                    </div>
                    <div>
                        <div className="ph-value">{Math.round(ph * 100)/100}</div>
                        <div className="ph-label">pH do solo</div>
                    </div>
                    <div className="popover-container">
                        <Popover>
                            <PopoverTrigger>
                                <button>?</button>
                            </PopoverTrigger>
                            <PopoverContent zIndex={4}>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader>Confirmation!</PopoverHeader>
                                <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>

                <div className="indicator">
                    <div>
                        <img
                            height={60}
                            alt="..."
                            src={require("../../imgs/umidade-icon.png")}
                        />
                    </div>
                    <div>
                        <div className="umidade-value">{Math.round(humidity * 100)/100}%</div>
                        <div className="umidade-label">Umidade</div>
                    </div>
                    <div className="popover-container">
                        <Popover>
                            <PopoverTrigger>
                                <button>?</button>
                            </PopoverTrigger>
                            <PopoverContent zIndex={4}>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader>Confirmation!</PopoverHeader>
                                <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>

                <div className="indicator">
                    <div>
                        <img
                            height={60}
                            alt="..."
                            src={require("../../imgs/temperatura-icon.png")}
                        />
                    </div>
                    <div>
                        <div className="temperatura-value">{Math.round(celsius * 100)/100}ºC</div>
                        <div className="temperatura-label">Temperatura</div>
                    </div>
                    <div className="popover-container">
                        <Popover>
                            <PopoverTrigger>
                                <button>?</button>
                            </PopoverTrigger>
                            <PopoverContent zIndex={4}>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader>Confirmation!</PopoverHeader>
                                <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>

                <div className="indicator">
                    <div>
                        <img
                            height={60}
                            alt="..."
                            src={require("../../imgs/vento-icon.png")}
                        />    
                    </div>
                    <div>
                        <div className="vento-value">{Math.round(wind * 100)/100} km/h</div>
                        <div className="vento-label">Vento</div>
                    </div>
                    <div className="popover-container">
                        <Popover>
                            <PopoverTrigger>
                                <button>?</button>
                            </PopoverTrigger>
                            <PopoverContent zIndex={4}>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader>Confirmation!</PopoverHeader>
                                <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>
            
            <div>
                <Stepper days={days}/>
            </div>
            <div className="quality-main">
                <div className="quality-header">
                    <div></div>
                    <div className="quality-title">
                        Qualidade da vinícola
                    </div>
                    <div className="popover-container">
                        <Popover>
                            <PopoverTrigger>
                                <button>?</button>
                            </PopoverTrigger>
                            <PopoverContent zIndex={4}>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader>Confirmation!</PopoverHeader>
                                <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <div className="quality-graphs">
                    <div className="quality-chart">
                        <canvas
                            id="quality-chart-okok"
                            ref={qualityChartRef}
                        />
                    </div>
                    <div className="quality-gauge">
                        <GaugeChart id="gauge-chart5"
                            nrOfLevels={420}
                            textColor={"#591b2b"}
                            needleColor={"#591b2b"}
                            needleBaseColor={"#591b2b"}
                            arcsLength={[0.35, 0.35, 0.3]}
                            colors={['#EA4228', '#F5CD19', '#5BE12C']}
                            percent={fuzzy.length > 0 ? fuzzy[fuzzy.length - 1]/100 : 0}
                            arcPadding={0.01}
                        />
                    </div>
                </div>
            </div>
            {systems.length > 0 && refs.map((chartRef, i) => {
                if (i < systems.length){
                return (<div key={i} className="system-graph-container" >
                    <div className="system-graph-item" onClick={() => { showGraph == i ? setShowGraph(-1) : setShowGraph(i)}}>
                        Sistema X: {systems[i].sensor_ph[systems[i].sensor_ph.length - 1]} pH -
                         {' ' + systems[i].humidity_percent[systems[i].humidity_percent.length - 1]}% umidade - 
                         {' ' + systems[i].temp_celsius[systems[i].temp_celsius.length - 1]}ºC temperaura
                        {showGraph == i ?
                        <img
                            height={12}
                            alt="..."
                            src={require("../../imgs/pin-icon.png")}
                        />
                        :
                        <img
                            height={12}
                            alt="..."
                            src={require("../../imgs/inverted-pin-icon.png")}
                        />
                        }
                    </div>
                    <div className="graph" style={showGraph == i ? {display: "block"} : {display: "none"}}>
                        <canvas
                            id={i}
                            ref={chartRef}
                        />
                    </div>
                </div>)}
            })
                
            }
        </div>
    
    )
}

export default Indicator;
