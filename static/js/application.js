var lineChart;
var lineChart2;
var lineChart3;
var count;
var count1;
var count2;
var limSup = 0.5;
var limInf = -0.3;

const SAMPLE_NUM = 300;

$(document).ready(function(){
    //connect to the socket server.
    var socket = io.connect('http://' + document.domain + ':' + location.port + '/test');
    var numbers_received = [];
    count = 0;
    count1 = 0;
    count2 = 0;
    
    createGraph1();
    createGraph2();
    createGraph3();
    //receive details from server
    socket.on('newnumber', function(msg) {

          addData(lineChart,msg.timestamp,msg.sin);
          addData1(lineChart1,msg.timestamp,msg.cos);
          addData2(lineChart2,msg.timestamp,msg.tan);
 
    });

});

function createGraph1() {

    var limitSupArray = [];
    var limitInfArray = [];
    var step;
    var range =0;
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
        } ,
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
            showline: false,
            animation: {
                duration: 0
            }
    }
});

}


function createGraph2() {

    var limitSupArray = [];
    var limitInfArray = [];
    var step;
    var range =0;
    for (step = 0; step < 300; step++) {
        limitSupArray.push(0.5);
        limitInfArray.push(-0.5);
    }

    var ctx = document.getElementById("lineChart1").getContext("2d");
    lineChart1 = new Chart(ctx, {
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
        } ,
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
            showline: false,
            animation: {
                duration: 0
            }
    }
});

}

function createGraph3() {

    var limitSupArray = [];
    var limitInfArray = [];
    var step;
    var range =0;
    for (step = 0; step < 300; step++) {
        limitSupArray.push(0.5);
        limitInfArray.push(-0.5);
    }

    var ctx = document.getElementById("lineChart2").getContext("2d");
    lineChart2 = new Chart(ctx, {
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
        } ,
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
            showline: false,
            animation: {
                duration: 0
            }
    }
});

}



function addData(chart, label, data) {
    const NULL_NUM = 5;
    if (count < SAMPLE_NUM-NULL_NUM){
      chart.data.labels[count] = label;
      chart.data.datasets[0].data[count] = data;
      var i;
      for (i = 1; i < NULL_NUM; i++) {
          chart.data.datasets[0].data[count+i] = null;
      } 
      
    }else{
         chart.data.labels[count] = label;
         chart.data.datasets[0].data[count] = data;
    }
    if (data > limSup || data < limInf) {
        chart.data.datasets[0].backgroundColor[0] = 'rgba(255, 99, 132, 0.5)';
        chart.data.datasets[0].borderColor[0] = 'rgba(255, 99, 99, 1)';
    } else {
        chart.data.datasets[0].backgroundColor[0] = 'rgba(25, 99, 132, 0.2)';
        chart.data.datasets[0].borderColor[0] = 'rgba(1, 1, 255, 1)';
    }

    count = count + 1;
    if (count == SAMPLE_NUM){
       count = 0;
    }

    chart.update();

}

function addData1(chart, label, data) {
    const NULL_NUM = 5;
    if (count1 < SAMPLE_NUM-NULL_NUM){
      chart.data.labels[count1] = label;
      chart.data.datasets[0].data[count1] = data;
      var i;
      for (i = 1; i < NULL_NUM; i++) {
          chart.data.datasets[0].data[count1+i] = null;
      } 
      
    }else{
         chart.data.labels[count1] = label;
         chart.data.datasets[0].data[count1] = data;
    }
    if (data > limSup || data < limInf) {
        chart.data.datasets[0].backgroundColor[0] = 'rgba(255, 99, 132, 0.5)';
        chart.data.datasets[0].borderColor[0] = 'rgba(255, 99, 99, 1)';
    } else {
        chart.data.datasets[0].backgroundColor[0] = 'rgba(25, 99, 132, 0.2)';
        chart.data.datasets[0].borderColor[0] = 'rgba(1, 1, 255, 1)';
    }

    count1 = count1 + 1;
    if (count1 == SAMPLE_NUM){
       count1 = 0;
    }

    chart.update();

}

function addData2(chart, label, data) {
    const NULL_NUM = 5;
    if (count2 < SAMPLE_NUM-NULL_NUM){
      chart.data.labels[count2] = label;
      chart.data.datasets[0].data[count2] = data;
      var i;
      for (i = 1; i < NULL_NUM; i++) {
          chart.data.datasets[0].data[count2+i] = null;
      } 
      
    }else{
         chart.data.labels[count2] = label;
         chart.data.datasets[0].data[count2] = data;
    }
    if (data > limSup || data < limInf) {
        chart.data.datasets[0].backgroundColor[0] = 'rgba(255, 99, 132, 0.5)';
        chart.data.datasets[0].borderColor[0] = 'rgba(255, 99, 99, 1)';
    } else {
        chart.data.datasets[0].backgroundColor[0] = 'rgba(25, 99, 132, 0.2)';
        chart.data.datasets[0].borderColor[0] = 'rgba(1, 1, 255, 1)';
    }

    count2 = count2 + 1;
    if (count2 == SAMPLE_NUM){
       count2 = 0;
    }

    chart.update();

}
