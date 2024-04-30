import Flexbox from "../Flexbox"

interface pForm {
    inputs: React.ReactNode;
    actions: React.ReactNode;
    args: any;
}

const Form:React.FC<pForm> = ({inputs, actions, ...args}) => {
    return(
        <form {...args}>
            <Flexbox>
                {inputs}
                {actions}
            </Flexbox>
        </form>
    )
}

export default Form;