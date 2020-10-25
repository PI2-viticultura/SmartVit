import React, {useState} from 'react';
import './style.css';
import '../../globals/globalStyle.css';
import api from '../../services/api';
import Stepper from '../../components/stepper';
import GaugeChart from 'react-gauge-chart';


function Indicator(){
    const [fuzzy, setFuzzy] = useState([]);
    let var_fuzzy = [];

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
            <Stepper days={10}/>
            <div className="board">
                Qualidade da vinícola
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
    
    )
}

export default Indicator;
