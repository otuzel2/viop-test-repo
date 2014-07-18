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

        $.getJSON('stock.json', function(data) {
        var result_stock = new Array();

        $.map(data, function(value, key) {
            result_stock.push([parseInt(key), value]);
        });
        // Create the chart
        $('#chart_stock').highcharts('StockChart', {
            rangeSelector : {
                selected : 1,
                inputEnabled: $('#chart_stock').width() > 480
            },

            title : {
                text : 'XU030 - % değişim'
            },
            
            series : [{
                name : 'Short - Long',
                data : result_stock,
                tooltip: {
                    valueDecimals: 4
                }
            }]
        });
    });

        $.getJSON('usdtry.json', function(data) {
        var result_usdtry = new Array();

        $.map(data, function(value, key) {
            result_usdtry.push([parseInt(key), value]);
        });
        // Create the chart
        $('#chart_usdtry').highcharts('StockChart', {
            rangeSelector : {
                selected : 1,
                inputEnabled: $('#chart_usdtry').width() > 480
            },

            title : {
                text : 'USD/TRY - % değişim'
            },
            
            series : [{
                name : 'Short - Long',
                data : result_usdtry,
                tooltip: {
                    valueDecimals: 4
                }
            }]
        });
    });


});