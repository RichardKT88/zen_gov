import React, {useState} from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native';
import { List, DataTable } from 'react-native-paper';
import { BarChart, PieChart } from "react-native-chart-kit";

const Saude = () => {

    //DATA TABLE CONSTANTS
    const optionsPerPage = [2, 3, 4];
    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
    
    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);
    //DATA TABLE CONSTANTS

    //LIST ACCORDION CONSTANTS
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    //LIST ACCORDION CONSTANTS
   
    //CHARTS CONSTANTS
    const width = Dimensions.get('window').width
    const height = 220
    //CHARTS CONSTANTS    

    return (
       
<ScrollView style={styles.screen}>
        <List.AccordionGroup>
        <List.Accordion title="Total Gasto Vs Receita $" id="1" titleStyle={{color: '#fff', fontSize:18}} style={styles.screen}>
         
              <BarChart
                width={width}
                height={height}
                data={dataBar}
                chartConfig={ {
                    backgroundColor: '#2E2D33',
                    backgroundGradientFrom: '#ffffff',
                    backgroundGradientTo: '#ffffff',
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`}}
              />
           
        </List.Accordion>
        <List.Accordion title="Top 5 - Contratos" id="2" titleStyle={{color: '#fff', fontSize:18}} style={styles.screen}>
        
          <PieChart
                data={dataPie}
                height={height}
                width={width}
                chartConfig={{ 
                    backgroundColor: '#2E2D33',
                    backgroundGradientFrom: '#43a047',
                    backgroundGradientTo: '#66bb6a',
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                             }}
                accessor="population"
                style={{borderRadius: 16}}
            />
        </List.Accordion>         
        <List.Accordion style={styles.text} title="Top 5 - Gastos" id="3" titleStyle={{color: '#fff', fontSize:18}} style={styles.screen}>
          <DataTable style={{backgroundColor:'#fff'}}>
                <DataTable.Header>
                    <DataTable.Title>Dessert</DataTable.Title>
                    <DataTable.Title numeric>Calories</DataTable.Title>
                    <DataTable.Title numeric>Fat</DataTable.Title>
                </DataTable.Header>

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
    },
    text:{
        color:'#fff',
        fontWeight:'700',
        fontSize:18
    },
})

const dataPie = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];

const dataBar = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
        data: [20, 45, 28, 80, 99, 43]
        }
    ]
};



