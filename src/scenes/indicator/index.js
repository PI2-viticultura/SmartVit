import React, {useState} from 'react';
import Chart from "chart.js";
import './style.css';
import '../../globals/globalStyle.css';
import api from '../../services/api';
import Stepper from '../../components/stepper';
import GaugeChart from 'react-gauge-chart';


function Indicator(){
    let chartRef = React.createRef();
    let qualityChartRef = React.createRef();
    const [fuzzy, setFuzzy] = useState([]);
    const [showGraph, setShowGraph] = useState(-1);
    let var_fuzzy = [];

    React.useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March", "May"],
                datasets: [
                    {
                        label: "pH",
                        data: [7, 5, 0, 15],
                        pointBackgroundColor: "#fff",
                        borderColor: "#7597C5",
                        backgroundColor: "#7496C4"
                    },
                    {
                        label: "Temperatura",
                        data: [25, 26, 32, 18],
                        pointBackgroundColor: "#fff",
                        borderColor: "#F7AB79",
                        backgroundColor: "#F7AB79"
                    },
                    {
                        label: "Umidade",
                        data: [60, 55, 38, 25],
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
    }, []);

    React.useEffect(() => {
        const myChartRef = qualityChartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March", "May"],
                datasets: [
                    {
                        label: "qualidade",
                        data: [60, 55, 38, 25, 0],
                        pointBackgroundColor: ["#EA4228", "#F5CD19", "#5BE12C", "#fff"],
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
    }, []);

    React.useEffect(() => {
        let repeat;

        async function fetchData() {
            try {
                await api.get("/indicators/5f94f5b50b77b6edabdaea00",
                {
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest"
                }).then((res) => {
                    var_fuzzy = res.data.filter((element) => typeof element.value === "number");
                    setFuzzy(var_fuzzy);
                    console.log(var_fuzzy[0].value)
                }).catch((error) => {
                });
                repeat = setTimeout(fetchData, 900000); // request again after a minute
            } catch (error) {
                console.error(error.message);
                repeat = setTimeout(fetchData, 900000);
            }
        }

        fetchData();

        return () => {
            if (repeat) {
                clearTimeout(repeat);
            }
        }
    }, []);
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
                        <div className="ph-value">7.0</div>
                        <div className="ph-label">pH do solo</div>
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
                        <div className="umidade-value">40%</div>
                        <div className="umidade-label">Umidade</div>
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
                        <div className="temperatura-value">34ºC</div>
                        <div className="temperatura-label">Temperatura</div>
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
                        <div className="vento-value">7.0 km/h</div>
                        <div className="vento-label">Vento</div>
                    </div>
                </div>
            </div>
            
            <div>
                <Stepper days={10}/>
            </div>
            <div className="quality-main">
                <div className="quality-title">
                    Qualidade da vinícola
                </div>
                <div className="quality-graphs">
                    <div className="quality-chart">
                        <canvas
                            id="myChart"
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
                            percent={fuzzy.length > 0 ? fuzzy[0].value/100 : 0}
                            arcPadding={0.01}
                        />
                    </div>
                </div>
            </div>
            <div className="system-graph-container">
                <div className="system-graph-item" onClick={() => { showGraph == 1 ? setShowGraph(-1) : setShowGraph(1)}}>
                    Sistema X    7.0 pH - 40% umidade - 34ºC temperaura
                    {showGraph == 1 ?
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
                <div className="graph" style={showGraph == 1 ? {display: "block"} : {display: "none"}}>
                    <canvas
                        id="myChart"
                        ref={chartRef}
                    />
                </div>
            </div>
        </div>
    
    )
}

export default Indicator;
