import { FilterTypesEnum } from '../enums/filter-types.enum';

export interface RangeValues {
    minValue?: number;
     maxValue?: number
}
export interface Filter {
    key: string;
    type: FilterTypesEnum;
    values?: string | RangeValues;
}
