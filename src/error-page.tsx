import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error: any = useRouteError()

  return (
    <div className="h-full flex flex-col text-center">
      <h1 text="gray-7">Oops! Page {error.statusText || error.message}</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  )
}