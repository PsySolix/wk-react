export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const DataService = {
  async request(url: string): Promise<any[]> {
    let response: Response = await fetch(url);

    if (response.ok) {
      return await response.json();
    }
    return [];
  },
};

export default DataService;
