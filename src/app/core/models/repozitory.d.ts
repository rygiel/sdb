
declare namespace Repozitory {

  interface Product {
    id: string;
    name: string;
    shortName: string;
    unit: string;
  }


 interface Repozitory {
    id: string;
    name: string;
    shortName: string;
    products: Product[]
  }



  // interface Customer {
  //   id: string;
  //   name: string;
  // }

  // enum TransactionType {
  //   MOVE = 0,
  //   INPUT = 1,
  //   OUTPUT = 2,
  //   PRODUCTION = 3,
  // }

  // interface Transaction {
  //   id: string;
  //   customerId: string;
  //   userId: string;
  //   transactionType: TransactionType;
  //   date: number;
  //   time: number;
  //   note: string;
  // }
  // interface TransactionItem {
  //   transactionId: string;
  // }



 

  // interface Product {
  //   id: string;
  //   productId: string;
  //   repozitoryId: string;
  //   transactionId: string;
  //   amout: number;
  // }

  // interface Summary {
  //   productId: string;
  //   repozitoryId: string;

  // }
}
