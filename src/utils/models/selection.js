export const Selection = (
    {
        passengerNum = "",
        classSelection = "",
        from = "",
        to = ""
    }
) => {
    return {
        passengerNum: passengerNum,
        classSelection: classSelection,
        from: from,
        to: to
    };
};