var lineChart;
var lineChart2;
var lineChart3;

const SAMPLE_NUM = 300;

$(document).ready(function(){
    //connect to the socket server.
    var socket = io.connect('http://' + document.domain + ':' + location.port + '/test');
    var numbers_received = [];
    var count = 0;
    var count1 = 0;
    var count2 = 0;
    
    createGraph1();
    createGraph2();
    createGraph3();
    //receive details from server
    socket.on('newnumber', function(msg) {
          count  = addData(lineChart,msg.timestamp,msg.sin, count, -0.5, 0.6);
          count1 = addData(lineChart1,msg.timestamp,msg.cos, count1, -0.5, 0.6);
          count2 = addData(lineChart2,msg.timestamp,msg.tan, count2, -0.5, 0.6);
          $("#OB_PEEP").html(msg.sin);
          $("#OB_FlowMean").html(msg.con);
          $("#OB_PPeak").html(msg.tan);
        
    });

});

function createGraph1() {

    var limitSupArray = [];
    var limitInfArray = [];
    var data =[];
    var labels = [];
    var step;
    for (step = 0; step < SAMPLE_NUM; step++) {
        limitSupArray.push(null);
        limitInfArray.push(null);
        data.push(null);
        labels.push("");
    }

    var ctx = document.getElementById("lineChart").getContext("2d");
    lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'SIN',
            data: data,
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
        // next two lines provide responsive proportions for fitting inside CSS containers
        responsive: true,
        maintainAspectRatio: false,
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
    var data =[];
    var labels = [];
    var step;
    for (step = 0; step < SAMPLE_NUM; step++) {
        limitSupArray.push(null);
        limitInfArray.push(null);
        data.push(null);
        labels.push("");
    }

    var ctx = document.getElementById("lineChart1").getContext("2d");
    lineChart1 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'SIN',
            data: data,
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
        // next two lines provide responsive proportions for fitting inside CSS containers
        reponsive: true,
        maintainAspectRatio: false,
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
    var data =[];
    var labels = [];
    var step;
    for (step = 0; step < SAMPLE_NUM; step++) {
        limitSupArray.push(null);
        limitInfArray.push(null);
        data.push(null);
        labels.push("");
    }

    var ctx = document.getElementById("lineChart2").getContext("2d");
    lineChart2 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'SIN',
            data: data,
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
        // next two lines provide responsive proportions for fitting inside CSS containers
        responsive: true,
        maintainAspectRatio: false,
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

function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}


function dataReplacer(id, socketValue) {
    var element = document.getElementById(id);
    if ((typeof element === 'undefined') || (element !== socketValue)) {
        element.innerHTML = roundToTwo(socketValue);
    }
    else {
    } 
}





function addData(chart, label, data, count, lim_inf, lim_sup) {
    const NULL_NUM = 5;
    if (count < SAMPLE_NUM-NULL_NUM){
      chart.data.labels[count] = label;
      chart.data.datasets[0].data[count] = data;
      chart.data.datasets[1].data[count] = lim_sup;
      chart.data.datasets[2].data[count] = lim_inf;
      var i;
      for (i = 1; i < NULL_NUM; i++) {
          chart.data.datasets[0].data[count+i] = null;
      } 
      
    }else{
         chart.data.labels[count] = label;
         chart.data.datasets[0].data[count] = data;
         chart.data.datasets[1].data[count] = lim_sup;
         chart.data.datasets[2].data[count] = lim_inf;
    }

    chart.data.labels[0] = "";
    chart.data.labels[SAMPLE_NUM-1] = "";

    if (data > lim_inf && data < lim_sup) {
        chart.data.datasets[0].backgroundColor[0] = 'rgba(255, 99, 132, 0)';
        chart.data.datasets[0].borderColor[0] = 'rgba(0, 192, 255, 1)';
    } else {
        chart.data.datasets[0].backgroundColor[0] = 'rgba(0, 192, 255,  0)';
        chart.data.datasets[0].borderColor[0] = 'rgba(0, 192, 255, 1)';
    }


    count = count + 1;
    if (count == SAMPLE_NUM){
       count = 0;
    }


    chart.update();
    
    return count;
}
