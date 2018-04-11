var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new daum.maps.LatLng(36.015637, 129.322074), // 지도의 중심좌표
        level: 1 // 지도의 확대 레벨
    };

var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new daum.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// daum.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new daum.maps.ZoomControl();
map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
var QueryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
  return query_string;
}();

//var depart = QueryString.deart
console.log(desti)
console.log(depart)

switch(depart){
case '기숙사21동':
if(desti == '청암학술정보관') // 청암
{

	// 버튼을 클릭하면 아래 배열의 좌표들이 모두 보이게 지도 범위를 재설정합니다 
	var points = [
	    new daum.maps.LatLng(36.017077, 129.320538),
	    new daum.maps.LatLng(36.012844, 129.325134)
	];

	// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
	var bounds = new daum.maps.LatLngBounds();    

	var i, marker_1, marker_2;
	    // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
	    marker_1 =     new daum.maps.Marker({ position : points[0] });
	    marker_1.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[0]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">RC</div>'
        });
        infowindow.open(map, marker_1);
		// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다

		marker_2 =     new daum.maps.Marker({ position : points[1] });
	    marker_2.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[1]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">청암</div>'
        });
        infowindow.open(map, marker_2);

	function setBounds() {
	    // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
	    // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
	    map.setBounds(bounds);
	}

	// 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
	var linePath = [
	    new daum.maps.LatLng(36.01704491567303,129.3206014725413),
	    new daum.maps.LatLng(36.01679792276822,129.32067740629327),
	    new daum.maps.LatLng(36.01607854999231,129.32060362641016),
	    new daum.maps.LatLng(36.01587878274448,129.32045082017473 ),
	    new daum.maps.LatLng(36.015696912725815,129.32065342946652 ),
	    new daum.maps.LatLng(36.015202316966906,129.32176735425324 ),
	    new daum.maps.LatLng(36.01497215245372,129.3219047728436),
	    new daum.maps.LatLng(36.01462437012094,129.32264869730224 ),
	    new daum.maps.LatLng(36.01430675781118,129.32346281425575 ),
	    new daum.maps.LatLng(36.0140774554656,129.32343944569536),
	    new daum.maps.LatLng(36.01374121783899,129.32347115990572 ),
	    new daum.maps.LatLng(36.01336708083865,129.3235987982961),
	    new daum.maps.LatLng(36.013038983970766,129.3237915547177),
	    new daum.maps.LatLng(36.01309542082599,129.323901339017 ),
	    new daum.maps.LatLng(36.013109562829314,129.32410137321574),
	    new daum.maps.LatLng(36.01269876104714,129.3242612004281),
	    new daum.maps.LatLng(36.012844, 129.325134)
	    ];

	// 지도에 표시할 선을 생성합니다
	var polyline = new daum.maps.Polyline({
	    path: linePath, // 선을 구성하는 좌표배열 입니다
	    strokeWeight: 5, // 선의 두께 입니다
	    strokeColor: '#FFAE00', // 선의 색깔입니다
	    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
	    strokeStyle: 'solid' // 선의 스타일입니다
	});

	// 지도에 선을 표시합니다 
	polyline.setMap(map); 
	var distance = Math.round(polyline.getLength());

	

	var content = getTimeHTML(distance);
	showDistance(content, points[1]);  
}

else if(desti == '학생회관') //학관
{
	// 버튼을 클릭하면 아래 배열의 좌표들이 모두 보이게 지도 범위를 재설정합니다 
	var points = [
	    new daum.maps.LatLng(36.01704491567303,129.3206014725413),
	    new daum.maps.LatLng(36.012898315291004,129.3207044282922)
	];

	// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
	var bounds = new daum.maps.LatLngBounds();    

	var i, marker_1, marker_2;
	    // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
	    marker_1 =     new daum.maps.Marker({ position : points[0] });
	    marker_1.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[0]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">RC</div>'
        });
        infowindow.open(map, marker_1);
		// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다

		marker_2 =     new daum.maps.Marker({ position : points[1] });
	    marker_2.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[1]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">학생회관</div>'
        });
        infowindow.open(map, marker_2);

	function setBounds() {
	    // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
	    // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
	    map.setBounds(bounds);
	}


	// 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
	var linePath = [
	    new daum.maps.LatLng(36.01704491567303,129.3206014725413),
	    new daum.maps.LatLng(36.01679792276822,129.32067740629327),
	    new daum.maps.LatLng(36.01607854999231,129.32060362641016),
	    new daum.maps.LatLng(36.01587878274448,129.32045082017473 ),
	    new daum.maps.LatLng(36.015696912725815,129.32065342946652 ),
	    new daum.maps.LatLng(36.015202316966906,129.32176735425324 ),
	    new daum.maps.LatLng(36.0146119677856,129.3214284164861 ),
	    new daum.maps.LatLng(36.01421350102373,129.32141672570736),
	    new daum.maps.LatLng(36.01394013693197,129.32145861076728 ),
	    new daum.maps.LatLng(36.01377745847204,129.32148433550594),
	    new daum.maps.LatLng(36.01363027280851,129.32140793206443 ),
	    new daum.maps.LatLng(36.01317456645045,129.32109513381627 ),
	    new daum.maps.LatLng(36.012898315291004,129.3207044282922)
	    ];

	// 지도에 표시할 선을 생성합니다
	var polyline = new daum.maps.Polyline({
	    path: linePath, // 선을 구성하는 좌표배열 입니다
	    strokeWeight: 5, // 선의 두께 입니다
	    strokeColor: '#FFAE00', // 선의 색깔입니다
	    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
	    strokeStyle: 'solid' // 선의 스타일입니다
	});

	// 지도에 선을 표시합니다 
	polyline.setMap(map); 
		var distance = Math.round(polyline.getLength());




	var content = getTimeHTML(distance);
	showDistance(content, points[1]);  
}

