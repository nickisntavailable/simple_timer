class Timer {
	constructor() {
		this.interval = 1000;
		this.currentTime = 0;
		this.timerId = null;
	}
	onTick = () => {};
	start() {
		if(this.timerId == null) {
			this.timerId = setInterval(() => {
				this.currentTime += this.interval / 1000;
				if(this.onTick) {
					this.onTick();
				}
			}, this.interval);
		}else {
			console.log("Timer is already running");
		}
	}
	stop() {
		if (this.timerId != null) {
			clearInterval(this.timerId);
		}
		this.timerId = null;
		this.currentTime = 0;
	}
}
module.exports = Timer;