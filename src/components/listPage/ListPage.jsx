import { useEffect, useState } from "react";
import { getFromStorage } from "../../controllers/storageController";

const ListPage = () => {
    const [selection, setSelection] = useState();

    useEffect(() => {
        setSelection(getFromStorage("selection"));
    }, []);

    return (
        <div>
            {JSON.stringify(selection)}
        </div>
    );
};

export default ListPage;