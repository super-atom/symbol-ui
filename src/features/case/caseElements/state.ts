interface CaseElementsState {
  caseElements: [];
  options: {
    page: number;
    limit: number;
    order: string;
    sortBy: string;
  };
  error: any;
  status: string;
  isLoading: boolean;
}

const initialState: CaseElementsState = {
  caseElements: [],
  options: {
    page: 1,
    limit: 5,
    order: 'ASC',
    sortBy: 'updatedAt',
  },
  error: null,
  status: '',
  isLoading: false,
};

export default initialState;