$(document).ready(function() {
	var script = document.createElement("script");
	script.src = "http://api.map.baidu.com/api?v=1.5&ak=2ee2258f5ab2d003d59c94adb36a38b7&callback=$.showMap";
	document.body.appendChild(script);
});

(function($) {
	$.showMap = function() {
		var map = new BMap.Map("map");
		var point = new BMap.Point(120.753719,31.273275);
		map.centerAndZoom(point, 15);
		var marker = new BMap.Marker(point);
		map.addOverlay(marker);
		map.addControl(new BMap.NavigationControl());
	}
})(jQuery);