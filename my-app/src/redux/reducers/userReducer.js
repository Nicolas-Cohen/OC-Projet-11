const initialState = {
   username: '', // Valeur initiale pour le nom d'utilisateur
   firstname: '', // Valeur initiale pour le prénom
   lastname: '', // Valeur initiale pour le nom de famille
 };
 
 // Le reducer pour gérer les actions liées à l'utilisateur
 const userReducer = (state = initialState, action) => {
   switch (action.type) {
     case 'SET_USER': // Action pour définir les informations de l'utilisateur
       return {
         ...state,
         username: action.payload.username, // Met à jour le nom d'utilisateur avec la valeur de action.payload.username
         firstname: action.payload.firstname, // Met à jour le prénom avec la valeur de action.payload.firstname
         lastname: action.payload.lastname, // Met à jour le nom de famille avec la valeur de action.payload.lastname
       };
     case 'LOGOUT': // Action pour déconnecter l'utilisateur
       return initialState; // Réinitialise le state à sa valeur initiale
     default:
       return state; // Retourne le state tel quel si l'action n'est pas gérée
   }
 };
 
 export default userReducer;
 