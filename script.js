const homework = document.querySelector('#homework');

class Timer{
    constructor(time, setMinutes ,launch){
        this.time = time;
        this.setMinutes = setMinutes;
        this.launch = launch;
        this.render(); 
    }

    

    createCounter1(){
        this.counter1 = document.createElement('div');
        this.counter1.textContent = '01:00';
        this.counter1.classList.add('timer');
        return this.counter1;
    }

     createCounter2(){
        this.counter2 = document.createElement('div');
        this.counter2.textContent = `${this.setMinutes}:00`;
        this.counter2.classList.add('timer')
        return this.counter2;
    }

    createStart(){
        this.start = document.createElement('button');
        this.start.textContent = 'Start';
        this.start.classList.add('start');
        return this.start;
    }

    createStop1(){
        this.stop1 = document.createElement('button');
        this.stop1.textContent = 'Stop';
        this.stop1.classList.add('stop1');
        return this.stop1;
    }

    createStop2(){
        this.stop2 = document.createElement('button');
        this.stop2.textContent = 'Stop';
        this.stop2.classList.add('stop');
        return this.stop2;
    }
    

    createLine1(){
        this.line1 = document.createElement('div');
        this.line1.classList.add('line1');
        return this.line1;
    }

    createLine2(){
        this.line2 = document.createElement('div');
        this.line2.classList.add('line2');
        return this.line2;
    }

    createElements(){
        this.container = document.createElement('div');
        this.container.classList.add('container');   
        homework.append(this.container);
        this.container.append(this.createCounter1());
        this.container.append(this.createStart());
        this.container.append(this.createStop1());
        this.container.append(this.createLine1());
        this.container.append(this.createCounter2());
        this.container.append(this.createStop2());
        this.container.append(this.createLine2());
    }
    
    ///////////////////////////////////////////////////

    change_Button(){
        this.start.addEventListener(`click`, () => {
            this.start.classList.remove(`start`);
            this.start.classList.toggle('stop1');
            this.stop1.classList.toggle(`start`);
            this.stop1.classList.remove(`stop1`);
        });   

        this.stop1.addEventListener(`click`, () => {
            this.stop1.classList.remove('start');
            this.stop1.classList.toggle('stop1');
            this.start.classList.toggle(`start`);
            this.start.classList.remove('stop1')
        }); 
    }

    lifeIntervalFirst(){
        this.intervalFirst = setInterval(() => {
            const currentWidth = this.line1.offsetWidth;
            const percent = (this.width / 100);
            if (currentWidth < percent ) {
                this.line1.style.width = `0`;
            }
            this.line1.style.width = `${currentWidth - percent}px`;
        }, 1000);
    }

    lifeIntervalSecond(){
        this.intervalSecond = setInterval(() => {
            const currentWidth = this.line2.offsetWidth;
            const percent = (this.width / 500);
            if (currentWidth < percent ) {
                this.line2.style.width = `0`;
            }
            this.line2.style.width = `${currentWidth - percent}px`;
        }, 1000);
    }

 

    stopTimer(){
        clearInterval(this.intervalFirst);
        clearInterval(this.intervalSecond);
        clearInterval(this.timeIntervalFirst); 
        clearInterval(this.timeIntervalSecond); 
        
    }

    stopOnlySecondTimer(){
        clearInterval(this.intervalSecond);
        clearInterval(this.timeIntervalSecond);
    }

    continueTimer(){
        this.countdownFirst();
    }


    countdownFirst() {
            if (this.seconds1 > 0) {
            this.timeIntervalFirst = setInterval(() =>  {
                if (this.seconds1  <= 0) {
                    clearInterval(this.timeInterval);
                } else {
                    this.seconds1 --;;
                    
                }
                this.counter1.innerHTML = "00:" + (this.seconds1  < 10 ? "0" : "") + String(this.seconds1 );
            }, 1000); 
            

    }
}

countdownSecond() {
    if (this.seconds2 > 0) {
    this.timeIntervalSecond = setInterval(() =>  {
        if (this.seconds2 <= 0) {
            this.seconds2 = 60;
            this.setMinutes--;
        } else {
            this.seconds2 = this.seconds2 - 2 ;
        if (this.setMinutes < 0) {
            this.stopTimer();
        }
        }
        this.counter2.innerHTML = `${this.setMinutes}:` + (this.seconds2 < 10 ? "0" : "") + String(this.seconds2);
    }, 2000); 
}
}


    render(){
        this.createElements(); 
        this.change_Button();
        this.seconds1 = this.time;
        this.seconds2 = this.time;
        this.width = this.line1.offsetWidth;
        this.stop1.addEventListener('click', this.stopTimer.bind(this));
        this.start.addEventListener('click', this.lifeIntervalFirst.bind(this));
        this.start.addEventListener('click', this.lifeIntervalSecond.bind(this));
        this.start.addEventListener('click', this.countdownFirst.bind(this));
        this.start.addEventListener('click', this.countdownSecond.bind(this));
        if (this.launch === true) {
            window.addEventListener('load', this.countdownSecond.bind(this));
        }
        this.stop1.addEventListener('click', this.stopTimer.bind(this));
        this.stop2.addEventListener('click', this.stopOnlySecondTimer.bind(this));
            
    }


}

const timer = new Timer(60, 90,  true);




// start the countdown

