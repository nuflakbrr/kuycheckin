import { FC } from 'react';

const SummaryReviews: FC = () => {
  return (
    <section>
      <div className="border rounded-lg p-4">
        <h2 className="text-gray-800 text-lg lg:text-xl font-bold mb-3">
          Penilaian Tentang Kamar Ini
        </h2>

        <div className="flex items-center gap-2 mb-0.5">
          <div className="flex gap-0.5 -ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          <span className="text-sm font-semibold">4/5</span>
        </div>

        <span className="block text-gray-500 text-sm">Bases on 27 reviews</span>

        <div className="flex flex-col border-t border-b gap-2 py-5 my-5">
          <div className="flex items-center gap-3">
            <span className="w-10 text-gray-600 text-sm text-center whitespace-nowrap">
              5
            </span>

            <div className="h-4 flex flex-1 bg-gray-200 overflow-hidden rounded">
              <span className="w-3/4 h-full bg-yellow-400 rounded"></span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-10 text-gray-600 text-sm text-center whitespace-nowrap">
              4
            </span>

            <div className="h-4 flex flex-1 bg-gray-200 overflow-hidden rounded">
              <span className="w-1/2 h-full bg-yellow-400 rounded"></span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-10 text-gray-600 text-sm text-center whitespace-nowrap">
              3
            </span>

            <div className="h-4 flex flex-1 bg-gray-200 overflow-hidden rounded">
              <span className="w-2/6 h-full bg-yellow-400 rounded"></span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-10 text-gray-600 text-sm text-center whitespace-nowrap">
              2
            </span>

            <div className="h-4 flex flex-1 bg-gray-200 overflow-hidden rounded">
              <span className="w-1/6 h-full bg-yellow-400 rounded"></span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-10 text-gray-600 text-sm text-center whitespace-nowrap">
              1
            </span>

            <div className="h-4 flex flex-1 bg-gray-200 overflow-hidden rounded"></div>
          </div>
        </div>

        <button
          type="button"
          className="w-full block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
        >
          Tulis Ulasan
        </button>
      </div>
    </section>
  );
};

export default SummaryReviews;
