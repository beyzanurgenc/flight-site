import { faPeopleGroup, faPerson } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import PassengerField from './PassengerField';

const UserSelectionField = ({ passengerNum, classSelection, onChangePassengerNum, onChangeClassSelection }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="card passenger-field" id='popover-field' onClick={() => { setIsOpen(!isOpen) }}>
                <div className="row m-0 p-0 ms-auto me-2">
                    {passengerNum}
                </div>
                <div className="row d-flex justify-content-center">
                    <FontAwesomeIcon
                        icon={passengerNum === 1 ? faPerson : faPeopleGroup}
                        size='xl'
                    />
                </div>
            </div>
            <PassengerField
                isOpen={isOpen}
                target={'popover-field'}
                passengerNum={passengerNum}
                classSelection={classSelection}
                classSelectionCallback={(value) => { onChangeClassSelection(value) }}
                passengerSelectionCallback={(number) => { onChangePassengerNum(number) }}
            />
        </>
    );
};

export default UserSelectionField;