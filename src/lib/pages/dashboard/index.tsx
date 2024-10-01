const index = () => {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-10 mx-auto'>
        <div className='flex flex-col  w-full mb-20'>
          <h1 className='sm:text-3xl text-5xl font-medium title-font mb-4 text-white'>
            Platform Stats
          </h1>
          <h2 className='sm:text-3xl text-xl font-medium title-font mb-4 text-white textstroke'>
            All Stats Updated Regularly
          </h2>
        </div>
        <div className='flex flex-wrap -m-4 text-center'>
          <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div className='border-2 border-black px-12 py-16 rounded-lg bg-white'>
              <svg
                fill='currentColor'
                className='text-black w-12 h-12 mb-3 inline-block'
                viewBox='0 0 24 24'
              >
                <path d='M20.738 14.341c-.419.265-.912.298-1.286.087-.476-.27-.738-.898-.738-1.774v-2.618c0-1.264-.5-2.164-1.336-2.407-1.416-.413-2.482 1.32-2.882 1.972l-2.498 4.05v-4.95c-.028-1.14-.398-1.821-1.1-2.027-.466-.135-1.161-.081-1.837.953l-5.597 8.987A9.875 9.875 0 012.326 12c0-5.414 4.339-9.818 9.672-9.818 5.332 0 9.67 4.404 9.67 9.818.004.018.002.034.003.053.05 1.049-.29 1.883-.933 2.29zm3.08-2.34l-.001-.055C23.787 5.353 18.497 0 11.997 0 5.48 0 .177 5.383.177 12c0 6.616 5.303 12 11.82 12 2.991 0 5.846-1.137 8.037-3.2.435-.41.46-1.1.057-1.541a1.064 1.064 0 00-1.519-.059 9.56 9.56 0 01-6.574 2.618c-2.856 0-5.425-1.263-7.197-3.268l5.048-8.105v3.737c0 1.794.696 2.374 1.28 2.544.584.17 1.476.054 2.413-1.468.998-1.614 2.025-3.297 3.023-4.88v2.276c0 1.678.672 3.02 1.843 3.68 1.056.597 2.384.543 3.465-.14 1.312-.828 2.018-2.354 1.944-4.193z' />
              </svg>

              <h2 className='title-font font-medium text-2xl text-gray-900 mb-5'>
                $1.4M
              </h2>
              <p className='leading-relaxed'>Marketcap</p>
            </div>
          </div>
          <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div className='border-2 border-black px-12 py-16 rounded-lg bg-white'>
              <svg
                viewBox='0 0 384 512'
                fill='currentColor'
                className='text-black w-12 h-12 mb-3 inline-block'
              >
                <path d='M192 496C86 496 0 410 0 304 0 192 96 16 192 16s192 176 192 288c0 106-86 192-192 192zm-35.5-358c5.5-6.9 4.4-17-2.5-22.5s-17-4.4-22.5 2.5l12.5 10-12.5-10-.1.1-.2.2-.6.8c-.5.7-1.3 1.7-2.2 3-1.9 2.6-4.5 6.3-7.7 11-6.3 9.4-14.6 23-23 39.7C81.1 206.1 64 252.6 64 304c0 8.8 7.2 16 16 16s16-7.2 16-16c0-44.6 14.9-86.1 30.3-116.8 7.6-15.3 15.3-27.7 21-36.3 2.8-4.3 5.2-7.6 6.8-9.8.8-1.1 1.4-1.9 1.8-2.4l.4-.6.1-.1z' />
              </svg>
              <h2 className='title-font font-medium text-2xl text-gray-900 mb-5'>
                $0.0385
              </h2>
              <p className='leading-relaxed'>Egg Price</p>
            </div>
          </div>
          <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div className='border-2 border-black px-12 py-16 rounded-lg bg-white'>
              <img
                src='/assets/node.png'
                alt='node'
                className='w-12 h-12 mb-3 inline-block'
              />
              <h2 className='title-font font-medium text-2xl text-gray-900 mb-5'>
                25679
              </h2>
              <p className='leading-relaxed '>Total Dragons</p>
            </div>
          </div>
          <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div className='border-2 border-black px-12 py-16 rounded-lg bg-white'>
              <img
                src='/assets/runaway.png'
                alt='node'
                className='w-12 h-12 mb-3 inline-block'
              />
              <h2 className='title-font font-medium text-2xl text-gray-900 mb-5'>
                360 D
              </h2>
              <p className='leading-relaxed'>Run Away</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
