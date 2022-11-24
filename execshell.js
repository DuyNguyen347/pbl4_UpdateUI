const { execSync } = require("child_process");
export const login = (password) => {
    try {
        execSync("echo "+password+" | sudo -S login");
    } catch (error) {
    }
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
