const Sentiment = () => {
  return (
    <div className="bg-white mt-14 p-8 rounded-md">
      <h1 className="font-semibold text-2xl mb-3 ">Sentiment</h1>
      <h2 className="flex items-center gap-2 text-gray-800">
        <p className="font-medium mb-2 text-gray-600">Key Events</p>

        <svg
          height="100px"
          id="Capa_1"
          version="1.1"
          viewBox="0 15  100 100"
          width="15px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M45.385,0.004C19.983,0.344-0.333,21.215,0.004,46.619c0.34,25.393,21.209,45.715,46.611,45.377c25.398-0.342,45.719-21.213,45.381-46.615C91.656,19.986,70.785-0.335,45.385,0.004z M50.484,15.333c4.676,0,6.057,2.714,6.057,5.815c0,3.877-3.104,7.461-8.396,7.461c-4.43,0-6.537-2.229-6.414-5.91C41.731,19.597,44.33,15.333,50.484,15.333z M38.497,74.75c-3.195,0-5.537-1.938-3.301-10.467l3.666-15.125c0.637-2.424,0.744-3.393,0-3.393c-0.959,0-5.107,1.674-7.557,3.322l-1.598-2.617c7.773-6.491,16.712-10.299,20.544-10.299c3.195,0,3.727,3.779,2.131,9.594l-4.199,15.9c-0.744,2.811-0.424,3.779,0.318,3.779c0.961,0,4.102-1.166,7.188-3.59l1.811,2.424C49.939,71.838,41.69,74.75,38.497,74.75z" />
        </svg>
      </h2>
      <div className="relative">
        <div className="flex gap-5 w-full overflow-x-scroll scrollbar-none">
          <div className="flex-shrink-0 flex gap-2 min-w-full max-w-full md:min-w-0 md:max-w-lg bg-blue-100 rounded-md p-4">
            <div className="mt-1">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0">
                  <rect
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    rx="12"
                    fill="#89cff0"
                    strokeWidth="0"
                  />
                </g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M3 15H21M3 19H15M3 7H11M3 11H11M19.4 11H16.6C16.0399 11 15.7599 11 15.546 10.891C15.3578 10.7951 15.2049 10.6422 15.109 10.454C15 10.2401 15 9.96005 15 9.4V6.6C15 6.03995 15 5.75992 15.109 5.54601C15.2049 5.35785 15.3578 5.20487 15.546 5.10899C15.7599 5 16.0399 5 16.6 5H19.4C19.9601 5 20.2401 5 20.454 5.10899C20.6422 5.20487 20.7951 5.35785 20.891 5.54601C21 5.75992 21 6.03995 21 6.6V9.4C21 9.96005 21 10.2401 20.891 10.454C20.7951 10.6422 20.6422 10.7951 20.454 10.891C20.2401 11 19.9601 11 19.4 11Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg">
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
              </h2>
              <p className="text-gray-600 text-sm">
                mattis enim tincidunt. Lorem ipsum dolor sit amet consectetur.
                Dui vel quis dignissim mattis enim tincidunt. Lorem ipsum dolor
                sit amet consectetur. Ac phasellus risus est faucibus metus
                quis. Amet sapien quam viverra adipiscing condimentum. Ac
                consectetur et pretium in a bibendum in. Sed vitae sit nisi
                viverra natoque lacinia libero enim.
              </p>
            </div>
          </div>
          {/* Repeat this structure for other cards */}
          <div className="flex-shrink-0 flex gap-2 max-w-full md:max-w-lg bg-green-100 rounded-md p-4">
            <div className="mt-1">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0">
                  <rect
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    rx="12"
                    fill="#a7fda5"
                    strokeWidth="0"
                  />
                </g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M3 15H21M3 19H15M3 7H11M3 11H11M19.4 11H16.6C16.0399 11 15.7599 11 15.546 10.891C15.3578 10.7951 15.2049 10.6422 15.109 10.454C15 10.2401 15 9.96005 15 9.4V6.6C15 6.03995 15 5.75992 15.109 5.54601C15.2049 5.35785 15.3578 5.20487 15.546 5.10899C15.7599 5 16.0399 5 16.6 5H19.4C19.9601 5 20.2401 5 20.454 5.10899C20.6422 5.20487 20.7951 5.35785 20.891 5.54601C21 5.75992 21 6.03995 21 6.6V9.4C21 9.96005 21 10.2401 20.891 10.454C20.7951 10.6422 20.6422 10.7951 20.454 10.891C20.2401 11 19.9601 11 19.4 11Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg">
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
              </h2>
              <p className="text-gray-600 text-sm">
                mattis enim tincidunt. Lorem ipsum dolor sit amet consectetur.
                Dui vel quis dignissim mattis enim tincidunt. Lorem ipsum dolor
                sit amet consectetur. Ac phasellus risus est faucibus metus
                quis. Amet sapien quam viverra adipiscing condimentum. Ac
                consectetur et pretium in a bibendum in. Sed vitae sit nisi
                viverra natoque lacinia libero enim.
              </p>
            </div>
          </div>
          {/* Repeat this structure for other cards */}
          <div className="flex-shrink-0 flex gap-2 max-w-xs md:max-w-lg md:mr-10 bg-blue-100 rounded-md p-4">
            <div className="mt-1">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0">
                  <rect
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    rx="12"
                    fill="#89cff0"
                    strokeWidth="0"
                  />
                </g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M3 15H21M3 19H15M3 7H11M3 11H11M19.4 11H16.6C16.0399 11 15.7599 11 15.546 10.891C15.3578 10.7951 15.2049 10.6422 15.109 10.454C15 10.2401 15 9.96005 15 9.4V6.6C15 6.03995 15 5.75992 15.109 5.54601C15.2049 5.35785 15.3578 5.20487 15.546 5.10899C15.7599 5 16.0399 5 16.6 5H19.4C19.9601 5 20.2401 5 20.454 5.10899C20.6422 5.20487 20.7951 5.35785 20.891 5.54601C21 5.75992 21 6.03995 21 6.6V9.4C21 9.96005 21 10.2401 20.891 10.454C20.7951 10.6422 20.6422 10.7951 20.454 10.891C20.2401 11 19.9601 11 19.4 11Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg">
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
              </h2>
              <p className="text-gray-600 text-sm">
                mattis enim tincidunt. Lorem ipsum dolor sit amet consectetur.
                Dui vel quis dignissim mattis enim tincidunt. Lorem ipsum dolor
                sit amet consectetur. Ac phasellus risus est faucibus metus
                quis. Amet sapien quam viverra adipiscing condimentum. Ac
                consectetur et pretium in a bibendum in. Sed vitae sit nisi
                viverra natoque lacinia libero enim.
              </p>
            </div>
          </div>
          {/* Repeat this structure for other cards */}
        </div>
        <button
          className="absolute top-0 bottom-0 right-0 px-3 py-1 "
          onClick={() => {
            const container = document.querySelector(".overflow-x-scroll");
            container.scrollBy({
              left: 400, // Adjust this value as needed
              behavior: "smooth",
            });
          }}
        >
          <span className=" border-2px border-white bg-white rounded-full px-2 py-1">
            &gt;
          </span>
        </button>
      </div>
      <style jsx>{`
        .overflow-x-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <h2 className="flex items-center gap-2 text-gray-800">
        <p className="font-medium mb-2 text-gray-600">Analyst Estimates</p>

        <svg
          height="100px"
          id="Capa_1"
          version="1.1"
          viewBox="0 15  100 100"
          width="15px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M45.385,0.004C19.983,0.344-0.333,21.215,0.004,46.619c0.34,25.393,21.209,45.715,46.611,45.377c25.398-0.342,45.719-21.213,45.381-46.615C91.656,19.986,70.785-0.335,45.385,0.004z M50.484,15.333c4.676,0,6.057,2.714,6.057,5.815c0,3.877-3.104,7.461-8.396,7.461c-4.43,0-6.537-2.229-6.414-5.91C41.731,19.597,44.33,15.333,50.484,15.333z M38.497,74.75c-3.195,0-5.537-1.938-3.301-10.467l3.666-15.125c0.637-2.424,0.744-3.393,0-3.393c-0.959,0-5.107,1.674-7.557,3.322l-1.598-2.617c7.773-6.491,16.712-10.299,20.544-10.299c3.195,0,3.727,3.779,2.131,9.594l-4.199,15.9c-0.744,2.811-0.424,3.779,0.318,3.779c0.961,0,4.102-1.166,7.188-3.59l1.811,2.424C49.939,71.838,41.69,74.75,38.497,74.75z" />
        </svg>
      </h2>
      <div className="flex items-center gap-10">
        <div className="relative inline-flex text-2xl font-semibold text-green-700 items-center justify-center bg-green-200 rounded-full min-h-28 min-w-28 aspect-w-1 aspect-h-1">
          76%
        </div>
        <div className="flex flex-col justify-evenly">
          <div className="flex gap-3 items-center">
            <span>Buy</span>
            <div className="flex-1  h-2.5 rounded-md bg-green-500 w-20 md:w-44 gray-400 mx-2"></div>
            <span>76%</span>
          </div>
          <div className="flex gap-2 items-center">
            <span>Hold</span>
            <div className="flex-1 h-2.5 rounded-md max-w-6 md:max-w-10 bg-gray-500  gray-400 mx-2"></div>
            <span>8%</span>
          </div>
          <div className="flex gap-3 items-center">
            <span>Sell</span>
            <div className="flex-1 h-2.5 rounded-md max-w-14 md:max-w-20 bg-red-500 gray-400 mx-2"></div>
            <span>16%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sentiment;
