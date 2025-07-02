import React from 'react'

function Blog() {
  return (
    <section className="flex flex-col justify-start items-start w-full px-4 pb-16 sm:px-8 md:px-16 lg:px-20">
      <div className="flex justify-start items-center w-full">
        <h2 className="relative text-3xl md:text-5xl font-bold text-white before:content-[''] before:absolute before:-bottom-2 before:left-0 before:h-[4px] before:w-[50%] before:bg-[#0098EA]">
          Blog
        </h2>
      </div>
    </section>
  );
}

export default Blog