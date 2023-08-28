export interface ILoadState {
    isFetching: boolean;
    isError: boolean;
}

export const LoadStateDefault: ILoadState = {
    isFetching: false,
    isError: false
};