<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8"/>
	<title>지도</title>
	<style>   
	.dotOverlay {position:relative;bottom:10px;border-radius:6px;border: 1px solid #ccc;border-bottom:2px solid #ddd;float:left;font-size:12px;padding:5px;background:#fff;}
	.dotOverlay:nth-of-type(n) {border:0; box-shadow:0px 1px 2px #888;}    
	.number {font-weight:bold;color:#ee6152;}
	.dotOverlay:after {content:'';position:absolute;margin-left:-6px;left:50%;bottom:-8px;width:11px;height:8px;background:url('http://i1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white_small.png')}
	.distanceInfo {position:relative;top:5px;left:5px;list-style:none;margin:0;}
	.distanceInfo .label {display:inline-block;width:50px;}
	.distanceInfo:after {content:none;}
	</style>
</head>
<body>
<script>var depart = '<?php echo $_GET["depart"]; ?>';
        var desti = '<?php echo $_GET["desti"]; ?>';
        
	if(!depart){
	alert('출발지를 선택해주세요');
	javascript:history.back()
	}
	else if(!desti){
	alert('도착점을 선택해주세요');
	javascript:history.back()
	}
        else if(depart!='기숙사21동'){
        alert('기숙사21동 이외의 출발은 준비중입니다. 죄송합니다;)');
        javascript:history.go(-1);
        }
	else if(depart==desti){
        alert('이미 도착점에 도착해 있습니다:)');
        javascript:history.back();
        }</script>
	<center><p style="color:red;" style"background-color:blue;">POSTECH Road Finding Web service</p>

<fieldset>
<legend>Input your location information</legend>
출발점: <strong><?php echo $_GET["depart"];?></strong>
<br><br>
도착점: <strong><?php echo $_GET["desti"];?><br><br></strong>
<a href="javascript:history.go(-1)">[뒤로가기]</a> 
</fieldset><br><br><br></center>

	<center>
	<div id="map" style="width:60%;height:500px;"></div>
	<p>
	<button onclick="setBounds()">지도 범위 재설정 하기</button>
	</p>

	<script type="text/javascript" src="//apis.daum.net/maps/maps3.js?apikey=d564e21f71f1e0b056bc20cc77359bdd"></script>

	<script src="map.js"></script></center>
</body>
</html>

