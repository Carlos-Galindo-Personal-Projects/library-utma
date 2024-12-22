const FormSkeleton = () => {
  return (
    <>
      <div className="w-1/3 bg-gray-300 rounded-lg shadow-lg animate-pulse">
        <div className="h-10 mt-4"></div>
        <div className="m-auto mb-4 h-32 w-32 bg-gray-500 rounded-full"></div>
        <div className="space-y-3 overflow-y-hidden mx-4">
          <div>
            <div className="h-4 bg-gray-500 w-16"></div>
            <div className="mt-1 h-8 bg-gray-500 rounded-md"></div>
          </div>
          <div>
            <div className="h-4 bg-gray-500 w-16"></div>
            <div className="mt-1 h-8 bg-gray-500 rounded-md"></div>
          </div>
          <div>
            <div className="h-4 bg-gray-500 w-16"></div>
            <div className="mt-1 h-8 bg-gray-500 rounded-md"></div>
          </div>
          <div>
            <div className="h-4 bg-gray-500 w-16"></div>
            <div className="mt-1 h-8 bg-gray-500 rounded-md"></div>
          </div>
          <div>
            <div className="h-4 bg-gray-500 w-16"></div>
            <div className="mt-1 h-8 bg-gray-500 rounded-md"></div>
          </div>
          <div>
            <div className="h-4 bg-gray-500 w-16"></div>
            <div className="mt-1 h-8 bg-gray-500 rounded-md"></div>
          </div>
          <div className="flex justify-center">
            <div className="h-10 mt-6 w-5/6 bg-gray-400 rounded-md mb-4"></div>
          </div>
        </div>
      </div>
    </>

  )
}

export default FormSkeleton
