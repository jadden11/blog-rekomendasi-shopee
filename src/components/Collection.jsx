const callouts = [
  {
    name: "Foods",
    description: "Makanan dan minuman",
    imageSrc: "foods.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "/foods",
  },
  {
    name: "Clothes",
    description: "Pakaian dan sepatu",
    imageSrc: "clothes.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "/clothes",
  },
  {
    name: "Accessories",
    description: "Aksesoris",
    imageSrc: "accessories.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "/accessories",
  },
];

export default function Collection() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Belanja Product
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Product yang kami rekomendasikan.
          </p>
        </div>
      </main>

      {/* Collections */}
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      alt={callout.imageAlt}
                      src={callout.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
