interface checkBoxesI {
    incomplete: boolean;
    done: boolean;
}

const FilterActions = {
    changeFilterCheckBoxes: (checkBoxes:checkBoxesI) => {
        return {
            type: "CHANGE_FILTER_CHECKBOXES",
            checkBoxes
        }
    },
    changeFilterValue:(value:string)=>{
        return{
            type:"CHANGE_FILTER_VALUE",
            value
        }
    }
};

export default FilterActions;