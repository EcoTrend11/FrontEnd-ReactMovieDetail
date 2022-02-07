import { FaSpinner } from 'react-icons/fa';
import  style from "./SpinnerLoading.module.css"
const SpinnerLoading = () =>{
    return (
        <div className={style.spinner}>
            <FaSpinner className={style.spinning}
                size={60}
                />
        </div>
    )
}

export default SpinnerLoading