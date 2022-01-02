import { createStore } from "redux";
import { rootReducers } from "./reducers";

// Store = {
//     tasksList: [{ id: 1, title: "Init Task", completed: false }];
// }

// Store : attacher à notre application react - accessible depuis tout les composant de l'application

export const store = createStore(rootReducers);
