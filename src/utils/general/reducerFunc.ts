export const REDUCER_ACTION = {
  STATES: "STATES",
  CATEGORY: "CATEGORY",
  SUBCATEGORY: "SUBCATEGORY",
  COUNTRY: "COUNTRY",
  SEARCH: "SEARCH",
};

export const initialState = {
  searchTerm: "",
  states: "state",
  category: "all",
  subCategory: "all",
  country: "all",
};

interface State {
  states?: string;
  category?: string;
  subCategory?: string;
  country?: string;
  searchTerm?: string;
}

interface Action {
  type: string;
  payload: any;
}

export const reducerFunc = (state: State, action: Action): State => {
  switch (action.type) {
    case REDUCER_ACTION.STATES:
      return { ...state, states: action.payload };
    case REDUCER_ACTION.CATEGORY:
      return { ...state, category: action.payload };
    case REDUCER_ACTION.SUBCATEGORY:
      return { ...state, subCategory: action.payload };
    case REDUCER_ACTION.COUNTRY:
      return { ...state, country: action.payload };
    case REDUCER_ACTION.SEARCH:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};
