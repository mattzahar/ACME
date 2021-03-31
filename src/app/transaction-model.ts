export class TransactionModel {
    constructor(
        public type: string,
        public amount: number,
        public description: string
    ){}
}
