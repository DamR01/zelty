import { DateTime } from "luxon";

export const getDate = DateTime.local().toISODate();
