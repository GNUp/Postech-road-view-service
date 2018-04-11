<DOCTYPE html>
<html>
<head>
<title>GNU board</title>
<style type="text/css">
html, body {
  display: table;

  width: 100%;
  height: 100%;

  font-family: 'Nunito', sans-serif;

  background-color: rgb(250, 236, 0);
  color: rgb(57, 0, 0);
}

.ryan_outter {
  display: table-cell;
  text-align: center;
  vertical-align: middle;

  position: relative;

  width: 100%;
  height: 100%;

  margin: 50px;
}

.ryan_inner {
  display: inline-block;
  position: relative;
}

.ears {
  position: absolute;
  left: 120px;

  margin-left: -60px;

  width: 130px;
  height: 130px;

  border-radius: 100%;
  border: 10px solid black;

  background-color: rgb(228, 152, 0);

  box-sizing: border-box;
}

.ears:after {
  content: "";
  position: absolute;
  left: 260px;

  margin-left: -10px;
  margin-top: -10px;

  width: 130px;
  height: 130px;

  border-radius: 100%;
  border: 10px solid black;

  background-color: rgb(228, 152, 0);

  box-sizing: border-box;
}

.ears_shadow {
  position: absolute;
  left: 70px;

  margin-left: -60px;

  width: 90px;
  height: 90px;

  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.1);

  box-sizing: border-box;
}

.ears_shadow_2 {
  content: "";
  position: absolute;
  left: 405px;
  top: 10px;

  margin-left: -60px;

  width: 90px;
  height: 90px;

  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.1);

  box-sizing: border-box;
}

.face {
  position: absolute;
  top: 15px;

  width: 500px;
  height: 500px;
  border-radius: 100% 100% 90% 90%;

  border: 10px solid;
  border-color: black;
  background-color: rgb(270, 152, 0);

  box-sizing: border-box;
}

.face_shadow {
  position: absolute;
  top: 10px;
  left: 30px;

  width: 460px;
  height: 460px;
  border-radius: 100% 100% 90% 90%;

  background-color: rgba(0, 0, 0, 0.1);
}

.eyebrows {
  position: absolute;

  left: 140px;
  top: 180px;

  margin-left: -50px;
  margin-top: -10px;

  width: 100px;
  height: 15px;

  border-radius: 15px;

  background-color: black;
}

.eyebrows:after {
  content: "";
  position: absolute;

  left: 200px;

  width: 100px;
  height: 15px;

  border-radius: 15px;

  background-color: black;
}


.eyes {
  position: absolute;

  left: 120px;
  top: 210px;

  margin-left: -15px;
  margin-top: -15px;

  width: 80px;
  height: 80px;
  border-radius: 100%;

  background-color: black;
}

.eyes::after{
  content: "";
  position: absolute;
  left: 190px;

  width: 80px;
  height: 80px;
  border-radius: 100%;

  background-color: black;
}

.mouth {
  position: absolute;
  left: 240px;
  top: 330px;

  margin-left: -92.5px;
  margin-top: -50px;

  width: 185px;
  height: 100px;
}

.mouth_part1 {
  position: absolute;
  width: 105px;
  height: 105px;

  border-radius: 100%;
  border: 10px solid black;

  background-color: white;

  box-sizing: border-box;
}

.mouth_part1:after {
  content: "";
  position: absolute;
  left: 80px;

  margin-left: -10px;
  margin-top: -10px;

  width: 105px;
  height: 105px;

  border-radius: 100%;
  border: 10px solid black;

  background-color: white;
  box-sizing: border-box;
}

.mouth_part2 {
  position: absolute;
  left: 50%;
  top: 1px;
  margin-left: -30px;

  width: 60px;
  height: 78px;

  border-top: 10px solid black;

  background-color: white;

  box-sizing: border-box;
}

.nose {
  position: absolute;
  left: 240px;
  top: 290px;

  margin-left: -25px;
  margin-top: -25px;

  width: 50px;
  height: 50px;

  border-radius: 100% 50% 50%;

  background-color: black;

  transform: rotate(45deg);
}
.text {
  margin-top: 520px;
  width: 500px;
}
.text > h1 {
  margin: 0;
  font-size: 40px;
  text-align: center;
}

.text > p {
  margin: -30px 0 0 0;

  font-size: 120px;
  font-weight: 700;
  text-align: center;
}
</style>
</head>
<body>
<link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

<div class="ryan_outter">
  <div class="ryan_inner">
    <div class="ears">
      <div class="ears_shadow">
      </div>
    </div>
    <div class="ears_shadow_2">
    </div>

    <div class="face">
      <div class="face_shadow">
      </div>

      <div class="eyebrows">
      </div>
      <div class="eyes">
      </div>
      <div class="mouth">
        <div class="mouth_part1">
        </div>
        <div class="mouth_part2">
        </div>
      </div>
      <div class="nose">
      </div>
    </div>
    <div class="text">
      <h1>CH0 s41d J01im! J0l1m!</h1>
      <p>JOLIM!</p>
    </div>
  </div>
</body>
</html>
