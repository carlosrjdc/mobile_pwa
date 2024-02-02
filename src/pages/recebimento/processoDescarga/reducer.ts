import React, { useReducer } from 'react';

// Definindo os tipos
interface State {
  currentPage: string;
  // Adicione outros estados de paginação, se necessário
}

type Action =
  | { type: 'SET_PAGE'; payload: string }
  | { type: 'NEXT_PAGE' }
  | { type: 'PREV_PAGE' };

export const paginationReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'SET_PAGE':
        return { ...state, currentPage: action.payload };
      default:
        return state;
    }
  };