else if(desti == '무은재기념관')//무은재
{
	// 버튼을 클릭하면 아래 배열의 좌표들이 모두 보이게 지도 범위를 재설정합니다 
	var points = [
	    new daum.maps.LatLng(36.01704491567303,129.3206014725413),
	    new daum.maps.LatLng(36.01198310812902,129.32213589376565 )
	];

	// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
	var bounds = new daum.maps.LatLngBounds();    

	var i, marker_1, marker_2;
	    // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
	    marker_1 =     new daum.maps.Marker({ position : points[0] });
	    marker_1.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[0]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">RC</div>'
        });
        infowindow.open(map, marker_1);
		// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다

		marker_2 =     new daum.maps.Marker({ position : points[1] });
	    marker_2.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[1]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">무은재</div>'
        });
        infowindow.open(map, marker_2);

	function setBounds() {
	    // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
	    // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
	    map.setBounds(bounds);
	}


	// 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
	var linePath = [
	    new daum.maps.LatLng(36.01704491567303,129.3206014725413),
	    new daum.maps.LatLng(36.01679792276822,129.32067740629327),
	    new daum.maps.LatLng(36.01607854999231,129.32060362641016),
	    new daum.maps.LatLng(36.01587878274448,129.32045082017473 ),
	    new daum.maps.LatLng(36.015696912725815,129.32065342946652 ),
	    new daum.maps.LatLng(36.015202316966906,129.32176735425324 ),
	    new daum.maps.LatLng(36.0146119677856,129.3214284164861 ),
	    new daum.maps.LatLng(36.01421350102373,129.32141672570736),
	    new daum.maps.LatLng(36.01394013693197,129.32145861076728 ),
	    new daum.maps.LatLng(36.01377745847204,129.32148433550594),
	    new daum.maps.LatLng(36.01363027280851,129.32140793206443 ),
	    new daum.maps.LatLng(36.01317456645045,129.32109513381627 ),
	    new daum.maps.LatLng(36.012898315291004,129.3207044282922),
	    new daum.maps.LatLng(36.011787740560784,129.32187232375088 ),
	    new daum.maps.LatLng(36.01198310812902,129.32213589376565 )
	    ];

	// 지도에 표시할 선을 생성합니다
	var polyline = new daum.maps.Polyline({
	    path: linePath, // 선을 구성하는 좌표배열 입니다
	    strokeWeight: 5, // 선의 두께 입니다
	    strokeColor: '#FFAE00', // 선의 색깔입니다
	    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
	    strokeStyle: 'solid' // 선의 스타일입니다
	});

	// 지도에 선을 표시합니다 
	polyline.setMap(map); 

		var distance = Math.round(polyline.getLength());




	var content = getTimeHTML(distance);
	showDistance(content, points[1]);  
}
else if(desti == '대강당')//대강당
{
	// 버튼을 클릭하면 아래 배열의 좌표들이 모두 보이게 지도 범위를 재설정합니다 
	var points = [
	    new daum.maps.LatLng(36.01704491567303,129.3206014725413),
	    new daum.maps.LatLng(36.01154659912658,129.32152978404514)
	];

	// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
	var bounds = new daum.maps.LatLngBounds();    

	var i, marker_1, marker_2;
	    // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
	    marker_1 =     new daum.maps.Marker({ position : points[0] });
	    marker_1.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[0]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">RC</div>'
        });
        infowindow.open(map, marker_1);
		// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다

		marker_2 =     new daum.maps.Marker({ position : points[1] });
	    marker_2.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[1]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">대강당</div>'
        });
        infowindow.open(map, marker_2);

	function setBounds() {
	    // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
	    // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
	    map.setBounds(bounds);
	}


	// 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
	var linePath = [
	    new daum.maps.LatLng(36.01704491567303,129.3206014725413),
	    new daum.maps.LatLng(36.01679792276822,129.32067740629327),
	    new daum.maps.LatLng(36.01607854999231,129.32060362641016),
	    new daum.maps.LatLng(36.01587878274448,129.32045082017473 ),
	    new daum.maps.LatLng(36.015696912725815,129.32065342946652 ),
	    new daum.maps.LatLng(36.015202316966906,129.32176735425324 ),
	    new daum.maps.LatLng(36.0146119677856,129.3214284164861 ),
	    new daum.maps.LatLng(36.01421350102373,129.32141672570736),
	    new daum.maps.LatLng(36.01394013693197,129.32145861076728 ),
	    new daum.maps.LatLng(36.01377745847204,129.32148433550594),
	    new daum.maps.LatLng(36.01363027280851,129.32140793206443 ),
	    new daum.maps.LatLng(36.01317456645045,129.32109513381627 ),
	    new daum.maps.LatLng(36.012898315291004,129.3207044282922),
	    new daum.maps.LatLng(36.011787740560784,129.32187232375088 ),
	    new daum.maps.LatLng(36.01154659912658,129.32152978404514)
	    ];

	// 지도에 표시할 선을 생성합니다
	var polyline = new daum.maps.Polyline({
	    path: linePath, // 선을 구성하는 좌표배열 입니다
	    strokeWeight: 5, // 선의 두께 입니다
	    strokeColor: '#FFAE00', // 선의 색깔입니다
	    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
	    strokeStyle: 'solid' // 선의 스타일입니다
	});

	// 지도에 선을 표시합니다 
	polyline.setMap(map); 

	var distance = Math.round(polyline.getLength());
	var content = getTimeHTML(distance);
	showDistance(content, points[1]);  
}

