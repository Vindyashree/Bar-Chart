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
                     'New York',
                     'Los Angeles',
                     'dfghj',
                     'dfgh',
                     'qwert',
                     'zxfghu',
                     'asdfyu',
                     'exrctvhj',
                     'zerty',
                     'zetyuuv'

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
                    text:'Largest US cities',
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
                    8550450,
                    3971089,
                    2717897,
                    6789561,
                    2345671,
                    5678976,
                    3567823,
                    2345678,
                    9824567,
                    6543278
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