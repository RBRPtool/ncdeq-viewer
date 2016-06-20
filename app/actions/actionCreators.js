var axios = require('axios');

import { AGO_URL, AGO_RiverBasins, AGO_CatalogingUnits, AGO_HUCS } from './actionConstants';
import { CheckReponse } from './responses';
import * as MenuLists from './actionMenuLists';
import * as ChartData from './actionChartData';
import * as CurrentID from './actionCurrentID';

export const get_MenuList = MenuLists.get_MenuList;
export const get_ChartData_byID = ChartData.get_ChartData_byID;
export const get_AllChartData_byID = ChartData.get_AllChartData_byID;
export const set_CurrentID = CurrentID.set_CurrentID;