else if(desti == '지곡회관') // 지곡
{

	// 버튼을 클릭하면 아래 배열의 좌표들이 모두 보이게 지도 범위를 재설정합니다 
	var points = [
	    new daum.maps.LatLng(36.01704491567303,129.3206014725413),
	    new daum.maps.LatLng(36.01594054095804,129.32237957808536 )
	];

	// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
	var bounds = new daum.maps.LatLngBounds();    

	var i, marker_1, marker_2;
	    // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
	    marker_1 =     new daum.maps.Marker({ position : points[0] });
	    marker_1.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[0]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">RC</div>'
        });
        infowindow.open(map, marker_1);
		// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다

		marker_2 =     new daum.maps.Marker({ position : points[1] });
	    marker_2.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[1]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">지곡</div>'
        });
        infowindow.open(map, marker_2);

	function setBounds() {
	    // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
	    // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
	    map.setBounds(bounds);
	}


	// 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
	var linePath = [
	    new daum.maps.LatLng(36.01704491567303,129.3206014725413),
	    new daum.maps.LatLng(36.01679792276822,129.32067740629327),
	    new daum.maps.LatLng(36.01607854999231,129.32060362641016),
	    new daum.maps.LatLng(36.01587878274448,129.32045082017473 ),
	    new daum.maps.LatLng(36.015696912725815,129.32065342946652 ),
	    new daum.maps.LatLng(36.015202316966906,129.32176735425324 ),
	    new daum.maps.LatLng(36.01555586343447,129.32188863188404),
	    new daum.maps.LatLng(36.01576506305508,129.32201953723657 ),
	    new daum.maps.LatLng(36.015917767208315,129.32215987548818 ),
	    new daum.maps.LatLng(36.01594054095804,129.32237957808536 )
	    ];

	// 지도에 표시할 선을 생성합니다
	var polyline = new daum.maps.Polyline({
	    path: linePath, // 선을 구성하는 좌표배열 입니다
	    strokeWeight: 5, // 선의 두께 입니다
	    strokeColor: '#FFAE00', // 선의 색깔입니다
	    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
	    strokeStyle: 'solid' // 선의 스타일입니다
	});

	// 지도에 선을 표시합니다 
	polyline.setMap(map); 

	var distance = Math.round(polyline.getLength());
	var content = getTimeHTML(distance);
	showDistance(content, points[1]);  
}

else if(desti == '통나무집') // 통집
{

	// 버튼을 클릭하면 아래 배열의 좌표들이 모두 보이게 지도 범위를 재설정합니다 
	var points = [
	    new daum.maps.LatLng(36.016979731310045,129.3209433656856 ),
	    new daum.maps.LatLng(36.01801326450002,129.32270659728704 )
	    ]

	// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
	var bounds = new daum.maps.LatLngBounds();    

	var i, marker_1, marker_2;
	    // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
	    marker_1 =     new daum.maps.Marker({ position : points[0] });
	    marker_1.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[0]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">RC</div>'
        });
        infowindow.open(map, marker_1);
		// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다

		marker_2 =     new daum.maps.Marker({ position : points[1] });
	    marker_2.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[1]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">통집</div>'
        });
        infowindow.open(map, marker_2);

	function setBounds() {
	    // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
	    // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
	    map.setBounds(bounds);
	}


	// 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
	var linePath = [
	    new daum.maps.LatLng(36.016979731310045,129.3209433656856 ),
	    new daum.maps.LatLng(36.016749730840516,129.3209560266998 ),
	    new daum.maps.LatLng(36.01671231390727,129.3211434666783 ),
	    new daum.maps.LatLng(36.01664225264054,129.32138817347035 ),
	    new daum.maps.LatLng(36.01665527148199,129.32164640819968 ),
	    new daum.maps.LatLng(36.01703781844367,129.32166595188738 ),
	    new daum.maps.LatLng(36.01719524305875, 129.32167888946827 ),
	    new daum.maps.LatLng(36.01741409174977, 129.3217768087691 ),
	    new daum.maps.LatLng(36.017388355760346, 129.32205886232123 ),
	    new daum.maps.LatLng(36.01730612735876, 129.3222338973507),
	    new daum.maps.LatLng(36.01757171064928,129.32247736756324 ),
	    new daum.maps.LatLng(36.01790880330885, 129.3225177625824),
	    new daum.maps.LatLng(36.01801326450002,129.32270659728704 )
	    ];

	// 지도에 표시할 선을 생성합니다
	var polyline = new daum.maps.Polyline({
	    path: linePath, // 선을 구성하는 좌표배열 입니다
	    strokeWeight: 5, // 선의 두께 입니다
	    strokeColor: '#FFAE00', // 선의 색깔입니다
	    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
	    strokeStyle: 'solid' // 선의 스타일입니다
	});

	// 지도에 선을 표시합니다 
	polyline.setMap(map); 

	var distance = Math.round(polyline.getLength());
	var content = getTimeHTML(distance);
	showDistance(content, points[1]);  
}

