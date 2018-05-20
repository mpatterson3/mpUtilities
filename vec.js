
class vec{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    add(v){
        return new vec(this.x+v.x,this.y+v.y,this.z+v.z);
    }
    sub(v){
        return new vec(this.x-v.x,this.y-v.y,this.z-v.z);
    }
    scale(s){
        return new vec(this.x*s,this.y*s,this.z*s);
    }
    equals(v){
        return this.x==v.x && this.y==v.y && this.z==v.z;
    }
    display(){
        console.log("x: "+ this.x,"\ty: "+ this.y,"\tz: "+ this.z);
    }
    length(){
        return Math.sqrt((this.x*this.x)+(this.y*this.y)+(this.z*this.z));
    }
    unit_vector(){
        return this.scale(1/this.length());
    }
}
class ray{
    constructor(a,b){
        this.origin = a;
        this.direction = b;
    }
    pap (t){
        return this.origin.add(this.direction.scale(t));
    }
}
function color(r){
    let unit_direction = r.direction.unit_vector();
    let t = 0.5 * unit_direction.y + 1.0;
    return (1.0-t) * new vec(1,1,1) + new vec(-0.5,0.6,1);
}
function assert(condition,message){
    console.log(message,condition == true)
}
assert(1+1==2,"1 plus should equal 2");
var v = new vec(0,0);
var w = new vec(1,1);
var u = v.add(w);
console.log(u);


