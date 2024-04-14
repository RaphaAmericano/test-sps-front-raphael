import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
type AlertComponentProps = {
    title?: string;
    message: string;
    type: "destructive" | "default"
}
function AlertComponent(props: AlertComponentProps) {
  const { title, message, type = "default" } = props
  return (
    <Alert variant={ type }>
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  )
}
export default AlertComponent