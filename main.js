let Energy = function () {
    this.energy = 0;
    this.get_energy = function () {
        return this.energy;
    };

    this.set_energy = function (energy) {
        this.energy = energy;
    };

    this.energy_decrease = function () {
        if (this.energy > 0) {
            this.energy--;
        }
    };

};

let Phone = function (name) {
    this.name = name;
    this.battery = battery;
    this.message = [];
    this.inbox = [];
    this.outbox = [];
    this.status = false;

    this.set_battery = function (baterry) {
        this.battery = baterry;
    };

    this.batteryInfo = function () {
        return this.battery.get_energy()
    };

    this.checkStatus = function () {
        if (this.status) {
            alert("The phone is on");
        } else {
            alert("phone not turned on");
        }
    };

    this.turnOn = function () {

        if (this.batteryInfo() > 10) {
            alert("Phone turned on");
        } else if (this.batteryInfo() <= 10) {
            alert("Phone turned on");
            alert("low battery");

        } else {
            alert("out of battery");
        }
        return this.status = true;
    };

    this.turnOff = function () {
        alert("The phone is off");
        return this.status = false;

    };


    this.writeMsg = function (msg) {
        this.message = msg;
    };
    this.sendMsg = function (phone) {
        if (this.status) {
            this.outbox.push(this.message);
            phone.inbox.push(this.message);
        } else {
            alert("Phone turned off");
        }

    };

    this.phoneStatus = function () {
        if (this.batteryInfo() > 10) {

        } else if (this.batteryInfo() >= 10) {
            alert("low battery");

        } else if (this.batteryInfo() === 0){
            alert("out of battery , The phone is off");
            return this.status = false
        }
    }


};

let battery = new Energy();
let battery1 = new Energy();
battery.set_energy(100);
let iphonex = new Phone("iphonex");
iphonex.set_battery(battery);
let nokia = new Phone("nokia");
battery1.set_energy(100);
nokia.set_battery(battery1);

function addbattery(battery) {
    battery.set_energy(100);

}

function IPcheckBatteryInfo() {
    alert(iphonex.batteryInfo());
}

function NKcheckBatteryInfo() {
    alert(iphonex.batteryInfo());
}

function phoneOn(phone) {
    phone.turnOn();
    setInterval(function () {
        battery.energy_decrease();
        phone.phoneStatus();


    }, 8000);


}


function sendMsg(phone1, phone2) {

    let mess = document.getElementById(phone1.name + "-msg").value;
    phone1.writeMsg(mess);
    phone1.sendMsg(phone2);
    document.getElementById(phone1.name + "-msg").value = " ";
    console.log(phone1);
    console.log(phone2);

}


function uotbox(phone) {
    if (phone.status) {
        let html = "";
        for (let i = 0; i < phone.outbox.length; i++) {
            html += '<li id="' + i + '" >';
            html += phone.outbox[i];
            html += '</li>';

            document.getElementById(phone.name + "-outbox").innerHTML = html;
        }
    } else {
        alert("Phone turned off");
    }
}


function inbox(phone) {
    if (phone.status) {
        let html = "";
        for (let i = 0; i < phone.inbox.length; i++) {
            html += '<li id="' + i + '" >';
            html += phone.inbox[i];
            html += '</li>';

            document.getElementById(phone.name + "-inbox").innerHTML = html;
        }
    } else {
        alert("Phone turned off");
    }

}


