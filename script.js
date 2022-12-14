import {turnOffWebcam,turnOnWebcam,getStateWebcam,openSetting,turnOffDoNotDisturb,turnOnDoNotDisturb,getStateDoNotDisturb,restart,turnOff,suspend,lockScreen,turnOffTouchpad,turnOnTouchpad,getStateTouchpad,toggleMicro,getStateMicro, checkLogin, getStateAirplaneMode, getStateBluetooth, getStateNightLight, getStateWifi, getValueBright, getValueVolume, login, setValueBright, setValueVolum, turnOffBluetooth, turnOffNightLight, turnOffWifi, turnOnAirplaneMode, turnOnBluetooth, turnOnNightLight, turnOnWifi } from './execshell.js';
const volume = document.getElementById("volume");
const wifiCheckbox = document.getElementById("wifiCheckbox");
const wifiButton = document.getElementById("wifiButton");
const bluetoothButton = document.getElementById("bluetoothButton");
const bluetoothCheckbox = document.getElementById("bluetoothCheckbox");
const airplaneButton = document.getElementById("airplaneButton");
const airplaneCheckbox = document.getElementById("airplaneCheckbox");
const nightLightButton = document.getElementById("nightLightButton");
const nightLightCheckbox = document.getElementById("nightLightCheckbox");
const webcamButton = document.getElementById("webcamButton");
const webcamCheckbox = document.getElementById("webcamCheckbox");
const microButton = document.getElementById("microButton");
const microCheckbox = document.getElementById("microCheckbox");
const touchpadButton = document.getElementById("touchpadButton");
const touchpadCheckbox = document.getElementById("touchpadCheckbox");
const keyboardButton = document.getElementById("keyboardButton");
const keyboardCheckbox = document.getElementById("keyboardCheckbox");
const doNotDisturbButton = document.getElementById("doNotDisturbButton");
const doNotDisturbCheckbox = document.getElementById("doNotDisturbCheckbox");
const brightness = document.getElementById("brightness");
const password = document.getElementById("password");
const BtnLogin = document.getElementById("button-submit");
const BtnCancel = document.getElementById("button-cancel");
const BtnExit = document.getElementById("btn-exit");
const Spinner = document.getElementById("spinner");
const formLogin = document.getElementsByClassName("containner-login")[0];
  volume.oninput = ()=>{  
    if(volume.value>=90){
      volumeIcon.setAttribute("src","./img/volume-high-outline.svg")
    }
    else if(volume.value>=50){
      volumeIcon.setAttribute("src","./img/volume-medium-outline.svg")
    }
    else if(volume.value>0){
      volumeIcon.setAttribute("src","./img/volume-low-outline.svg")
    }
    else {
      volumeIcon.setAttribute("src","./img/volume-mute-outline.svg")
    }
    setValueVolum(volume.value);
  }
  brightness.oninput = function() {
    setValueBright(brightness.value);
  }
//   brightness.oninput = ()=>{
//     document.getElementById("progressBright").setAttribute("style", "--value:" + brightness.value);
//     setValueBright(brightness.value);
//   }
//   bluetoothCheckbox.onchange = function(){
//     if (bluetoothCheckbox.checked == true) {
//       turnOnBluetooth();
//       wrapBluetooth.classList.remove("btnDisable");
//     } else {
//       turnOffBluetooth();
//       wrapBluetooth.classList.add("btnDisable");
//     }
//   }
  // wifiCheckbox.onchange = function(){
  //   console.log("nguyen duc duy");
  //   alert("checkbox");
  // }
  
  // wrapWifi.onclick = function(){
  //   wifiCheckbox.checked = !wifiCheckbox.checked;
  // }
  // wrapBluetooth.onclick = function(){
  //   bluetoothCheckbox.checked = !bluetoothCheckbox.checked;
  // }
