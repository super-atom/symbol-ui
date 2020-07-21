interface ProfileState {
  profiles: [];
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

const initialState: ProfileState = {
  profiles: [],
  options: {
    page: 1,
    limit: 15,
    order: 'ASC',
    sortBy: 'updatedAt',
  },
  error: null,
  status: '',
  isLoading: false,
};

export default initialState;