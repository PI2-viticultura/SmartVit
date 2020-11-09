import { Flex } from "@chakra-ui/core";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import apiSensor from "../../services/api-sensor";
import {
  Heading,
  Accordion,
  AccordionItem,
  AccordionHeader,
  Box,
  AccordionIcon,
  AccordionPanel,
  Button,
  IconButton,
} from "@chakra-ui/core";
import { RiDownload2Line } from "react-icons/ri";
import download from "../../utils/download"
import "./style.css";



function Sensor() {
  const [sensor, setSensor] = useState([]);
  var data = [];

  useEffect(() => {
    makeRequest();
  }, []);

  const columns = [
    {
      name: "Valor",
      selector: "valor",
      sortable: true,
    },
    {
      name: "Tipo",
      selector: "type",
      sortable: true,
    },
    {
      name: "Último registro",
      selector: "data",
      sortable: true,
    },
  ];

  const makeRequest = async () => {
    apiSensor.get("/sensor").then((result) => {
      console.log(result.data);
      setSensor(result.data);
    });
  };

  return (
    <div className="main">
      <Flex flexDirection="column">
        <div className="header">
          <Heading className="titulo" as="h3" size="lg">
            Dados Brutos Coletados
          </Heading>
        </div>
        {sensor.map(
          (element) => (
            data.push(
              element.last_record,
              element.location,
              element.situation,
              element.type
            ),
            (
              <div key={element._id.$oid}>
                <Accordion className="accord" allowToggle>
                  <AccordionItem>
                    <AccordionHeader>
                      <Box flex="1" textAlign="left">
                        Sensor {element.identifier}
                      </Box>
                      <AccordionIcon />
                    </AccordionHeader>
                    <AccordionPanel pb={4}>
                      <DataTable
                        columns={columns}
                        data={element.measurements}
                        defaultSortField="location"
                        pagination={true}
                      />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            )
          )
        )}
      </Flex>
      <IconButton className="btn-download" size="lg" icon={RiDownload2Line} onClick={() => {download(sensor)} }></IconButton>
    </div>
  );
}

export default Sensor;
