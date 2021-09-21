import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { List, DataTable } from 'react-native-paper';
import { PieChart } from "react-native-chart-kit";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel  } from "victory-native";

import {dataBar, dataPie} from  '../data/Data'

const Trabalho = () => {

    //DATA TABLE CONSTANTS
    const optionsPerPage = [2, 3, 4];
    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
    
    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);
    //DATA TABLE CONSTANTS   
   
    //CHARTS CONSTANTS
    const width = Dimensions.get('window').width
    const height = 220
    //CHARTS CONSTANTS    

  return (
       
      <ScrollView style={styles.screen}>
              <List.AccordionGroup>
                <List.Accordion title="Total Receita $" id="1" titleStyle={styles.text} style={styles.screen}>
                        <VictoryChart
                            domainPadding={{x: 40, y: 40}}
                            color={'#fff'}                            
                            style={{
                                parent: {
                                    border: "1px solid #ccc"
                                },
                                background: {
                                    fill: "#4B4952"
                                },
                            }}>
                            <VictoryAxis
                                tickLabelComponent={<VictoryLabel dy={0} dx={10} angle={55}/>}
                                tickValues={dataBar}
                                style={{
                                axis: {
                                    stroke: '#FFF'  //Muda a cor do eixo x
                                },
                                tickLabels: {
                                    fill: '#FFF' //Muda a cor da legenda do eixo x
                                }, 
                                grid: {
                                    stroke: '#FFF', //Muda a cor do eixo x nas 'grid lines'
                                    strokeDasharray: '4',
                                }
                                }}
                            />
                            <VictoryAxis
                                dependentAxis
                                tickFormat={(y) => y}
                                style={{
                                axis: {
                                    stroke: '#FFF'  //Muda a cor do eixo y
                                },
                                tickLabels: {
                                    fill: '#FFF' //Muda a cor da legenda do eixo y
                                }, 
                                grid: {
                                    stroke: '#FFF', //Muda a cor do eixo y nas 'grid lines'
                                    strokeDasharray: '4',
                                }
                                }}
                            />
                            <VictoryBar data={dataBar} 
                                    x="year"
                                    y="earnings"
                                    barRatio={1}               
                                    style={{
                                    data: {
                                        fill: ({ datum }) => datum.fill || 'black'                             
                                    }
                                    }}
                            />
                        </VictoryChart>                    
                  
                </List.Accordion>

              <List.Accordion title="Top 5 - Contratos" id="2" titleStyle={styles.text} style={styles.screen}>
                <PieChart
                      data={dataPie}
                      height={height}
                      width={width}
                      chartConfig={{ 
                          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                          }}
                      accessor="population"
                      backgroundColor="#4B4952"
                      paddingLeft="1"
                      style={{
                          borderRadius: 5,
                        }}
                  />
              </List.Accordion>

              <List.Accordion title="Top 5 - Gastos" id="3" titleStyle={styles.text} style={styles.screen}>
                <DataTable style={{backgroundColor:'#fff'}}>
                      <DataTable.Header style={styles.tableHeader}>
                          <DataTable.Title style={{color:'#fff'}}>Despesa</DataTable.Title>
                          <DataTable.Title numeric>Total Gasto</DataTable.Title>
                      </DataTable.Header>

                      <DataTable.Row>                          
                          <DataTable.Cell>CEI JARDIM DAS VERTENTES</DataTable.Cell>
                          <DataTable.Cell numeric>R$16266.09</DataTable.Cell>
                      </DataTable.Row>
                      
                      <DataTable.Row>
                          <DataTable.Cell>RAFAEL CAMARGO LIMA</DataTable.Cell>
                          <DataTable.Cell numeric>R$95756.43</DataTable.Cell>
                      </DataTable.Row>

                      <DataTable.Row>
                          <DataTable.Cell>CENTRO SOCIAL DA PAROQUIA SANTA LUZIA</DataTable.Cell>
                          <DataTable.Cell numeric>R$33812.00</DataTable.Cell>
                      </DataTable.Row>

                      <DataTable.Row>
                          <DataTable.Cell>E M E I JEAN PIAGET</DataTable.Cell>
                          <DataTable.Cell numeric>R$9366.00</DataTable.Cell>
                      </DataTable.Row>

                      <DataTable.Row>
                          <DataTable.Cell>LUANA REIS PINTO MATSUMOTO</DataTable.Cell>
                          <DataTable.Cell numeric>R$1000.00</DataTable.Cell>
                      </DataTable.Row>

                      <DataTable.Pagination
                          page={page}
                          numberOfPages={3}
                          onPageChange={(page) => setPage(page)}
                          label="1-2 of 6"
                          optionsPerPage={optionsPerPage}
                          itemsPerPage={itemsPerPage}
                          setItemsPerPage={setItemsPerPage}
                          showFastPagination
                          optionsLabel={'Rows per page'}
                      />
                  </DataTable>
              </List.Accordion>
            </List.AccordionGroup>    
      </ScrollView>
  );
}

export default Trabalho

const styles = StyleSheet.create({
    screen:{
        flex:1,
        display:'flex',
        backgroundColor:'#2E2D33',
        borderColor: 'white',
        borderWidth: 0.5,
    },
    text:{
        color:'#fff',
        fontWeight:'700',
        fontFamily: 'Red Hat Display',
        fontSize:18
    },
    tableHeader:{
        backgroundColor: '#00838F',
        
    },
    tableTitle: {
        color:'#fff',
        fontSize: 12,
        fontFamily: 'Red Hat Display',
    }
})