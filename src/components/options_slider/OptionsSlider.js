import { useState } from "react";
import CheckBox from "../CheckBox";
import "../css/OptionsSlider.css"

export default function OptionsSlider({options=[], cb=function(){}, _expand=null}){
    let [optionsList, setOptionsList] = useState(options.map(option=>{
        return {option, active:false};
    }));
    let [expand, setExpand] = useState(false);
    return (
        <div className={`OptionsSlider ${(_expand != null) ? ((_expand)?"expand":"unexpand"): ((expand)?"expand":"unexpand")}`}>
            <div className="OptionsSlider-container">
                {optionsList.map(option => <CheckBox title={option.option.title} cb={title=>{
                    optionsList = optionsList.map(option => {
                        if(option.option.title === title){
                            option.active = true;
                            return option;
                        }
                        option.active = false;
                        return option;
                    });
                    setOptionsList(optionsList);
                    // eslint-disable-next-line array-callback-return
                    cb(optionsList.filter(option => {
                        if(option.active) return option;
                    })[0].option);
                    
                    if(_expand != null){
                        setExpand(!expand);
                    }

                }} active={option.active}/>)}
            </div>
        </div>
    )
}