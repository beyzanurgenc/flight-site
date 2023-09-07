import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "reactstrap";
import { getFlightByLocation } from "../../../controllers/flightController";
import { removeFromStorage, saveToStorage } from "../../../controllers/storageController";
import uiEnum from "../../../utils/constants/uiEnum";
import ErrorModal from "../../common/ErrorModal";
import DateField from "./DateField";
import UserSelectionField from "./UserSelectionField";
import { Selection } from "../../../utils/models/selection";

const SelectionCard = () => {
    const [passengerNum, setPassengerNum] = useState(1);
    const [classSelection, setClassSelection] = useState(0);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="card selection-card">
            <Form className="row w-100">
                <div className="col" style={{ width: '30%', minWidth: '30%' }}>
                    <Input className="input-field" placeholder={uiEnum.HOME_PAGE.FROM_PLACEHOLDER} value={from} onChange={(e) => { setFrom(e.target.value) }} />
                </div>
                <div className="col" style={{ width: '30%', minWidth: '30%' }}>
                    <Input className="input-field" placeholder={uiEnum.HOME_PAGE.TO_PLACEHOLDER} value={to} onChange={(e) => { setTo(e.target.value) }} />
                </div>
                <div className="col" style={{ width: '30%', minWidth: '15%' }}>
                    <DateField />
                </div>
                <div className="col" style={{ width: '30%', minWidth: '15%' }}>
                    <UserSelectionField
                        passengerNum={passengerNum}
                        classSelection={classSelection}
                        onChangeClassSelection={(value) => { setClassSelection(value) }}
                        onChangePassengerNum={(value) => { setPassengerNum(value) }}
                    />
                </div>
                <div className="col" style={{ width: '30%', minWidth: '10%' }}>
                    <Button className="form-button" variant="primary" onClick={() => {
                        getFlightByLocation({ from, to }).then(() => {
                            saveToStorage("selection", Selection({ passengerNum, classSelection, from, to }));
                            navigate('/list');
                        }).catch(() => {
                            setIsModalOpen(true);
                            removeFromStorage("listedFlights");
                            removeFromStorage("selection");
                        });
                    }}>
                        {">"}
                    </Button>
                </div>
            </Form>
            <ErrorModal isOpen={isModalOpen} onCloseCallback={() => { setIsModalOpen(false) }} />
        </div>
    );
};

export default SelectionCard;