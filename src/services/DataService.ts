export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const DataService = {
  async request(url: string): Promise<any> {
    let response = await fetch(url);

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Response not ok");
    }
  },
};

export default DataService;
