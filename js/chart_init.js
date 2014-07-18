$(document).ready(function() {
 
    
    /* STOCK CHART */

        $.getJSON('data.json', function(data) {
        var result_sldiff = new Array();

        $.map(data, function(obj) {
            value = 100*(obj.short-obj.long)/(obj.short+obj.long);
            result_sldiff.push([obj.day, value]);
        });
        // Create the chart
        $('#chart_sldiff').highcharts('StockChart', {
            rangeSelector : {
                selected : 1,
                inputEnabled: $('#chart_sldiff').width() > 480
            },

            title : {
                text : 'Anahtar kelime farkı (Short-Long)'
            },
            
            series : [{
                name : 'Short - Long',
                color: '#fc0',
                data : result_sldiff,
                tooltip: {
                    valueDecimals: 2
                }
            }]
        });
    });
});