else if(desti == '체육관') // 체육관
{

	// 버튼을 클릭하면 아래 배열의 좌표들이 모두 보이게 지도 범위를 재설정합니다 
	var points = [
	    new daum.maps.LatLng(36.016979731310045,129.3209433656856 ),
	    new daum.maps.LatLng(36.01869318696716, 129.32272378715567 )
	];

	// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
	var bounds = new daum.maps.LatLngBounds();    

	var i, marker_1, marker_2;
	    // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
	    marker_1 =     new daum.maps.Marker({ position : points[0] });
	    marker_1.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[0]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">RC</div>'
        });
        infowindow.open(map, marker_1);
		// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다

		marker_2 =     new daum.maps.Marker({ position : points[1] });
	    marker_2.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[1]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">체육관</div>'
        });
        infowindow.open(map, marker_2);

	function setBounds() {
	    // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
	    // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
	    map.setBounds(bounds);
	}


	// 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
	var linePath = [
	    new daum.maps.LatLng(36.016979731310045,129.3209433656856 ),
	    new daum.maps.LatLng(36.016749730840516,129.3209560266998 ),
	    new daum.maps.LatLng(36.01671231390727,129.3211434666783 ),
	    new daum.maps.LatLng(36.01664225264054,129.32138817347035 ),
	    new daum.maps.LatLng(36.01665527148199,129.32164640819968 ),
	    new daum.maps.LatLng(36.01703781844367,129.32166595188738 ),
	    new daum.maps.LatLng(36.01719524305875, 129.32167888946827 ),
	    new daum.maps.LatLng(36.01741409174977, 129.3217768087691 ),
	    new daum.maps.LatLng(36.017388355760346, 129.32205886232123 ),
	    new daum.maps.LatLng(36.01730612735876, 129.3222338973507),
	    new daum.maps.LatLng(36.01757171064928,129.32247736756324 ),
	    new daum.maps.LatLng(36.01790880330885, 129.3225177625824),
	    new daum.maps.LatLng(36.01801326450002,129.32270659728704 ),
	    new daum.maps.LatLng(36.01789946843249,129.32276702731525 ),
	    new daum.maps.LatLng(36.017896989777824,129.32312739940633 ),
	    new daum.maps.LatLng(36.01820222889053, 129.3235328535921 ),
	    new daum.maps.LatLng(36.018231777166704,129.32317050240678 ),
	    new daum.maps.LatLng(36.01840304793538, 129.32270140523713 ),
	    new daum.maps.LatLng(36.01869318696716, 129.32272378715567 )



	    ];

	// 지도에 표시할 선을 생성합니다
	var polyline = new daum.maps.Polyline({
	    path: linePath, // 선을 구성하는 좌표배열 입니다
	    strokeWeight: 5, // 선의 두께 입니다
	    strokeColor: '#FFAE00', // 선의 색깔입니다
	    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
	    strokeStyle: 'solid' // 선의 스타일입니다
	});

	// 지도에 선을 표시합니다 
	polyline.setMap(map); 

	var distance = Math.round(polyline.getLength());
	var content = getTimeHTML(distance);
	showDistance(content, points[1]);  
}

else if(desti == '풋살장') // 풋살장
{

	// 버튼을 클릭하면 아래 배열의 좌표들이 모두 보이게 지도 범위를 재설정합니다 
	var points = [
	    new daum.maps.LatLng(36.016979731310045,129.3209433656856 ),
	    new daum.maps.LatLng(36.017824702394094, 129.3239515263824)
	];

	// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
	var bounds = new daum.maps.LatLngBounds();    

	var i, marker_1, marker_2;
	    // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
	    marker_1 =     new daum.maps.Marker({ position : points[0] });
	    marker_1.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[0]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">RC</div>'
        });
        infowindow.open(map, marker_1);
		// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다

		marker_2 =     new daum.maps.Marker({ position : points[1] });
	    marker_2.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[1]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">풋살장</div>'
        });
        infowindow.open(map, marker_2);

	function setBounds() {
	    // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
	    // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
	    map.setBounds(bounds);
	}


	// 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
	var linePath = [
	    new daum.maps.LatLng(36.016979731310045,129.3209433656856 ),
	    new daum.maps.LatLng(36.016749730840516,129.3209560266998 ),
	    new daum.maps.LatLng(36.01671231390727,129.3211434666783 ),
	    new daum.maps.LatLng(36.01664225264054,129.32138817347035 ),
	    new daum.maps.LatLng(36.01665527148199,129.32164640819968 ),
	    new daum.maps.LatLng(36.01703781844367,129.32166595188738 ),
	    new daum.maps.LatLng(36.01719524305875, 129.32167888946827 ),
	    new daum.maps.LatLng(36.01741409174977, 129.3217768087691 ),
	    new daum.maps.LatLng(36.017388355760346, 129.32205886232123 ),
	    new daum.maps.LatLng(36.01730612735876, 129.3222338973507),
	    new daum.maps.LatLng(36.01757171064928,129.32247736756324 ),
	    new daum.maps.LatLng(36.01790880330885, 129.3225177625824),
	    new daum.maps.LatLng(36.01801326450002,129.32270659728704 ),
	    new daum.maps.LatLng(36.01789946843249,129.32276702731525 ),
	    new daum.maps.LatLng(36.01789940211288,129.3231191522856),
	    new daum.maps.LatLng(36.018135820285735,129.32347267728312 ),
	    new daum.maps.LatLng(36.01807903644666,129.3239617701747 ),
	    new daum.maps.LatLng(36.017824702394094, 129.3239515263824)


	    ];

	// 지도에 표시할 선을 생성합니다
	var polyline = new daum.maps.Polyline({
	    path: linePath, // 선을 구성하는 좌표배열 입니다
	    strokeWeight: 5, // 선의 두께 입니다
	    strokeColor: '#FFAE00', // 선의 색깔입니다
	    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
	    strokeStyle: 'solid' // 선의 스타일입니다
	});

	// 지도에 선을 표시합니다 
	polyline.setMap(map); 

	var distance = Math.round(polyline.getLength());
	var content = getTimeHTML(distance);
	showDistance(content, points[1]);  
}

