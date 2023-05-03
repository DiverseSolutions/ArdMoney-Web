export default function ComponentLoader({ 
  children,
  isLoading = false,
} : {
  children? : React.ReactNode,
  isLoading : boolean,
}) {

  if(isLoading){
    return (
      <div className="i-svg-spinners-3-dots-scale-middle icon-size-5 mr-2 text-white" />
    )
  }

  return (
    <>{children}</>
  )

}
