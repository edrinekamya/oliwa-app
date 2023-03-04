import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux/es/types';
import { RootState } from '../store/configureStore';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
