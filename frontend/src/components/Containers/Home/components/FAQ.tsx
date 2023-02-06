import { FC } from 'react';

const FAQ: FC = () => {
  return (
    <section className="py-10 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center">
            <div className="mb-5 lg:mb-0 w-full px-4 lg:w-1/2">
              <h1 className="font-primary font-semibold text-2xl lg:text-3xl text-primary mb-2">
                Pertanyaan Umum
              </h1>

              <p className="text-gray-500 xl:text-lg leading-relaxed">
                Pertanyaan paling umum tentang cara kerja klinik kami dan apa
                yang dapat kami lakukan untuk Anda.
              </p>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="rounded-xl shadow-lg p-5">
                <div className="mb-0 md:mb-2">
                  <details className="mb-4">
                    <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                      How Long is this site live?
                    </summary>

                    <p className="px-2 text-justify">
                      Laboris qui labore cillum culpa in sunt quis sint veniam.
                      Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                      minim velit nostrud pariatur culpa magna in aute.
                    </p>
                  </details>
                </div>

                <div className="mb-0 md:mb-2">
                  <details className="mb-4">
                    <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                      How Long is this site live?
                    </summary>

                    <p className="px-2 text-justify">
                      Laboris qui labore cillum culpa in sunt quis sint veniam.
                      Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                      minim velit nostrud pariatur culpa magna in aute.
                    </p>
                  </details>
                </div>

                <div className="mb-0 md:mb-2">
                  <details className="mb-4">
                    <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                      How Long is this site live?
                    </summary>

                    <p className="px-2 text-justify">
                      Laboris qui labore cillum culpa in sunt quis sint veniam.
                      Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                      minim velit nostrud pariatur culpa magna in aute.
                    </p>
                  </details>
                </div>

                <div className="mb-0 md:mb-0">
                  <details className="">
                    <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                      How Long is this site live?
                    </summary>

                    <p className="px-2 text-justify">
                      Laboris qui labore cillum culpa in sunt quis sint veniam.
                      Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                      minim velit nostrud pariatur culpa magna in aute.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
