import { Button, Form, FormControl } from "react-bootstrap";
import uiEnum from "../../../utils/constants/uiEnum";
import DateField from "./DateField";
import UserSelectionField from "./UserSelectionField";

const SelectionCard = () => {
    return (
        <div className="card selection-card">
            <Form className="row w-100">
                <div className="col" style={{ width: '30%', minWidth: '30%' }}>
                    <FormControl className="input-field" placeholder={uiEnum.HOME_PAGE.FROM_PLACEHOLDER} />
                </div>
                <div className="col" style={{ width: '30%', minWidth: '30%' }}>
                    <FormControl className="input-field" placeholder={uiEnum.HOME_PAGE.TO_PLACEHOLDER} />
                </div>
                <div className="col" style={{ width: '30%', minWidth: '15%' }}>
                    <DateField />
                </div>
                <div className="col" style={{ width: '30%', minWidth: '15%' }}>
                    <UserSelectionField />
                </div>
                <div className="col" style={{ width: '30%', minWidth: '10%' }}>
                    <Button className="form-button" variant="primary" type="submit">
                        {">"}
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default SelectionCard;