import { Form, FormControl, FormGroup } from "react-bootstrap";
import uiEnum from "../../../utils/constants/uiEnum";

const SelectionCard = () => {
    return (
        <div className="card selection-card">
            <Form className="row">
                <div className="col-3">
                    <FormControl className="input-field" placeholder={uiEnum.HOME_PAGE.FROM_PLACEHOLDER}/>
                </div>
                <div className="col-3">
                    <FormControl className="input-field" placeholder={uiEnum.HOME_PAGE.TO_PLACEHOLDER}/>
                </div>
                <div className="col-2">
                    <FormControl />
                </div>
                <div className="col-2">
                    <FormControl />
                </div>
                <div className="col-2">
                    <FormControl />
                </div>
            </Form>
        </div>
    );
};

export default SelectionCard;