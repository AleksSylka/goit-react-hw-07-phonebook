export const getContacts = state => state.contacts.items;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getFiltersContacts = state => state.filters.queryFilter;

export const getFiltersStatus = state => state.filters.showFilter;