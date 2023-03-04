import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/configureStore';

const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
