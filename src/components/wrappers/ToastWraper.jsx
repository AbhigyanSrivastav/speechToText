import { useToast } from "@/components/ui/use-toast"

const ToastWraper = ({message,duration=2000}) => {
    const { toast } = useToast() 

    if(message){
        toast({
            description: message,
            duration
          })
    }
  return null
}

export default ToastWraper