//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.bal = 0;
    this.isClosed = true;
    this.changeBalanceDirectly = true;
  }

  open() {
    if (this.isClosed) {
      this.isClosed = false;
      this.bal = 0;
    } else {
      throw new ValueError();
    }
  }

  close() {
    if (!this.isClosed) this.isClosed = true;
    else throw new ValueError();
  }

  deposit(amt) {
    if (amt > 0) {
      this.changeBalanceDirectly = false;
      this.balance += amt;
    } else {
      throw new ValueError();
    }
    this.changeBalanceDirectly = true;
  }

  withdraw(amt) {
    if (this.balance - amt >= 0 && amt > 0) {
      this.changeBalanceDirectly = false;
      this.balance -= amt;
    } else {
      throw new ValueError();
    }
    this.changeBalanceDirectly = true;
  }

  get balance() {
    if (!this.isClosed) return this.bal;
    throw new ValueError();
  }

  set balance(amt) {
    if (!this.isClosed && !this.changeBalanceDirectly) this.bal = amt;
    else throw new ValueError();
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
