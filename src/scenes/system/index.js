import React, { useState, useEffect } from "react";
import apiSystem from "../../services/api-system";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionIcon,
  Box,
  AccordionPanel,
  Heading,
  Stack,
  Grid,
  Button,
  Flex,
  Skeleton,
  Alert,
  AlertIcon
} from "@chakra-ui/core";
import DataTable from "react-data-table-component";

import "./style.css";
import { useHistory } from "react-router-dom";

//import system from "../../utils/mock";

const acionarSistema = async (history) => {
  history.push({
    pathname: "/support",
    state: null,
  });
};

function System() {
  const [systems, setSystem] = useState([]);
  const [error, setError] = useState(false);
  const history = useHistory();

  const makeRequest = async () => {
    await apiSystem.get("/system").then(
      (res) => {
        setSystem(res.data);
      },
      (err) => {
        setError(true);
        console.error(error);
      }
    );
  };

  useEffect(() => {
    makeRequest();
  }, []);

  const columns = [
    {
      name: "Dia",
      selector: "data",
      sortable: true,
    },
    {
      name: "Medição",
      selector: "motivo_acao",
      sortable: true,
    },
  ];

  return (
    <div className="main">
      {error === true && (
        <Alert status="error" variant="solid">
          <AlertIcon />
          Aconteceu um erro na sua requisição, por favor tente novamente!
        </Alert>
      )}
      {systems.length != 0 ? (
        <Flex flexDirection="column">
          {systems.map((element) => (
            <div key={element.name}>
              <Accordion allowToggle>
                <AccordionItem>
                  <AccordionHeader>
                    <Box flex="1" textAlign="left">
                      {element.name}
                    </Box>
                    <AccordionIcon />
                  </AccordionHeader>
                  <AccordionPanel pb={4}>
                    <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                      <Stack spacing={3}>
                        <Heading as="h4" size="sm">
                          Sensores
                        </Heading>
                        {element.sensors.map((el) => (
                          <div key={el.sensor} className="div-sensores">
                            {el.sensor}
                          </div>
                        ))}
                      </Stack>
                      <Button
                        variantColor="teal"
                        size="md"
                        onClick={() => {
                          acionarSistema(history);
                        }}
                      >
                        ACIONAR SUPORTE
                      </Button>
                    </Grid>
                    <Stack spacing={3}>
                      <Heading as="h4" size="sm">
                        Sistema de {element.name}
                      </Heading>
                      <div className="div-lancamentos">
                        Último acionamento: 30/12/20 às 14:00
                      </div>
                    </Stack>

                    <Accordion className="accord-historico" allowToggle>
                      <AccordionItem>
                        <AccordionHeader>
                          <Box flex="1" textAlign="left">
                            Histórico
                          </Box>
                          <AccordionIcon />
                        </AccordionHeader>
                        <AccordionPanel pb={4}>
                          <DataTable
                            columns={columns}
                            data={element.monitoring}
                            defaultSortField="day"
                            pagination={true}
                          />
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </Flex>
      ) : (
        <Stack className="stack-sk">
          <Skeleton className="skeleton" height="30px" />
          <Skeleton className="skeleton" height="30px" />
          <Skeleton className="skeleton" height="30px" />
        </Stack>
      )}
    </div>
  );
}

export default System;
