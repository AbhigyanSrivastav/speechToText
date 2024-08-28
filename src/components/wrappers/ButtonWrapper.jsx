import { Button } from "@/components/ui/button"

const ButtonWrapper = ({text,onClickFunc}) => {
    return <Button onClick={onClickFunc}>{text}</Button>
}

export default ButtonWrapper