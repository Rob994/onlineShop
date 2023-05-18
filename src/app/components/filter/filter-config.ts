import { FilterTypesEnum } from '../../enums/filter-types.enum';

export const FilterConfig = [
    { key: 'rate', value: 'Rate', type: FilterTypesEnum.range },
    { key: 'title', value: 'Title', type: FilterTypesEnum.text },
    { key: 'price', value: 'Price', type: FilterTypesEnum.range },
    { key: 'category', value: 'Category', type: FilterTypesEnum.text },
    { key: 'description', value: 'Description', type: FilterTypesEnum.text },
];
