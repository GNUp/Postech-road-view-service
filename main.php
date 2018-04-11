<!DOCTYPE html>
<html>
<body>
<center><p style="color:red;" style"background-color:blue;">POSTECH Road Finding Web service</p>
<form name="select" action="list.php" method="get" >
<fieldset>
<legend>Input your location information</legend>	
출발점<label><input list="depart" name="depart" value="기숙사21동"></label>
<datalist id="depart">
 <option value="국제관">
 <option value="기숙사21동">
 <option value="대강당">
 <option value="대운동장">
 <option value="무은재기념관">
 <option value="버스정류장">
 <option value="생명관">
 <option value="정보통신연구소">
 <option value="지곡회관">
 <option value="청암학술정보관">
 <option value="체육관">
 <option value="통나무집">
 <option value="풋살장">
 <option value="화학관">
 <option value="학생회관">
 <option value="C5">
 </datalist>
<br><br>
도착점<input list="desti" name="desti">
<datalist id="desti">
 <option value="국제관">
 <option value="기숙사21동">
 <option value="대강당">
 <option value="대운동장">
 <option value="무은재기념관">
 <option value="버스정류장">
 <option value="생명관">
 <option value="정보통신연구소">
 <option value="지곡회관">
 <option value="청암학술정보관">
 <option value="체육관">
 <option value="통나무집">
 <option value="풋살장">
 <option value="화학관">
 <option value="학생회관">
 <option value="C5">
</datalist>
<br><br>
<input type="submit" value="submit">
<input type="reset" value="reset">
<input type="button" onclick="alert('본 서비스는 Postech hackathon의 결과물로 매우 주관적인 service입니다.\n제작자 김근우 김승환 문민재\nby 화실망했으면 team')" value="Information">
</fieldset>
</form><strong><p style="color:blue;"><br>모바일이라면 주소를 복사해서 인터넷브라우저로 들어가주세요<br><br></p></strong>
<img src="postech.jpg" alt="POSTECH" style="width:400px;height:400px;"></center>
</body>
</html>
