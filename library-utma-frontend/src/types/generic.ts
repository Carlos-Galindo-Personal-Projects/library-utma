export interface Book {
  isbn: `${number}-${number}-${number}-${number}-${number}`;
  title: string;
  author: string;
  year: number;
  amount: number;
}

export interface Entrance {
  studentId: `UTM${number}`;
}
