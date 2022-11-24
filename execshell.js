const { execSync } = require("child_process");
export const login = (password) => {
    try {
        execSync("echo "+password+" | sudo -S login");
    } catch (error) {
    }
}
export const checkLogin = () => {
    try {
        const max = execSync("sudo -n true", { encoding: "utf-8" });
    } catch (error) {
        return false;
    }
    return true;
}
export const turnOnBluetooth = ()=>{
  execSync("rfkill unblock bluetooth");
}
export const turnOffBluetooth = ()=>{
    execSync("rfkill block bluetooth");
}
export const turnOnWifi = ()=>{
    console.log("wifi on");
    execSync("nmcli radio wifi on")
}
export const turnOffWifi = ()=>{
    console.log("wifi off");
    execSync("nmcli radio wifi off")
}
export const setValueVolum = (value) => {
    execSync("amixer -D pulse sset Master " + value + "%");
}
export const setValueBright = (value) => {
    const max = execSync("cat /sys/class/backlight/intel_backlight/max_brightness", { encoding: "utf-8" });
    execSync("echo "+ Number.parseInt(value*max/100) +" | sudo tee /sys/class/backlight/intel_backlight/brightness");
}

export const getValueVolume = () => {
    const output = execSync("amixer -D pulse sget Master",{encoding: 'utf-8' });
    return output.split("[")[1].split("%")[0];
}
export const getValueBright = () => {
    const max = execSync("cat /sys/class/backlight/intel_backlight/max_brightness", { encoding: "utf-8" });
    const current = execSync("cat /sys/class/backlight/intel_backlight/brightness", { encoding: "utf-8" });
    return current / max*100;
}
export const getStateBluetooth = () => {
    const output = execSync("rfkill list bluetooth",{encoding: 'utf-8' });
    return (output.split("\n")[1].indexOf("yes") < 0);
}
export const getStateWifi = () => {
    const output = execSync("nmcli radio wifi",{encoding: 'utf-8' });
    if (output.trim()==="enabled")
        return true;
    return false;
}
export const getStateAirplaneMode = () =>{
    if(getStateBluetooth() == false && getStateWifi() == false) 
    {
        return true;
    }
    else 
    {
        return false;
    }
}
export const turnOnAirplaneMode = () => {
    execSync("rfkill block all");
}
export const turnOffAirplaneMode = () => {
    execSync("rfkill unblock all");
}
export const getStateNightLight = () => {
    const output = execSync("gsettings get org.gnome.settings-daemon.plugins.color night-light-enabled",{encoding: 'utf-8' });
    if (output.trim()=="true")
        return true;
    return false;
}
export const turnOnNightLight = () => {
    // console.log("on");
    execSync("gsettings set org.gnome.settings-daemon.plugins.color night-light-enabled true");
}
export const turnOffNightLight = () => {
    // console.log("off");
    execSync("gsettings set org.gnome.settings-daemon.plugins.color night-light-enabled false");
}
export const getStateMicro = () => {
    const output = execSync("pactl list | sed -n '/^Source/,/^$/p' | grep Mute",{encoding: 'utf-8' });
    if (output.includes("yes"))
        return true;
    return false;
}
export const toggleMicro = () => {
    execSync("amixer -D pulse sset Capture toggle");
}
export const getStateTouchpad = () => {

}
export const turnOnTouchpad = () => {
    execSync("gsettings set org.gnome.desktop.peripherals.touchpad send-events enabled")
}
export const turnOffTouchpad = () => {
    execSync("gsettings set org.gnome.desktop.peripherals.touchpad send-events disabled")
}
export const lockScreen = () => {
    execSync("xdg-screensaver lock")
}
export const suspend = () => {
    execSync("systemctl suspend")
}
export const turnOff = () => {
    execSync("sudo poweroff");
}
export const restart = () => {
    execSync("sudo reboot");
}
// them
export const getStateDoNotDisturb = () => {
    const output = execSync("gsettings get org.gnome.desktop.notifications show-banners",{encoding: 'utf-8' });
    if (output.includes("yes"))
        return true;
    return false;
}

export const turnOnDoNotDisturb = () => {
    execSync("gsettings set org.gnome.desktop.notifications show-banners true");
}

export const turnOffDoNotDisturb = () => {
    execSync("gsettings set org.gnome.desktop.notifications show-banners false");
}
export const openSetting = () => {
    execSync("gnome-control-center");
}

//them
export const getStateWebcam = () => {
    const output = execSync("Check state of webcam : ls -ltrh /dev/video*",{encoding: 'utf-8' });
    if (output.includes("yes"))
        return true;
    return false;
}
export const turnOnWebcam = () => {
    execSync('sudo modprobe uvcvideo')
}
export const turnOffWebcam = () => {
    execSync('sudo modprobe -r uvcvideo')
}