import { ReactNode } from "react";

type InputFeedbackProps = {
    text: string;
    icon?: ReactNode
}
function InputFeedback(props:InputFeedbackProps){
    const { text, icon } = props
    return (
        <div className="mt-2.5 flex items-center space-x-2 text-sm">
            {icon && icon}
            <div>{text}</div>
        </div>
    )
}
export default InputFeedback