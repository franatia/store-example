import "./css/CheckBox.css";

export default function CheckBox({title = "Título", active=false, cb = function(){}}){
    return (
        <div className="CheckBox">
            <div className="CheckBox-container">
                <div className="CheckBox-input-container">
                    <input className="CheckBox-input" type={'radio'} onChange={()=>{
                        cb(title);
                    }} checked={active}/>
                </div>
                <div className="CheckBox-title-container">
                    <span className="CheckBox-title">{title}</span>
                </div>
            </div>
        </div>
    )
}