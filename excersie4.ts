class Person
{
    private static _firstName:string;
    static get firstName()
    {
       return this._firstName; 
    }
   static set firstName(value:string)
   {
       this._firstName=value.toUpperCase();
   }
   static configurable:boolean=true;
   static enumerable:boolean=true;
}

Person.firstName="Asaad";
console.log(Person.firstName);