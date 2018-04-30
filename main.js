((function () {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext('2d');
    context.fillStyle = "green";
    context.fillRect(0,0,800,600);
    function init(){
        console.log("INITIALIZING GAME");
    }
    function loop(){
        if(this.running){
            console.log("running");
            window.requestAnimationFrame(loop);
        }
    }
    function start(){
    }
    function stop(){

    }
    function update(){

    }
    function render(){

    }
    init();
})());