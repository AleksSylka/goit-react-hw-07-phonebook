import { ThreeDots } from "react-loader-spinner";
import { LoaderBlock } from "./LoaderBlock.styled";


export const Loader = ({isLoading}) => {
    return (
            <LoaderBlock>
                <ThreeDots
                    height="80" 
                    width="80" 
                    radius="9"
                    color="#4fa94d" 
                    ariaLabel="three-dots-loading"
                    visible={isLoading}
                />
            </LoaderBlock>
    )
}