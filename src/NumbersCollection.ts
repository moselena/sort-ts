import { Sorter } from './Sorter'

export class NumbersCollection extends Sorter {
    constructor(public data: number[]) {
        super();
    }

    get length(): number { 
        return this.data.length;
    }

    compare(leftInd: number, rightInd: number): boolean {
        return this.data[leftInd] > this.data[rightInd] ;
    }

    swap(leftInd: number, rightInd: number): void {
        const left = this.data[leftInd];
        this.data[leftInd] = this.data[rightInd];
        this.data[rightInd] = left;
    }
}