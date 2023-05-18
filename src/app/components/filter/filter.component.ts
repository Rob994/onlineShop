import { Subscription } from 'rxjs';
import { Filter } from '../../models';
import { FilterConfig } from './filter-config';
import { FormControl, FormGroup } from '@angular/forms';
import { FilterTypesEnum } from '../../enums/filter-types.enum';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnDestroy {
    @Output() onSubmitFilter = new EventEmitter<Filter>();
    filterTypes = FilterTypesEnum;
    filters = FilterConfig;
    selectedFilter?: { key: string; value: string; type: FilterTypesEnum };

    formGroup: FormGroup = new FormGroup({});
    filterTypeGroup: FormGroup = new FormGroup({
        filterName: new FormControl(),
    });

    private _subscription = new Subscription();

    ngOnInit() {
        this._subscribeFilterTypeGroupChange();
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }

    filterProducts() {
        if (this.selectedFilter) {
            const filterObj: Filter = {
                key: this.selectedFilter?.key,
                type: this.selectedFilter?.type,
            };
            if (this.selectedFilter?.type === this.filterTypes.text) {
                filterObj.values = this.formGroup.get(this.selectedFilter.key)?.value;
            } else {
                filterObj.values = this.formGroup.value as { minValue?: number; maxValue?: number };
            }
            this.onSubmitFilter.emit(filterObj);
        }
    }

    private _setFormControls() {
        this._resetFormGroup();
        if (this.selectedFilter?.type === this.filterTypes.text) {
            this.formGroup.setControl(this.selectedFilter.key, new FormControl());
        } else {
            this.formGroup.setControl('minValue', new FormControl());
            this.formGroup.setControl('maxValue', new FormControl());
        }
    }

    private _resetFormGroup() {
        Object.keys(this.formGroup.controls).forEach((name) => {
            this.formGroup.removeControl(name);
        });
    }

    private _subscribeFilterTypeGroupChange() {
        this._subscription.add(
            this.filterTypeGroup.get('filterName')?.valueChanges.subscribe((res: string) => {
                this.selectedFilter = this.filters.find((filter) => filter.key === res);
                this._setFormControls();
            })
        );
    }
}
