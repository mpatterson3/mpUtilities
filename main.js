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
            update();
            render();
            console.log("running");
            window.requestAnimationFrame(loop);
    }
    function start(){
        running = true;
    }
    function stop(){
        this.running = false;
        console.log("stopped");

    }
    function update(){
        testx++;
    }
    function render(){
	context.fillStyle="black";
        context.fillRect(testx,50,30,30);
    }
    init();
})());
