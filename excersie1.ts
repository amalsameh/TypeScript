type bankAccount={money: number,deposit:(value:number)=>void};
let bankAccount:bankAccount=
{
money :2000,
deposit:function(value:number){
this.money+=value
}
};
let myself:{name: string,bank:bankAccount,hobbies:string[]}={
    name:"Asaad",
    bank:bankAccount,
    hobbies: ["Violin","Cooking"]
};
myself.bank.deposit(3000);
console.log(myself);