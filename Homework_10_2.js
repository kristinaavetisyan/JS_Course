class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    credit = (amount) => {
        const updatedBalance = amount + this.balance;
        return updatedBalance;
    }
    debit = (amount) => {
        if (amount < this.balance) {
            const newBalance = amount - this.balance;
            return newBalance;
        } else {
            console.log("Amount exceeded balance");
        }
    }
    transferTo = (anotherAccount, amount) => {
        if (amount < this.balance) {
            const balanceForTransfer = this.balance - amount + anotherAccount.balance;
            return balanceForTransfer;
        } else {
            console.log("Amount exceeded balance");
        }
    }
    static identifyAccounts(accountFirst, accountSecond) {
        if (accountFirst.id === accountSecond.id && accountFirst.name === accountSecond.name && accountFirst.balance === accountSecond.balance) {
            console.log("The accounts are the same")
        } else {
            console.log("Different accounts");
        }

    }
    toString() {
        console.log("Custom toString method")
    }
}

let account1 = new Account(1, "Kristina", 250);
let account2 = new Account(2, "Ghevond", 300);