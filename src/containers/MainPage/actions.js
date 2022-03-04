import { asyncActionsCreator } from "../../global/redux";
import * as constants from "./constants";
 
export const getMainPageData = asyncActionsCreator(constants.GET_MAIN_PAGE_DATA)
