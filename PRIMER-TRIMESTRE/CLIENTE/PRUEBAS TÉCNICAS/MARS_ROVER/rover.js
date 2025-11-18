class Rover {
    constructor(x, y, orientation) {
        this.x = x;
        this.y = y;
        this.orientation = orientation;
    }

    printPosition() {
        return `${this.x} ${this.y} ${this.orientation}`;
    }

    turnRight() {
        switch (this.orientation) {
            case "N": this.orientation = "E";
            case "E": this.orientation = "S";
            case "S": this.orientation = "W";
            case "W": this.orientation = "N";

        }
    }

    turnLeft() {
        switch (this.orientation) {
            case "N": this.orientation = "W";
            break;
            case "W": this.orientation = "S";
            break;
            case "S": this.orientation = "E";
            break;
            case "E": this.orientation = "N";
            break;

        }
    }

    move() {
        switch (this.orientation) {
            case 'N': this.y++;
                break;
            case 'S': this.y--;
                break;
            case 'E': this.x++;
                break;
            case 'W': this.x--;
                break;
        }
    }

    executeInstruction(instruction) {
        instruction.split("").forEach(command => {
            switch(command) {
                case "L" : this.turnLeft();
                break;
                case "R" : this.turnRight();
                break;
                case "M" : this.move();
            }
        })
    }
}

function processMarsRovers(input) {
    const lines = input.trim().split('\n').map(line => line.trim());
    const [maxX, maxY] = lines[0].split(' ').map(Number);
    const results = [];
    

    for (let i = 1; i < lines.length; i += 2) {
        const [x, y, orientation] = lines[i].split(' ');
        const rover = new Rover(parseInt(x), parseInt(y), orientation);
        

        const instructions = lines[i + 1];
        rover.executeInstruction(instructions);
        
        results.push(rover.printPosition());
    }
    
    return results.join('\n');
}


const testInput = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;

console.log("Commands:");
console.log(testInput)
console.log("Output:");
console.log(processMarsRovers(testInput));