else if(desti == '화학관') // 화학관
{

	// 버튼을 클릭하면 아래 배열의 좌표들이 모두 보이게 지도 범위를 재설정합니다 
	var points = [
	    new daum.maps.LatLng(36.016979731310045,129.3209433656856 ),
	    new daum.maps.LatLng(36.02040818883579, 129.3208193597243)
	];

	// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
	var bounds = new daum.maps.LatLngBounds();    

	var i, marker_1, marker_2;
	    // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
	    marker_1 =     new daum.maps.Marker({ position : points[0] });
	    marker_1.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[0]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">RC</div>'
        });
        infowindow.open(map, marker_1);
		// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다

		marker_2 =     new daum.maps.Marker({ position : points[1] });
	    marker_2.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[1]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">화학관</div>'
        });
        infowindow.open(map, marker_2);

	function setBounds() {
	    // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
	    // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
	    map.setBounds(bounds);
	}


	// 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
	var linePath = [
			new daum.maps.LatLng(36.016979731310045,129.3209433656856 ),
		    new daum.maps.LatLng(36.016749730840516,129.3209560266998 ),
		    new daum.maps.LatLng(36.01671231390727,129.3211434666783 ),
		    new daum.maps.LatLng(36.01664225264054,129.32138817347035 ),
		    new daum.maps.LatLng(36.01665527148199,129.32164640819968 ),
		    new daum.maps.LatLng(36.01703781844367,129.32166595188738 ),
		    new daum.maps.LatLng(36.01719524305875, 129.32167888946827 ),
		    new daum.maps.LatLng(36.01741409174977, 129.3217768087691 ),

		    new daum.maps.LatLng(36.017864, 129.321775),
		    new daum.maps.LatLng( 36.018376, 129.321817),
		    new daum.maps.LatLng(36.018949, 129.321302),
			new daum.maps.LatLng(36.019313, 129.321163),
		    new daum.maps.LatLng(36.020154, 129.319951),

		    new daum.maps.LatLng(36.02050285385673, 129.32046722558846 ),
		    new daum.maps.LatLng(36.02033164945607,129.3207006591336 ),
		    new daum.maps.LatLng(36.02040818883579, 129.3208193597243)
	    ];

	// 지도에 표시할 선을 생성합니다
	var polyline = new daum.maps.Polyline({
	    path: linePath, // 선을 구성하는 좌표배열 입니다
	    strokeWeight: 5, // 선의 두께 입니다
	    strokeColor: '#FFAE00', // 선의 색깔입니다
	    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
	    strokeStyle: 'solid' // 선의 스타일입니다
	});

	// 지도에 선을 표시합니다 
	polyline.setMap(map); 

	var distance = Math.round(polyline.getLength());
	var content = getTimeHTML(distance);
	showDistance(content, points[1]);  
}

else if(desti == '생명관') // 생명관
{

	// 버튼을 클릭하면 아래 배열의 좌표들이 모두 보이게 지도 범위를 재설정합니다 
	var points = [
	    new daum.maps.LatLng(36.016979731310045,129.3209433656856 ),
	    new daum.maps.LatLng(36.02080028553159, 129.32034563093717)
	];

	// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
	var bounds = new daum.maps.LatLngBounds();    

	var i, marker_1, marker_2;
	    // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
	    marker_1 =     new daum.maps.Marker({ position : points[0] });
	    marker_1.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[0]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">RC</div>'
        });
        infowindow.open(map, marker_1);
		// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다

		marker_2 =     new daum.maps.Marker({ position : points[1] });
	    marker_2.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[1]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">생명관</div>'
        });
        infowindow.open(map, marker_2);

	function setBounds() {
	    // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
	    // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
	    map.setBounds(bounds);
	}


	// 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
	var linePath = [
			new daum.maps.LatLng(36.016979731310045,129.3209433656856 ),
		    new daum.maps.LatLng(36.016749730840516,129.3209560266998 ),
		    new daum.maps.LatLng(36.01671231390727,129.3211434666783 ),
		    new daum.maps.LatLng(36.01664225264054,129.32138817347035 ),
		    new daum.maps.LatLng(36.01665527148199,129.32164640819968 ),
		    new daum.maps.LatLng(36.01703781844367,129.32166595188738 ),
		    new daum.maps.LatLng(36.01719524305875, 129.32167888946827 ),
		    new daum.maps.LatLng(36.01741409174977, 129.3217768087691 ),

		    new daum.maps.LatLng(36.017864, 129.321775),
		    new daum.maps.LatLng( 36.018376, 129.321817),
		    new daum.maps.LatLng(36.018949, 129.321302),
			new daum.maps.LatLng(36.019313, 129.321163),
		    new daum.maps.LatLng(36.020154, 129.319951),
		    new daum.maps.LatLng(36.02050285385673, 129.32046722558846 ),

		    new daum.maps.LatLng(36.02068713604524, 129.32025635664564 ),
		    new daum.maps.LatLng(36.02080028553159, 129.32034563093717)
	    ];

	// 지도에 표시할 선을 생성합니다
	var polyline = new daum.maps.Polyline({
	    path: linePath, // 선을 구성하는 좌표배열 입니다
	    strokeWeight: 5, // 선의 두께 입니다
	    strokeColor: '#FFAE00', // 선의 색깔입니다
	    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
	    strokeStyle: 'solid' // 선의 스타일입니다
	});

	// 지도에 선을 표시합니다 
	polyline.setMap(map); 

	var distance = Math.round(polyline.getLength());
	var content = getTimeHTML(distance);
	showDistance(content, points[1]);  
}

