import { Component } from '@angular/core';
import { TransactionModel } from './transaction-model';
import { Account } from './account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Arcade';
  types = ['Purchase','Spend'];
  account = new Account("", 0)
  tranModel = new TransactionModel('',0,'');
  public trans: TransactionModel[] = [];
  submitted = false;

  onSubmit(){
    this.submitted = true;

    const type = this.tranModel.type;
    const amount = this.abs(this.tranModel.amount);
    const descrip = this.tranModel.description;

    if (type == 'Spend'){
      this.account.running_balance = this.account.running_balance - amount;
    }else{
      this.account.running_balance = this.account.running_balance + amount;
    }

    this.trans.push(new TransactionModel(type,amount,descrip));
  }

  getCurrentModel() {
    return JSON.stringify(this.tranModel);
  }

  abs(val:number){
    return Math.abs(val);
  }

  isNegative(val:number){
    if (val < 0)
      return true;
    else
      return false;
  }

}
