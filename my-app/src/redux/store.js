import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// Configuration de la persistance
const persistConfig = {
  key: 'root', // Clé de stockage pour les données persistantes
  storage, // L'emplacement de stockage (dans ce cas, localStorage)
};

// Création d'un reducer persistant en utilisant la configuration et le rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configuration de l'extension Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Création du store avec le reducer persistant, les middlewares et l'extension Redux DevTools
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// Création d'un persistor pour initialiser la persistance du store
export const persistor = persistStore(store);

// Export du store par défaut pour être utilisé dans d'autres fichiers
export default store;