else if(desti == '정보통신연구소') //정통연
{
	// 버튼을 클릭하면 아래 배열의 좌표들이 모두 보이게 지도 범위를 재설정합니다 
	var points = [
	    new daum.maps.LatLng(36.01704491567303,129.3206014725413),
	    new daum.maps.LatLng(36.01070384051693, 129.32131376429882 )
	];

	// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
	var bounds = new daum.maps.LatLngBounds();    

	var i, marker_1, marker_2;
	    // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
	    marker_1 =     new daum.maps.Marker({ position : points[0] });
	    marker_1.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[0]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">RC</div>'
        });
        infowindow.open(map, marker_1);
		// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다

		marker_2 =     new daum.maps.Marker({ position : points[1] });
	    marker_2.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[1]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">정통연</div>'
        });
        infowindow.open(map, marker_2);

	function setBounds() {
	    // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
	    // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
	    map.setBounds(bounds);
	}


	// 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
	var linePath = [
	    new daum.maps.LatLng(36.01704491567303,129.3206014725413),
	    new daum.maps.LatLng(36.01679792276822,129.32067740629327),
	    new daum.maps.LatLng(36.01607854999231,129.32060362641016),
	    new daum.maps.LatLng(36.01587878274448,129.32045082017473 ),
	    new daum.maps.LatLng(36.015696912725815,129.32065342946652 ),
	    new daum.maps.LatLng(36.015202316966906,129.32176735425324 ),
	    new daum.maps.LatLng(36.0146119677856,129.3214284164861 ),
	    new daum.maps.LatLng(36.01421350102373,129.32141672570736),
	    new daum.maps.LatLng(36.01394013693197,129.32145861076728 ),
	    new daum.maps.LatLng(36.01377745847204,129.32148433550594),
	    new daum.maps.LatLng(36.01363027280851,129.32140793206443 ),
	    new daum.maps.LatLng(36.01317456645045,129.32109513381627 ),
	    new daum.maps.LatLng(36.012898315291004,129.3207044282922),
	    new daum.maps.LatLng(36.01233964498791, 129.31989234761306 ),
	    new daum.maps.LatLng(36.010831084961445, 129.32148938605908 ),
	    new daum.maps.LatLng(36.01070384051693, 129.32131376429882 )
	    ];

	// 지도에 표시할 선을 생성합니다
	var polyline = new daum.maps.Polyline({
	    path: linePath, // 선을 구성하는 좌표배열 입니다
	    strokeWeight: 5, // 선의 두께 입니다
	    strokeColor: '#FFAE00', // 선의 색깔입니다
	    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
	    strokeStyle: 'solid' // 선의 스타일입니다
	});

	// 지도에 선을 표시합니다 
	polyline.setMap(map); 

	var distance = Math.round(polyline.getLength());
	var content = getTimeHTML(distance);
	showDistance(content, points[1]);  
}

else if(desti == '대운동장') //대운동장
{
	// 버튼을 클릭하면 아래 배열의 좌표들이 모두 보이게 지도 범위를 재설정합니다 
	var points = [
	    new daum.maps.LatLng(36.01704491567303,129.3206014725413),
	    new daum.maps.LatLng(36.01304738633608,129.32010162633992 )
	];

	// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
	var bounds = new daum.maps.LatLngBounds();    

	var i, marker_1, marker_2;
	    // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
	    marker_1 =     new daum.maps.Marker({ position : points[0] });
	    marker_1.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[0]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">RC</div>'
        });
        infowindow.open(map, marker_1);
		// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다

		marker_2 =     new daum.maps.Marker({ position : points[1] });
	    marker_2.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[1]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">대운동장</div>'
        });
        infowindow.open(map, marker_2);

	function setBounds() {
	    // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
	    // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
	    map.setBounds(bounds);
	}


	// 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
	var linePath = [
	    new daum.maps.LatLng(36.01704491567303,129.3206014725413),
	    new daum.maps.LatLng(36.01679792276822,129.32067740629327),
	    new daum.maps.LatLng(36.01607854999231,129.32060362641016),
	    new daum.maps.LatLng(36.01587878274448,129.32045082017473 ),
	    new daum.maps.LatLng(36.015696912725815,129.32065342946652 ),
	    new daum.maps.LatLng(36.015202316966906,129.32176735425324 ),
	    new daum.maps.LatLng(36.0146119677856,129.3214284164861 ),
	    new daum.maps.LatLng(36.01421350102373,129.32141672570736),
	    new daum.maps.LatLng(36.01394013693197,129.32145861076728 ),
	    new daum.maps.LatLng(36.01377745847204,129.32148433550594),
	    new daum.maps.LatLng(36.01363027280851,129.32140793206443 ),

	    new daum.maps.LatLng(36.013603638422786,129.32115485287076 ),
	    new daum.maps.LatLng(36.01313121403541,129.32042569278673 ),
	    new daum.maps.LatLng(36.013177525826535,129.3203605111715 ),
	    new daum.maps.LatLng(36.01304738633608,129.32010162633992 )
	    ];

	// 지도에 표시할 선을 생성합니다
	var polyline = new daum.maps.Polyline({
	    path: linePath, // 선을 구성하는 좌표배열 입니다
	    strokeWeight: 5, // 선의 두께 입니다
	    strokeColor: '#FFAE00', // 선의 색깔입니다
	    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
	    strokeStyle: 'solid' // 선의 스타일입니다
	});

	// 지도에 선을 표시합니다 
	polyline.setMap(map); 

	var distance = Math.round(polyline.getLength());
	var content = getTimeHTML(distance);
	showDistance(content, points[1]);  
}

