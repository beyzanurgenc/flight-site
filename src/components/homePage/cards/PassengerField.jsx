import { Button, FormGroup, Input, Label, Popover } from "reactstrap";

const PassengerField = ({ target, isOpen, passengerNum, classSelection, classSelectionCallback, passengerSelectionCallback }) => {
    return (
        <Popover isOpen={isOpen} placement="bottom" target={target}>
            <div className="card col m-0 p-2">
                <div className="row m-0 p-0">
                    Kabin ve yolcu seçimi
                </div>
                <div className="row m-0 p-0">
                    <FormGroup check className="col-6">
                        <Label check>
                            <Input type="radio" checked={classSelection === 0} onChange={() => classSelectionCallback(0)} />{' '}
                            Economy Class
                        </Label>
                    </FormGroup>
                    <FormGroup check className="col-6">
                        <Label check>
                            <Input type="radio" checked={classSelection === 1} onChange={() => classSelectionCallback(1)} />{' '}
                            Business Class
                        </Label>
                    </FormGroup>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-6">Yolcu</div>
                    <div className="col-6 row">
                        <Button className="passenger-button col-4"
                            color="secondary"
                            size='sm'
                            onClick={() => { passengerSelectionCallback(passengerNum - 1); }}
                            disabled={passengerNum === 1}
                        >
                            {"-"}
                        </Button>
                        <span className="input-group-text mr-2 ml-2 col-4">
                            {passengerNum}
                        </span>
                        <Button className="passenger-button col-4"
                            color="secondary"
                            size='sm'
                            onClick={() => { passengerSelectionCallback(passengerNum + 1) }}
                            disabled={false}
                        >
                            {"+"}
                        </Button>
                    </div>
                </div>
            </div>
        </Popover>
    );
};

export default PassengerField;