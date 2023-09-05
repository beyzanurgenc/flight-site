import LabelCard from "./cards/LabelCard";
import SelectionCard from "./cards/SelectionCard";

const HomePage = () => {
    return (
        <div className="home-page d-flex flex-column align-items-center">
            <LabelCard />
            <SelectionCard />
        </div>
    );
};

export default HomePage;