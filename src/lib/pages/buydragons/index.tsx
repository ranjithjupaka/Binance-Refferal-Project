const index = () => {
  return (
    <section className='text-white body-font'>
      <div className='container px-5 py-5 mx-auto'>
        <div className='flex flex-col w-full mb-10'>
          <h1 className='text-5xl font-medium title-font mb-4 '>
            BUY YOUR DRAGONS HERE
          </h1>
          <h1 className='text-3xl font-medium title-font mb-4 textstroke'>
            You can Choose Between Two Options
          </h1>
        </div>
        <div className='flex justify-around w-full mb-5'>
          <h1 className='text-3xl font-medium title-font mb-4 '>
            BUY With Eggs
          </h1>
          <h1 className='text-3xl font-medium title-font mb-4'>
            Bond With USDT
          </h1>
        </div>
        <div className='flex flex-wrap -m-4'>
          <div className='px-4 py-8 lg:w-1/4 md:w-1/2 flex flex-col items-center'>
            <div className='h-full flex flex-col items-center text-center border-white border-4'>
              <img
                alt='gallery'
                className='flex-shrink-0 rounded-lg w-full  object-cover object-center mb-4'
                src='/assets/dragon.png'
              />
              <div className='w-full h-full bg-white px-5 py-10 text-center'>
                <h2 className='title-font font-medium text-2xl text-gray-900 mb-5'>
                  1 Dragon
                </h2>
                <h2 className='title-font font-medium text-2xl text-yellow-300 textstroke2'>
                  10 Eggs
                </h2>
              </div>
            </div>
            <button className='mt-5 px-6 py-2 font-semibold text-white bg-yellow-500 border-t-4 border-yellow-600 rounded shadow-lg shadow-yellow-500/50 hover:border-yellow-600 hover:scale-105'>
              Buy With Eggs
            </button>
          </div>
          <div className='px-4 py-8 lg:w-1/4 md:w-1/2 flex flex-col items-center'>
            <div className='h-full flex flex-col items-center text-center border-white border-4'>
              <img
                alt='gallery'
                className='flex-shrink-0 rounded-lg w-full  object-cover object-center mb-4'
                src='/assets/dragon.png'
              />

              <div className='w-full h-full bg-white px-5 py-10 text-center'>
                <h2 className='title-font font-medium text-2xl text-gray-900 mb-5'>
                  5 Dragons
                </h2>
                <h2 className='title-font font-medium text-2xl text-yellow-300 textstroke2'>
                  50 Eggs
                </h2>
              </div>
            </div>
            <button className='mt-5 px-6 py-2 font-semibold text-white bg-yellow-500 border-t-4 border-yellow-600 rounded shadow-lg shadow-yellow-500/50 hover:border-yellow-600 hover:scale-105'>
              Buy With Eggs
            </button>
          </div>
          <div className='px-4 py-8 lg:w-1/4 md:w-1/2 flex flex-col items-center'>
            <div className='h-full flex flex-col items-center text-center border-white border-4'>
              <img
                alt='gallery'
                className='flex-shrink-0 rounded-lg w-full  object-cover object-center mb-4'
                src='/assets/dragon.png'
              />
              <div className='w-full h-full bg-white px-5 py-10 text-center'>
                <h2 className='title-font font-medium text-2xl text-gray-900 mb-5'>
                  1 Dragon
                </h2>
                <h2 className='title-font font-medium text-2xl text-yellow-300 textstroke2'>
                  2.8 USDT
                </h2>
              </div>
            </div>
            <button className='mt-5 px-6 py-2 font-semibold text-white bg-yellow-500 border-t-4 border-yellow-600 rounded shadow-lg shadow-yellow-500/50 hover:border-yellow-600 hover:scale-105'>
              Buy With USDT
            </button>
          </div>
          <div className='px-4 py-8 lg:w-1/4 md:w-1/2 flex flex-col items-center'>
            <div className='h-full flex flex-col items-center text-center border-white border-4'>
              <img
                alt='gallery'
                className='flex-shrink-0 rounded-lg w-full  object-cover object-center mb-4'
                src='/assets/dragon.png'
              />
              <div className='w-full h-full bg-white px-5 py-10 text-center'>
                <h2 className='title-font font-medium text-2xl text-gray-900 mb-5'>
                  5 Dragon
                </h2>
                <h2 className='title-font font-medium text-2xl text-yellow-300 textstroke2'>
                  4.8 USDT
                </h2>
              </div>
            </div>
            {/* <button className='mt-5 px-6 py-2 font-semibold text-white bg-yellow-500 border-t-4 border-yellow-600 rounded shadow-lg shadow-yellow-500/50 hover:border-yellow-600 hover:scale-105'>
              Button
            </button> */}

            <button className='mt-5 px-6 py-2 font-semibold text-white bg-yellow-500 border-t-4 border-yellow-600 rounded shadow-lg shadow-yellow-500/50 hover:border-yellow-600 hover:scale-105'>
              Buy With USDT
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
