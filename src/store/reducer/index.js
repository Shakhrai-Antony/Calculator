import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expression: '',
  result: '0',
  history: [],
  themeStatus: 'light',
  historyStatus: false,
};

const toolkitSlice = createSlice({
  name: 'calculatorReducer',
  initialState,
  reducers: {
    setExpression: (state, action) => {
      state.expression = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
    setHistory: (state, action) => {
      state.history = [...state.history, action.payload];
    },
    setThemeStatus: (state, action) => {
      state.themeStatus = action.payload;
    },
    clearHistory: (state) => {
      state.history = [];
    },
    setHistoryStatus: (state, action) => {
      state.historyStatus = action.payload;
    },
  },
});

export const {
  setExpression,
  setResult,
  setHistory,
  setThemeStatus,
  clearHistory,
  setHistoryStatus,
} = toolkitSlice.actions;

export default toolkitSlice.reducer;
