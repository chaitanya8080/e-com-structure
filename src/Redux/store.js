

import {legacy_createStore} from "redux";


import { productReducer } from "./products/reducer";

const store = legacy_createStore(productReducer)

export {store};