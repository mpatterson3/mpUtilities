((function () {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext('2d');
    context.fillStyle = "green";
    context.fillRect(0,0,800,600);
    let running = false;
    var testx;
    function init(){
        console.log("INITIALIZING GAME");
        start();
    }
    function loop(){
        if(this.running){
            update();
            render();
            console.log("running");
            window.requestAnimationFrame(loop);
        }
    }
    function start(){
        this.running = true;
    }
    function stop(){
        this.running = false;
        console.log("stopped");

    }
    function update(){
        testx++;
    }
    function render(){
        context.fillRect(x,50,30,30);
    }
    init();
})());