// window.onload = function () {
//   const password = "68709502";
//   login(password);
//   volume.value = getValueVolume();
//   brightness.value = getValueBright();
//     wifiCheckbox.checked = getStateWifi();
//     bluetoothCheckbox.checked = getStateBluetooth();
//     brightness.oninput();
//     volume.oninput();
//     bluetoothCheckbox.onchange();
//     wifiCheckbox.onchange();
//   }
wifiCheckbox.onchange = ()=>{
  if(wifiCheckbox.checked == true){
    wifiButton.classList.remove("none-active");
    var img = wifiButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/wifi_light.png");
  }
  else{
    wifiButton.classList.add("none-active");
    var img = wifiButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/wifi-off.png");
  }
}
wifiButton.onclick = function(){
  wifiCheckbox.checked = !wifiCheckbox.checked;
  wifiCheckbox.onchange();
  if(wifiCheckbox.checked){
    turnOnWifi();
  }else{
    turnOffWifi();
  }
}
bluetoothCheckbox.onchange = () => {
  if(bluetoothCheckbox.checked == true){
    bluetoothButton.classList.remove("none-active");
    var img = bluetoothButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/bluetooth_white.png");
  }
  else{
    bluetoothButton.classList.add("none-active");
    var img = bluetoothButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/bluetooth-off.png");
  }
}
bluetoothButton.onclick = function(){
  bluetoothCheckbox.checked = !bluetoothCheckbox.checked;
  bluetoothCheckbox.onchange();
  if(bluetoothCheckbox.checked == true){
    turnOnBluetooth();
  }
  else{
    turnOffBluetooth();
  }
}
airplaneCheckbox.onchange = () => {
  if(airplaneCheckbox.checked == true){
    airplaneButton.classList.remove("none-active");
    var img = airplaneButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/airplane_white.png");
  }
  else{
    airplaneButton.classList.add("none-active");
    var img = airplaneButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/airplane-off.png");
    // turnOffAirplaneMode();
  }
}
airplaneButton.onclick = function(){
  airplaneCheckbox.checked = !airplaneCheckbox.checked;
  airplaneCheckbox.onchange();
  if(airplaneCheckbox.checked == true) turnOnAirplaneMode();
}
nightLightCheckbox.onchange = () => {
  if(nightLightCheckbox.checked == true){
    nightLightButton.classList.remove("none-active");
    var img = nightLightButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/night_white.png");
  }
  else{
    nightLightButton.classList.add("none-active");
    var img = nightLightButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/night-off.png");
  }
}
nightLightButton.onclick = function(){
  nightLightCheckbox.checked = !nightLightCheckbox.checked;
  nightLightCheckbox.onchange();
  if(nightLightCheckbox.checked == true){
    turnOnNightLight();
  }
  else turnOffNightLight();
}
webcamCheckbox.onchange = function(){
  if(webcamCheckbox.checked == true){
    webcamButton.classList.remove("none-active");
    var img = webcamButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/webcam_white.png");
  }
  else{
    webcamButton.classList.add("none-active");
    var img = webcamButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/webcam-off.png");
  }
}
webcamButton.onclick = function(){
  webcamCheckbox.checked = !webcamCheckbox.checked;
  webcamCheckbox.onchange();
  if(webcamCheckbox.checked == true ) {
    turnOnWebcam();
  }
  else turnOffWebcam();
}
microCheckbox.onchange = function(){
  if(microCheckbox.checked == true){
    microButton.classList.remove("none-active");
    var img = microButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/micro_white.png");
  }
  else{
    microButton.classList.add("none-active");
    var img =  microButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/micro-off.png");
  }
}
microButton.onclick = function(){
  microCheckbox.checked = !microCheckbox.checked;
  microCheckbox.onchange();
  toggleMicro();
}
touchpadCheckbox.onchange = function(){
  if(touchpadCheckbox.checked == true){
    touchpadButton.classList.remove("none-active");
    var img = touchpadButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/touchpad_white.png");
  }
  else{
    touchpadButton.classList.add("none-active");
    var img = touchpadButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/touchpad-off.png");
  }
}
touchpadButton.onclick = function(){
  touchpadCheckbox.checked = !touchpadCheckbox.checked;
  touchpadCheckbox.onchange();
  if(touchpadCheckbox.checked == true){
    turnOnTouchpad();
  }
  else turnOffTouchpad();
}
keyboardCheckbox.onchange = function(){
  if(keyboardCheckbox.checked == true){
    keyboardButton.classList.remove("none-active");
    var img = keyboardButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/keyboard_white.png");
  }
  else{
    keyboardButton.classList.add("none-active");
    var img = keyboardButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/keyboard-off.png");
  }
}
keyboardButton.onclick = function(){
  keyboardCheckbox.checked = !keyboardCheckbox.checked;
  keyboardCheckbox.onchange();
  if(keyboardCheckbox.checked == true){
    // add code 
  }
}
doNotDisturbCheckbox.onchange = function(){
  if(doNotDisturbCheckbox.checked == true){
    doNotDisturbButton.classList.remove("none-active");
    var img = doNotDisturbButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/notification_white.png");
  }
  else{
    doNotDisturbButton.classList.add("none-active");
    var img = doNotDisturbButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/notification-off.png");
  }
}
doNotDisturbButton.onclick = function(){
  doNotDisturbCheckbox.checked = !doNotDisturbCheckbox.checked;
  doNotDisturbCheckbox.onchange();
  if(doNotDisturbCheckbox.checked == true){
    turnOnDoNotDisturb();
  }
  else turnOffDoNotDisturb();
}
BtnCancel.onclick = function () { 
  window.closeWindow();
}
BtnExit.onclick = function () {
  window.closeWindow();
}
function viewSpinner(ms) {
  Spinner.classList.remove("hide");
  return new Promise(resolve => setTimeout(resolve, ms));
}
BtnLogin.onclick = async function () {
  await viewSpinner(10);
  login(password.value);
  if (checkLogin()) {
    formLogin.classList.add("hide");
    Spinner.classList.add("hide");
    demo();
  } else {
    Spinner.classList.add("hide");
    password.value = "";
  }
}

window.onload = function () {
  if (checkLogin()) {
    formLogin.classList.add("hide");
    demo();
    }
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function demo() {
  while (true) {
    // get Status
    brightness.value = await getValueBright();
    volume.value = await getValueVolume();
    bluetoothCheckbox.checked = await getStateBluetooth();
    wifiCheckbox.checked = await getStateWifi();
    airplaneCheckbox.checked = await getStateAirplaneMode();
    nightLightCheckbox.checked = await getStateNightLight();
    webcamCheckbox.checked = await getStateWebcam();
    microCheckbox.checked = await getStateMicro();
    touchpadCheckbox.checked = await getStateTouchpad();
    doNotDisturbCheckbox.checked = await getStateDoNotDisturb();
    // set
    await brightness.oninput();
    await volume.oninput();
    await bluetoothCheckbox.onchange();
    await wifiCheckbox.onchange();
    await airplaneCheckbox.onchange();
    await nightLightCheckbox.onchange();
    await webcamCheckbox.onchange();
    await microCheckbox.onchange();
    await touchpadCheckbox.onchange();
    await doNotDisturbCheckbox.onchange();
    await sleep(5);
    }
}


