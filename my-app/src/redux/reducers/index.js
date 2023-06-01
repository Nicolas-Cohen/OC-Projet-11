import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';

// Combine les reducers pour former le reducer racine
const rootReducer = combineReducers({
  auth: authReducer, // Reducer pour gérer l'état d'authentification
  user: userReducer, // Reducer pour gérer l'état de l'utilisateur
  // Ajouter d'autres reducers ici si nécessaire
});

export default rootReducer;
