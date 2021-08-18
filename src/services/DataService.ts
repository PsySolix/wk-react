export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const DataService = {
  async request(url: string): Promise<ITodo[]> {
    // CODE HERE: use fetch to get the url and return data
    // tip: let response: Response = await fetch...
    return [];
  },
};

export default DataService;
