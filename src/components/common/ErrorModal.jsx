import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";
import uiEnum from "../../utils/constants/uiEnum";

const ErrorModal = () => {
    return (
        <Modal centered show={true} onHide={() => { }}>
            <ModalHeader closeButton>
                <ModalTitle>
                    {uiEnum.HOME_PAGE.ERROR_MODAL_TITLE}
                </ModalTitle>
            </ModalHeader>
            <ModalBody>{uiEnum.HOME_PAGE.ERROR_MODAL_DESCRIPTION}</ModalBody>
            <ModalFooter>
                <Button variant="secondary">{uiEnum.HOME_PAGE.ERROR_CLOSE_BUTTON}</Button>
            </ModalFooter>
        </Modal>
    );
};

export default ErrorModal;