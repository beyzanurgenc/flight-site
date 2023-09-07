import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import uiEnum from "../../utils/constants/uiEnum";

const ErrorModal = ({ isOpen, onCloseCallback }) => {
    return (
        <Modal isOpen={isOpen}>
            <ModalBody>{uiEnum.HOME_PAGE.ERROR_MODAL_DESCRIPTION}</ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={() => {
                    onCloseCallback()
                }}>{uiEnum.HOME_PAGE.ERROR_CLOSE_BUTTON}</Button>
            </ModalFooter>
        </Modal>
    );
};

export default ErrorModal;