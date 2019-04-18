export interface Counter {
    type: 'comments' | 'visits' | 'articles';
  }
  
  export interface VisitCounter extends Counter {
    month: number;
    today: number;
  }