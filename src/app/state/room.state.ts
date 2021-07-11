export enum DataStateEnum{
  LOADING,
  LOADED,
  ERROR,
}
// LES POINTS D'INTERROGATION INDIQUENT QUE LES ATTRIBUTS NE SONT PAS OBLIGATOIRES DANS L'OBJET...
export interface AppDataState<T>{
  dataState?:DataStateEnum,
  data?: T,
  errorMessage?:string;
}
