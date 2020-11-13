import React, { useState } from 'react';
import {
    Alert,
    AlertIcon,
    Box,
    Button,
    FormControl,
    FormLabel,
    Grid,
    Heading,
    Input,
    Link

} from "@chakra-ui/core";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import apiPest from '../../services/api-pest';
import { Link as ReachLink } from "@reach/router"
import DataTable from "react-data-table-component";
import './style.css';
import '../../globals/globalStyle.css';

function PestList(){
    let data = [
        {type: 'cochonilha', start: '23/05/2020', end: '25/10/2020', action: '', observation: ''},
        {type: 'ácaro rajado', start: '10/07/2020', end: '25/08/2020', action: '', observation: ''}
    ]

    const columns = [
        {
          name: "Tipo",
          selector: "type",
          sortable: true,
        },
        {
          name: "Início",
          selector: "start",
          sortable: true,
        },
        {
          name: "Fim",
          selector: "end",
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