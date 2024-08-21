import { TailSpin } from "react-loader-spinner";

function MiniSpinner() {
    return (
        <TailSpin
            visible={true}
            height="20"
            width="20"
            color="#fff"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
        />
    );
}

export default MiniSpinner;
