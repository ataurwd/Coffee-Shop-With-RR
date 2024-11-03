import React from 'react';

const Hbanner = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-12 lg:flex-row lg:justify-between lg:gap-x-5">
                {/* header */}
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-4xl">Discover the Perfect Cup: Crafted for Coffee Lovers
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Welcome to our coffee haven, where each cup is a journey of rich aromas and bold flavors.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold dark:bg-violet-600 dark:text-gray-50 border-2 rounded-full">Suspendisse</a>
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold bg-sky-400 text-white dark:border-gray-800 border-2 rounded-full">Malesuada</a>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-222549-2159065.jpg&fm=jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-xl" />
                </div>
            </div>
        </section>
    );
};

export default Hbanner;