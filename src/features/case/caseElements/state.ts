interface CaseElementsState {
  options: {
    page: number;
    limit: number;
    order: string;
    sortBy: string;
  };
}

const initialState: CaseElementsState = {
  options: {
    page: 1,
    limit: 5,
    order: 'ASC',
    sortBy: 'updatedAt',
  },
};

export default initialState;