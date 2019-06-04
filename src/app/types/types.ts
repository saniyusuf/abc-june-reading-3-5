export interface Video {
  title: string;
  author: string;
  id: string;
  viewDetails: ViewDetail[];
}

interface ViewDetail {
  age: number;
  region: string;
  date: string;
}
