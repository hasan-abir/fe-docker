import PROPS from './constants/consonant';

import {
    // makeConfigGetter,
    getDefaultSortOption,
    getNumSelectedFilterItems,
} from '../consonant';

describe('utils/cards', () => {
    describe('getNumSelectedFilterItems', () => {
        PROPS.getNumSelectedFilterItems.forEach(({ filters, expectedValue }) => {
            test(`shouldn't return ${expectedValue} value`, () => {
                const value = getNumSelectedFilterItems(filters);

                expect(value).toEqual(expectedValue);
            });
        });
    });
    // describe('makeConfigGetter', () => {
    //     PROPS.makeConfigGetter.forEach(({
    //         config, object, key, expectedValue,
    //     }) => {
    //         test('should return config value by path', () => {
    //             const value = makeConfigGetter(config)(object, key);

    //             expect(value).toEqual(expectedValue);
    //         });
    //     });
    // });
    describe('getDefaultSortOption', () => {
        PROPS.getDefaultSortOption.forEach(({
            options, defaultSort, expectedValue,
        }) => {
            test('should return config value by path', () => {
                const value = getDefaultSortOption(options, defaultSort);

                expect(value).toEqual(expectedValue);
            });
        });
    });
});
