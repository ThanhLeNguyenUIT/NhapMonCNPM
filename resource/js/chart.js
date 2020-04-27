$(function(){
    $("#chart").dxChart({
        dataSource: saleData,
        legend: {
            visible: false
        },
        series: {
            type: "bar"
        },
        argumentAxis: {
            tickInterval: 10,
            label: {
                format: {
                    type: "decimal"
                }
            }
        },
        title: "Doanh thu của Đại lý trong tháng này"
    });
});
$(function(){
    $("#chart_good").dxChart({
        rotated: true,
        dataSource: saleDaily,
        series: {
            label: {
                visible: true,
                backgroundColor: "#c18e92"
            },
            color: "#79cac4",
            type: "bar",
            argumentField: "day",
            valueField: "sales"
        },
        title: "Top 10 hàng hoá bán chạy nhất",
        argumentAxis: {
            label: {
                customizeText: function() {
                    return "Day " + this.valueText;
                }
            }
        },
        valueAxis: {
            tick: {
                visible: false
            },
            label: {
                visible: false
            }
        },
        "export": {
            enabled: true
        },
        legend: {
            visible: false
        }
    });
});
var saleData = [{
    arg: 'Đại lý 1',
    val: 150000000
}, {
    arg: 'Đại lý 2',
    val: 100000000
}, {
    arg: 'Đại lý 3',
    val: 1000000000
}, {
    arg: 'Đại lý 4',
    val: 1200000000
}, {
    arg: 'Đại lý 5',
    val: 1000000000
}, {
    arg: 'Đại lý 6',
    val: 500000000
}, {
    arg: 'Đại lý 7',
    val: 700000000
}];

var saleDaily = [
    { "day": "Nước rửa tay", "sales": 4 },
	{ "day": "Khẩu trang y tế", "sales": 4 },
	{ "day": "Giấy vệ sinh", "sales": 5 },
	{ "day": "Bò húc", "sales": 5 },
	{ "day": "Vinamilk", "sales": 6 },
	{ "day": "Coolgate", "sales": 6 },
	{ "day": "Bột giặt", "sales": 7 },
	{ "day": "Sửa rửa mặt", "sales": 7 },
	{ "day": "Dầu ăn trường an", "sales": 8 },
	{ "day": "Mì Hảo Hảo", "sales": 9 }
]