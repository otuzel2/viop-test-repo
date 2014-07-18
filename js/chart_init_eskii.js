$(document).ready(function() {

   var options_fark = {
        chart: {
            renderTo: 'viopindika_fark',
            type: 'spline',
            style: {
                fontFamily: 'sans-serif'
            }
        },
        title: {
                text: 'Short ve Long kelimeleri farkı',
                x: -20 //center
            },
        xAxis: {
                type: 'datetime',
                labels: {
                    format: '{value:%d-%m}',
                    rotation: 45,
                    align: 'left'
                },
                gridLineWidth: 1
              
            },
        series: [{
            name: 'Short - Long',
            color: '#D63838',
            tooltip: {
                    valueDecimals: 1
                },
        }
        ]
    };

    $.getJSON('data.json', function(data) {
        var result = new Array();
        //var long_values = new Array();

        $.map(data, function(obj, i) {
            value = 100*(obj.short-obj.long)/(obj.short+obj.long);
            //value = obj.short-obj.long;
            result.push([obj.day, value]);
            //long_values.push([obj.day, obj.long]);
        });

        options_fark.series[0].data = result;
        //options.series[1].data = long_values;

        var chart = new Highcharts.Chart(options_fark);
    });
    
    var options = {
        chart: {
            renderTo: 'viopindika',
            type: 'spline',
            style: {
                fontFamily: 'sans-serif'
            }
        },
        title: {
                text: 'Gönderilerdeki Kelime Dağılımı',
                x: -20 //center
            },
        xAxis: {
                type: 'datetime',
                labels: {
                    format: '{value:%d-%m}',
                    rotation: 45,
                    align: 'left'
                },
                gridLineWidth: 1
            },
        series: [{
            name: 'Short Kelimeleri (short, cort, şort)',
            color: '#D63838',
        },{
           name: 'Long Kelimeleri (long, lönk, lonk)',
           color: '#309600',
        }
        ]
    };

    $.getJSON('data.json', function(data) {
        var short_values = new Array();
        var long_values = new Array();

        $.map(data, function(obj, i) {
            short_values.push([obj.day, obj.short]);
            long_values.push([obj.day, obj.long]);
        });

        options.series[0].data = short_values;
        options.series[1].data = long_values;

        var chart = new Highcharts.Chart(options);
    });




    $.getJSON('data.json', function(data) {
        // Create the chart
        $('#stockChart').highcharts('StockChart', {
            

            rangeSelector : {
                selected : 1,
                inputEnabled: $('#stockChart').width() > 480
            },

            title : {
                text : 'AAPL Stock Price'
            },
            
            series : [{
                name : 'AAPL',
                data : data,
                tooltip: {
                    valueDecimals: 2
                }
            }]
        });
    });



});