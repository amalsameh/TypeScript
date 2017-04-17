class baseObject {
    width:number=0;
    length:number=0;
    constructor( width: number, length: number ) {
    }
    calcSize(): number {
        return this.width * this.length;
    }
}

class rectangle extends baseObject {
    constructor(width: number, length: number) {
        super(width, length);
    }
}

const rect = new rectangle(5, 2);
console.log(rect.calcSize());