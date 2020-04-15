
var lineChart;
var lineChart2;

$(document).ready(function() {
    console.log("ready!");
    createGraph1();
    createGraph2();

    const socket = io('http://localhost');

    // handle incoming messages
    socket.onmessage = function(event) {

        let incomingMessage = event.data;
        var sensData = socket.on('newnumber', (number) => {
        console.log(data);
        });
        addData(lineChart, sensData.number, );
        addData(lineChart2, sensData.sensore2.time, sensData.sensore2.data);
        range = range + 0.01;

    };

    socket.onclose = event => console.log(`Closed ${event.code}`);
});



function createGraph1() {

    var limitSupArray = [];
    var limitInfArray = [];
    var step;
    var range = 0;
    for (step = 0; step < 300; step++) {
        limitSupArray.push(0.5);
        limitInfArray.push(-0.5);
    }

    var ctx = document.getElementById("lineChart").getContext("2d");
    lineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                    label: 'SIN',
                    data: [],
                    pointRadius: 0,
                    backgroundColor: [
                        'rgba(25, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(1, 1, 255, 1)'
                    ],
                    borderWidth: 1.5
                },
                {
                    label: 'Tresh',
                    data: limitSupArray,
                    pointRadius: 0,
                    backgroundColor: [
                        'rgba(25,0, 0, 0)'
                    ],
                    borderColor: [
                        'rgba(1, 1, 255, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Tresh',
                    data: limitInfArray,
                    pointRadius: 0,
                    backgroundColor: [
                        'rgba(25,0, 0, 0)'
                    ],
                    borderColor: [
                        'rgba(1, 1, 255, 1)'
                    ],
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {

                        suggestedMin: -1.5,
                        suggestedMax: 1.5
                    },
                    stacked: false
                }],
                xAxes: [{
                    ticks: {
                        maxTicksLimit: 4.1,
                        maxRotation: 0,
                        minRotation: 0
                    }
                }]
            },
            animation: {
                duration: 0
            }
        }
    });

}


function createGraph2() {
    var ctx2 = document.getElementById("lineChart2").getContext("2d");
    lineChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'SIN',
                data: [],
                pointRadius: 0,
                backgroundColor: [
                    'rgba(25, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(1, 1, 255, 1)'
                ],
                borderWidth: 1.5
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {

                        suggestedMin: -1.5,
                        suggestedMax: 1.5
                    },
                    stacked: false
                }],
                xAxes: [{
                    ticks: {
                        maxTicksLimit: 4.1,
                        maxRotation: 0,
                        minRotation: 0
                    }
                }]
            },
            animation: {
                duration: 0
            }
        }
    });
}

function addData(chart, label, data) {


    chart.data.labels.push(label);
    chart.data.datasets[0].data.push(data);

    if (Math.abs(data) > 0.5) {
        chart.data.datasets[0].backgroundColor[0] = 'rgba(255, 99, 132, 0.5)';
        chart.data.datasets[0].borderColor[0] = 'rgba(255, 99, 99, 1)';
    } else {
        chart.data.datasets[0].backgroundColor[0] = 'rgba(25, 99, 132, 0.2)';
        chart.data.datasets[0].borderColor[0] = 'rgba(1, 1, 255, 1)';
    }

    if (chart.data.datasets[0].data.length === 300) {
        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();
    }
    chart.update();

}
