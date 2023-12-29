type Props = {
  message: string
  type: 'success' | 'warning' | 'error' | ''
}

export const ToastMessage = ({ message, type }: Props): JSX.Element | null => {
  if (!message) return null
  return (
    <div className="toast toast-top toast-end">
      {switchToast(type, message)}
    </div>
  )
}

const switchToast = (
  type: 'success' | 'warning' | 'error' | '',
  message: string,
): JSX.Element => {
  switch (type) {
    case 'success':
      return (
        <div className="alert alert-success">
          <span>{message}</span>
        </div>
      )
    case 'warning':
      return (
        <div className="alert alert-warning">
          <span>{message}</span>
        </div>
      )
    case 'error':
      return (
        <div className="alert alert-error">
          <span>{message}</span>
        </div>
      )
    default:
      return (
        <div className="alert alert-info">
          <span>{message}</span>
        </div>
      )
  }
}
