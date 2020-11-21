import React, { useState } from 'react';
import { Box } from "@chakra-ui/core";
import "react-datepicker/dist/react-datepicker.css";
import DataTable from "react-data-table-component";
import apiPest from '../../services/api-pest';
import apiWinery from '../../services/api-winery';
import './style.css';
import '../../globals/globalStyle.css';

function PestList(){
    const [winery, setWinery] = useState(null);
    const [data, setData] = useState([]);

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
        const startPest = async () => {
            await apiPest.get("/pest_by_winery/" + winery,
            {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
            }).then((res) => {
                console.log(res.data)
                setData(res.data);
            }).catch((error) => {
            });
        };
        startPest();
    }, [winery]);

    const columns = [
        {
          name: "Tipo",
          selector: "type",
          sortable: true,
        },
        {
          name: "Início",
          selector: "startTime",
          sortable: true,
        },
        {
          name: "Fim",
          selector: "endTime",
          sortable: true,
        },
        {
          name: "Ação tomada",
          selector: "action",
          sortable: true,
        },
        {
          name: "Observações",
          selector: "observation",
          sortable: true,
        },
    ];

    return (
        <div className="main">
            <Box className="p-5" bg="#FFFFFF" rounded="md">
                <a href="/pest">
                    Cadastrar praga
                </a>
                <DataTable
                    columns={columns}
                    data={data}
                    defaultSortField="start"
                    pagination={true}
                />
            </Box>
        </div>
    )
}

export default PestList;