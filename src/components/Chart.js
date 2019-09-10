import React, { Component } from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2'
class Chart extends Component {
    constructor(props){
        super(props)
        this.state={
            chartData:{
                labels:['Mumbai','Delhi','Bangalore','Hyderabad','Ahmedabad','Chennai'],
                datasets:[{
                    label:'Population',
                    data:[
                        '12442373',
                        '11007835',
                        '8436675',
                        '6809970',
                        '5570585',
                        '4681087',
                    ],
                    backgroundColor:[
                        '#ff6666',
                        '#8cff66',
                        '#ffccff',
                        '#8533ff',
                        '#ff944d',
                        '#ffffb3',
                    ]
                }]
            }
        }
    }
    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    width={100}
                    height={50}
                    options={{
                       title:{
                           display:true,
                           text:'Largest Cities in India',
                           fontSize:40
                       },
                       legend:{
                           display:true,
                           position:'right',
                           labels:{
                               fontColor:'#000'
                           }
                       },
                       layout:{
                           padding:{
                               left:50,
                               right:0,
                               bottom:0,
                               top:0
                           }
                       },
                       tooltips:{
                           enabled:true
                       }
                    }}
                    />
            </div>
        );
    }
}

export default Chart;