class Driving implements Behaviour  {
    car:Car;
    private callback:EventListener;

    constructor(c:Car){
        this.car = c;
        this.callback = (e: KeyboardEvent) => this.onKeyDown(e);
        window.addEventListener("keydown", this.callback);
    }

    draw(){
        this.car.x += this.car.speed;
    }

    public onKeyDown(e: KeyboardEvent): void {
        console.log(e.key);
        window.removeEventListener("keydown",this.callback);
        this.car.behaviour = new Jumping(this.car);
    }
}