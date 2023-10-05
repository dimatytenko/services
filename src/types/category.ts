export interface ICategory {
  id: number;
  title: string;
  color?: string;
  categories?: ICategory[];
}
