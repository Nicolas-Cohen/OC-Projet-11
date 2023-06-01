const initialState = {
   token: '', // Valeur initiale pour le token d'authentification
 };
 
 // Le reducer pour gérer les actions liées à l'authentification
 const authReducer = (state = initialState, action) => {
   switch (action.type) {
     case 'LOGIN': // Action pour effectuer la connexion
       return {
         ...state,
         token: action.payload.token, // Met à jour le token avec la valeur de action.payload.token
       };
     case 'LOGOUT': // Action pour effectuer la déconnexion
       return initialState; // Réinitialise le state à sa valeur initiale
     default:
       return state; // Retourne le state tel quel si l'action n'est pas gérée
   }
 };
 
 export default authReducer;
 