else if(desti == '국제관') //국제관
{
	// 버튼을 클릭하면 아래 배열의 좌표들이 모두 보이게 지도 범위를 재설정합니다 
	var points = [
	    new daum.maps.LatLng(36.01704491567303,129.3206014725413),
	    new daum.maps.LatLng(36.013896941561796,129.32113018686172 )
	];

	// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
	var bounds = new daum.maps.LatLngBounds();    

	var i, marker_1, marker_2;
	    // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
	    marker_1 =     new daum.maps.Marker({ position : points[0] });
	    marker_1.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[0]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">RC</div>'
        });
        infowindow.open(map, marker_1);
		// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다

		marker_2 =     new daum.maps.Marker({ position : points[1] });
	    marker_2.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[1]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">포스코국제관</div>'
        });
        infowindow.open(map, marker_2);

	function setBounds() {
	    // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
	    // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
	    map.setBounds(bounds);
	}


	// 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
	var linePath = [
	    new daum.maps.LatLng(36.01704491567303,129.3206014725413),
	    new daum.maps.LatLng(36.01679792276822,129.32067740629327),
	    new daum.maps.LatLng(36.01607854999231,129.32060362641016),
	    new daum.maps.LatLng(36.01587878274448,129.32045082017473 ),
	    new daum.maps.LatLng(36.015696912725815,129.32065342946652 ),
	    new daum.maps.LatLng(36.015202316966906,129.32176735425324 ),
	    new daum.maps.LatLng(36.0146119677856,129.3214284164861 ),

	    new daum.maps.LatLng(36.01423816200911,129.32119010215803 ),
	    new daum.maps.LatLng(36.013896941561796,129.32113018686172 )
	    ];

	// 지도에 표시할 선을 생성합니다
	var polyline = new daum.maps.Polyline({
	    path: linePath, // 선을 구성하는 좌표배열 입니다
	    strokeWeight: 5, // 선의 두께 입니다
	    strokeColor: '#FFAE00', // 선의 색깔입니다
	    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
	    strokeStyle: 'solid' // 선의 스타일입니다
	});

	// 지도에 선을 표시합니다 
	polyline.setMap(map); 

	var distance = Math.round(polyline.getLength());
	var content = getTimeHTML(distance);
	showDistance(content, points[1]);  
}

else if(desti == 'C5') //C5
{

	// 버튼을 클릭하면 아래 배열의 좌표들이 모두 보이게 지도 범위를 재설정합니다 
	var points = [
	    new daum.maps.LatLng(36.01704491567303,129.3206014725413),
	    new daum.maps.LatLng(36.014007400849756, 129.32565817333497 )
	];

	// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
	var bounds = new daum.maps.LatLngBounds();    

	var i, marker_1, marker_2;
	    // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
	    marker_1 =     new daum.maps.Marker({ position : points[0] });
	    marker_1.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[0]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">RC</div>'
        });
        infowindow.open(map, marker_1);
		// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다

		marker_2 =     new daum.maps.Marker({ position : points[1] });
	    marker_2.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[1]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">C5</div>'
        });
        infowindow.open(map, marker_2);

	function setBounds() {
	    // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
	    // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
	    map.setBounds(bounds);
	}

	// 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
	var linePath = [
	    new daum.maps.LatLng(36.01704491567303,129.3206014725413),
	    new daum.maps.LatLng(36.01679792276822,129.32067740629327),
	    new daum.maps.LatLng(36.01607854999231,129.32060362641016),
	    new daum.maps.LatLng(36.01587878274448,129.32045082017473 ),
	    new daum.maps.LatLng(36.015696912725815,129.32065342946652 ),
	    new daum.maps.LatLng(36.015202316966906,129.32176735425324 ),
	    new daum.maps.LatLng(36.01497215245372,129.3219047728436),
	    new daum.maps.LatLng(36.01462437012094,129.32264869730224 ),

	    new daum.maps.LatLng(36.01467174144132,129.3229938828157 ),
	    new daum.maps.LatLng(36.01480831001946,129.3231531549053 ),
	    new daum.maps.LatLng(36.01510214162469,129.32333368075297 ),
	    new daum.maps.LatLng(36.01498891734664,129.32382941506884 ),
	    new daum.maps.LatLng(36.014923412107684,129.3239550283528),
	    new daum.maps.LatLng(36.01510500372489,129.32411562511785 ),
	    new daum.maps.LatLng(36.01505803441316,129.32444695171324 ),
	    new daum.maps.LatLng(36.01461955521607,129.32498857738625 ),
	    new daum.maps.LatLng(36.013299980770185,129.32566510570947 ),
	    new daum.maps.LatLng(36.01341188306877,129.32593455412717 ),
	    new daum.maps.LatLng(36.014007400849756, 129.32565817333497 ),
	    ];

	// 지도에 표시할 선을 생성합니다
	var polyline = new daum.maps.Polyline({
	    path: linePath, // 선을 구성하는 좌표배열 입니다
	    strokeWeight: 5, // 선의 두께 입니다
	    strokeColor: '#FFAE00', // 선의 색깔입니다
	    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
	    strokeStyle: 'solid' // 선의 스타일입니다
	});

	// 지도에 선을 표시합니다 
	polyline.setMap(map); 

	var distance = Math.round(polyline.getLength());
	var content = getTimeHTML(distance);
	showDistance(content, points[1]);  
}

