import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import uiEnum from '../../../utils/constants/uiEnum';

const DateField = () => {
    return (
        <div className="card date-field d-flex flex-row justify-content-between align-items-center">
            <div className="p-2">
                {uiEnum.HOME_PAGE.DATE}
            </div>
            <div className="p-2">
                <FontAwesomeIcon icon={faCalendar} size='xl'/>
            </div>
        </div>
    );
};

export default DateField;