import React, {Component, Fragment} from 'react';
import Chart from 'react-apexcharts';
class chart1 extends Component{

    constructor(props){
        super(props);
        this.state={
            options:{
                chart:{
                    background : '#f4f4f4',
                    foreColor:'#333'
                },
                xaxis:{
                 categories:[
                     'Uttar Pradesh',
                     'Maharashtra',
                     'Bihar',
                     'West Bengal',
                     'Madhya Pradesh',
                     'Tamil Nadu',
                     'Rajasthan',
                     'Karnataka',
                     'Gujarat',
                     'Andhra Pradesh'

                    ]
                },
                plotOptions:{
                    bar:{
                        horizontal:false
                    }
                },
                fill:{
                    colors:['#f44336']
                },
                dataLabels:{
                    enabled:false
                },
                title:{
                    text:'Largest Indian cities',
                    align:'center',
                    margin:20,
                    offsetY:20,
                    style:{
                        fontSize:'25px'
                    }
                }
            },
            series:[{
                name:'Population',
                data:[
                    199812341,
                    112374333,
                    104099452,
                    91276115,
                    72626809,
                    72147030,
                    68548437,
                    61095297,
                    60439692,
                    49577103
                ]
            }

        ]
        }
    }

    onClick = () => {
        this.setState({
            options:{
                ...this.state.options,
                plotOptions:{
                    ...this.state.options.plotOptions,
                    bar:{
                        ...this.state.options.plotOptions.bar,
                        horizontal:!this.state.options.plotOptions.bar.horizontal
                    }
                }
            }
        })
    }
render(){
    return (
        <Fragment>
    <Chart
    options = {this.state.options}
    series = {this.state.series}
    type="bar"
    height="450"
    width="100%"
    />
    <button onClick={this.onClick}> Change </button>
    </Fragment>
    )

    
}
}

export default chart1;