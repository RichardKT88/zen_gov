import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { List, DataTable } from 'react-native-paper';
import { BarChart, PieChart } from "react-native-chart-kit";

import { dataPie, dataBar } from '../data/SaudeData';

const Saude = () => {

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
                <List.Accordion title="Total Gasto Vs Receita $" id="1" titleStyle={styles.text} style={styles.screen}>
                
                      <BarChart
                        width={width}
                        height={height}
                        data={dataBar}                 
                        yAxisLabel={'R$'}
                        chartConfig={{
                          backgroundGradientFrom: '#4B4952',
                          backgroundGradientTo: '#4B4952',
                          decimalPlaces: 3,
                          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        }}
                        style={{
                          borderRadius: 5,
                        }}
                      />
                  
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
                      <DataTable.Header style={{backgroundColor:'#00838F'}}>
                          <DataTable.Title >Dessert</DataTable.Title>
                          <DataTable.Title numeric>Calories</DataTable.Title>
                          <DataTable.Title numeric>Fat</DataTable.Title>
                      </DataTable.Header>

                      <DataTable.Row>
                          <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                          <DataTable.Cell numeric>159</DataTable.Cell>
                          <DataTable.Cell numeric>6.0</DataTable.Cell>
                      </DataTable.Row>
                      
                      <DataTable.Row>
                          <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                          <DataTable.Cell numeric>159</DataTable.Cell>
                          <DataTable.Cell numeric>6.0</DataTable.Cell>
                      </DataTable.Row>

                      <DataTable.Row>
                          <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                          <DataTable.Cell numeric>237</DataTable.Cell>
                          <DataTable.Cell numeric>8.0</DataTable.Cell>
                      </DataTable.Row>

                      <DataTable.Row>
                          <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                          <DataTable.Cell numeric>237</DataTable.Cell>
                          <DataTable.Cell numeric>8.0</DataTable.Cell>
                      </DataTable.Row>

                      <DataTable.Row>
                          <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                          <DataTable.Cell numeric>237</DataTable.Cell>
                          <DataTable.Cell numeric>8.0</DataTable.Cell>
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

export default Saude

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
})