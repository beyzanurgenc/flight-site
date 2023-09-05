import uiEnum from "../../../utils/constants/uiEnum";

const LabelCard = () => {
    return (
        <div className="label-card d-flex align-items-center flex-column">
            <h1>{uiEnum.HOME_PAGE.LABEL_HEADER}</h1>
            <h4>{uiEnum.HOME_PAGE.LABEL_SUB_HEADER}</h4>
        </div>
    );
};

export default LabelCard;