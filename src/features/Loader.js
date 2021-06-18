import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoadingAbout } from './Posts/About/aboutSlice';
import { selectIsLoading } from './Posts/postsSlice';
import Loader from 'react-loader-spinner';
import '../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';


const LoaderPost = () => {
    const isLoading = useSelector(selectIsLoading);
    const isLoadingAbout = useSelector(selectIsLoadingAbout);

    return (
        (isLoading || isLoadingAbout) && 
        <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
    )
};

export default LoaderPost;