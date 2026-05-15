import toast, { ToastOptions } from 'react-hot-toast'

const defaultToastOptions: ToastOptions = {
  position: 'bottom-center',
  className: 'custom-toast',
}

export const Toast = {
  success: (message: string) => toast.success(message, defaultToastOptions),
  error: (message: string) => toast.error(message, defaultToastOptions),
  loading: (message: string) => toast.loading(message, defaultToastOptions),
  dismiss: (id?: string) => toast.dismiss(id),
}
