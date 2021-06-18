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
        <div className="loader" ><Loader type="Oval" color="#ff5900" height={80} width={80} /> </div>
    )
};

export default LoaderPost;