else if(desti == '버스정류장') //버스정류장
{

	// 버튼을 클릭하면 아래 배열의 좌표들이 모두 보이게 지도 범위를 재설정합니다 
	var points = [
	    new daum.maps.LatLng(36.01704292655398 ,129.32093690171936 ),
	    new daum.maps.LatLng(36.01605483530423,129.32461763876753 )
	];

	// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
	var bounds = new daum.maps.LatLngBounds();    

	var i, marker_1, marker_2;
	    // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
	    marker_1 =     new daum.maps.Marker({ position : points[0] });
	    marker_1.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[0]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">RC</div>'
        });
        infowindow.open(map, marker_1);
		// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다

		marker_2 =     new daum.maps.Marker({ position : points[1] });
	    marker_2.setMap(map);
	    // LatLngBounds 객체에 좌표를 추가합니다
	    bounds.extend(points[1]);
	    // 인포윈도우를 생성합니다
		var infowindow = new daum.maps.InfoWindow({
		    content: '<div style="width:150px;text-align:center;padding:6px 0;">버스정류장</div>'
        });
        infowindow.open(map, marker_2);

	function setBounds() {
	    // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
	    // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
	    map.setBounds(bounds);
	}

	// 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
	var linePath = [
	    new daum.maps.LatLng(36.01704292655398 ,129.32093690171936 ),
	    new daum.maps.LatLng(36.01674522839151,129.32095589461585),
	    new daum.maps.LatLng(36.01672367734339,129.32113825483756),
	    new daum.maps.LatLng(36.01667586258969,129.3212810278074 ),
	    new daum.maps.LatLng(36.01667253550454 ,129.32145283205943),
	    new daum.maps.LatLng(36.01667756903929 ,129.3216581529575),
	    new daum.maps.LatLng(36.01605537546761 ,129.32156780775753 ),
	    new daum.maps.LatLng(36.01580688217988 ,129.3216048775434 ),
	    new daum.maps.LatLng(36.01556760260899 ,129.32186402324302),
	    new daum.maps.LatLng(36.01545244790808,129.3225759662957 ),
	    new daum.maps.LatLng(36.01535853324745,129.32277283402422 ),
	    new daum.maps.LatLng(36.01539459846145 ,129.3230040157056 ),
	    new daum.maps.LatLng(36.01514459259158 ,129.32335156263431 ),
	    new daum.maps.LatLng(36.0150973469982 ,129.32392963909748),
	    new daum.maps.LatLng(36.015674755445424,129.3245870634981 ),
	    new daum.maps.LatLng(36.0157861879296,129.32464856161545 ),
	    new daum.maps.LatLng(36.01605483530423,129.32461763876753 )
	    ];
	// 지도에 표시할 선을 생성합니다
	var polyline = new daum.maps.Polyline({
	    path: linePath, // 선을 구성하는 좌표배열 입니다
	    strokeWeight: 5, // 선의 두께 입니다
	    strokeColor: '#FFAE00', // 선의 색깔입니다
	    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
	    strokeStyle: 'solid' // 선의 스타일입니다
	});
	// 지도에 선을 표시합니다 
	polyline.setMap(map); 


	var distance = Math.round(polyline.getLength());
	var content = getTimeHTML(distance);
	showDistance(content, points[1]);  
}

	// 커스텀 오버레이에 표시할 내용입니다     
	function getTimeHTML(distance) {
	    // 도보의 시속은 평균 4km/h 이고 도보의 분속은 67m/min입니다
	    var walkkTime = distance / 67 | 0;
	    var walkHour = '', walkMin = '';
	    // 계산한 도보 시간이 60분 보다 크면 시간으로 표시합니다
	    if (walkkTime > 60) {
	        walkHour = '<span class="number">' + Math.floor(walkkTime / 60) + '</span>시간 '
	    }
	    walkMin = '<span class="number">' + walkkTime % 60 + '</span>분'
	    // 자전거의 평균 시속은 16km/h 이고 이것을 기준으로 자전거의 분속은 267m/min입니다
	    var bycicleTime = distance / 227 | 0;
	    var bycicleHour = '', bycicleMin = '';
	    // 계산한 자전거 시간이 60분 보다 크면 시간으로 표출합니다
	    if (bycicleTime > 60) {
	        bycicleHour = '<span class="number">' + Math.floor(bycicleTime / 60) + '</span>시간 '
	    }
	    bycicleMin = '<span class="number">' + bycicleTime % 60 + '</span>분'
	    // 거리와 도보 시간, 자전거 시간을 가지고 HTML Content를 만들어 리턴합니다
	    var content = '<ul class="dotOverlay distanceInfo">';
	    content += '    <li>';
	    content += '        <span class="label">총거리</span><span class="number">' + distance + '</span>m';
	    content += '    </li>';
	    content += '    <li>';
	    content += '        <span class="label">도보</span>' + walkHour + walkMin;
	    content += '    </li>';
	    content += '    <li>';
	    content += '        <span class="label">자전거</span>' + bycicleHour + bycicleMin;
	    content += '    </li>';
	    content += '</ul>'
	    return content;
	}

	function showDistance(content, position) {
        // 커스텀 오버레이를 생성하고 지도에 표시합니다
        distanceOverlay = new daum.maps.CustomOverlay({
            map: map, // 커스텀오버레이를 표시할 지도입니다
            content: content,  // 커스텀오버레이에 표시할 내용입니다
            position: position, // 커스텀오버레이를 표시할 위치입니다.
            xAnchor: 0,
            yAnchor: 0,
            zIndex: 3  
        });      
    }

break;
default:
	document.write("input again please");
}
