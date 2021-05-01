import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootType } from '../redux/reducers/rootReducer';

export const useSelectorTyped: TypedUseSelectorHook<RootType> = useSelector
