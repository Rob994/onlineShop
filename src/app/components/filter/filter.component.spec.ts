import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FilterComponent } from './filter.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterConfig } from './filter-config';
import { FormControl } from '@angular/forms';

describe('FilterComponent', () => {
    let component: FilterComponent;
    let fixture: ComponentFixture<FilterComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FilterComponent],
            schemas: [NO_ERRORS_SCHEMA],
        });
        fixture = TestBed.createComponent(FilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('filterProducts', () => {
        it('call filterProducts function when filter type equal text', () => {
            const emit = spyOn(component.onSubmitFilter, 'emit');
            component.selectedFilter = FilterConfig[1];
            component.filterFormGroup.get(component.selectedFilter.key)?.setValue('test');
            component.filterProducts();
            expect(emit).toHaveBeenCalled();
        });

        it('call filterProducts function when filter type equal range', () => {
            const emit = spyOn(component.onSubmitFilter, 'emit');
            component.selectedFilter = FilterConfig[0];
            component.filterFormGroup.get(component.selectedFilter.key)?.setValue('test');
            component.filterProducts();
            expect(emit).toHaveBeenCalled();
        });
    });

    it('check before change filterTypeGroup is called _setFormControls function', () => {
        const emit = spyOn(component.onSubmitFilter, 'emit');
        // @ts-ignore
        const setFormControls = spyOn(component, '_setFormControls');
        component.filterTypeGroup.get('filterName')?.setValue(FilterConfig[0].key);
        expect(setFormControls).toHaveBeenCalled();
        expect(emit).toHaveBeenCalledWith(undefined);
    });

    describe('_setFormControls', () => {
        it('before call _setFormControls function with filter type equal text should added in filterFormGroup 1 control', () => {
            component.selectedFilter = FilterConfig[1];
            // @ts-ignore
            const resetFormGroup = spyOn(component, '_resetFormGroup');
            component['_setFormControls']();
            expect(resetFormGroup).toHaveBeenCalled();
            expect(Object.keys(component.filterFormGroup.controls).length).toEqual(1);
        });

        it('before call _setFormControls function with filter type equal range should added in filterFormGroup 2 controls', () => {
            component.selectedFilter = FilterConfig[0];
            // @ts-ignore
            const resetFormGroup = spyOn(component, '_resetFormGroup');
            component['_setFormControls']();
            expect(resetFormGroup).toHaveBeenCalled();
            expect(Object.keys(component.filterFormGroup.controls).length).toEqual(2);
        });
    });

    it('_resetFormGroup ', () => {
        component.filterFormGroup.setControl(FilterConfig[0].key, new FormControl());
        component['_resetFormGroup']();
        expect(Object.keys(component.filterFormGroup.controls).length).toEqual(0);
    });
});
