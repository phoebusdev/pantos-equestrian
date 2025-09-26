import { Metadata } from "next";

export const metadata: Metadata = {
  title: "World-Class Facilities - Pantos Equestrian",
  description: "Tour our premium equestrian facilities featuring state-of-the-art arenas, luxury stables, and beautiful countryside trails.",
};

export default function FacilitiesPage() {
  return (
    <section className="relative z-10 overflow-hidden bg-white pt-[120px] dark:bg-gray-dark md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Premium Equestrian Facilities
              </h1>
              <p className="mb-12 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                Experience luxury equestrian facilities designed for excellence. Our 200-acre estate features world-class amenities for both horses and riders.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <h2 className="mb-6 text-[32px] font-bold leading-tight text-black dark:text-white sm:text-[40px] sm:leading-tight">
                Indoor Arena Complex
              </h2>
              <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Our climate-controlled indoor arena spans 200' x 100' with premium footing, professional lighting, and viewing areas for spectators. Perfect for year-round training regardless of weather conditions.
              </p>
              <ul className="mb-6 space-y-2 text-body-color dark:text-body-color-dark">
                <li>• Premium sand and fiber footing</li>
                <li>• Professional LED lighting system</li>
                <li>• Climate control and ventilation</li>
                <li>• Sound system for music</li>
                <li>• Heated viewing lounge</li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
              <div className="rounded-lg bg-gradient-to-r from-green-600 to-green-800 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">Indoor Arena Features</h3>
                <p>State-of-the-art facility with premium amenities for optimal training conditions.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap mt-16">
          <div className="w-full px-4">
            <h2 className="mb-12 text-center text-[32px] font-bold leading-tight text-black dark:text-white sm:text-[40px] sm:leading-tight">
              Additional Facilities
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-dark">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Outdoor Arenas</h3>
                <p className="text-body-color dark:text-body-color-dark">
                  Multiple outdoor riding rings with all-weather footing, perfect for lessons and training in natural settings.
                </p>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-dark">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Luxury Stables</h3>
                <p className="text-body-color dark:text-body-color-dark">
                  Climate-controlled stalls with automatic waterers, premium bedding, and individual turnout access.
                </p>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-dark">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Trail System</h3>
                <p className="text-body-color dark:text-body-color-dark">
                  Miles of maintained trails through beautiful countryside, perfect for hacking and nature rides.
                </p>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-dark">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Wash Bays</h3>
                <p className="text-body-color dark:text-body-color-dark">
                  Heated wash stalls with hot water, grooming areas, and everything needed for horse care.
                </p>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-dark">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Tack Rooms</h3>
                <p className="text-body-color dark:text-body-color-dark">
                  Secure, climate-controlled storage for saddles, bridles, and all your equestrian equipment.
                </p>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-dark">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Lounge Areas</h3>
                <p className="text-body-color dark:text-body-color-dark">
                  Comfortable spaces for riders and families to relax, with refreshments and Wi-Fi available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}