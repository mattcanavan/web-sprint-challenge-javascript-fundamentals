// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(params){
        this.width = params.width;
        this.length = params.length;
        this.height = params.height;
    }

    volume(){
        return this.length * this.width * this.height;
    }

    surfaceArea(){
        return 2* (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}

const chillCuboid = new CuboidMaker({
    width: 5,
    length: 4,
    height: 5,
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(chillCuboid.volume()); // 100
console.log(chillCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(params){
        super(params);
    }

    // volume(){} same equation as for a Cuboid.

    // surfaceArea(){ return 6*this.length^2; } same equation as for a cuboid. haha. 
}

const customCube = new CubeMaker({
    length: 5,
    width: 5,
    height: 5,
})

console.log(customCube.volume()) // => 125
console.log(customCube.surfaceArea()) // => 150