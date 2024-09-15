export interface BaseAction<T extends string, P = void> {
  type: T;
  payload?: P;
}

export interface PayloadAction<T> {
  type: string;
  payload?: T;
}

export const createAction = <T>(type: string, payload?: T): PayloadAction<T> => ({
  payload,
  type,
});
