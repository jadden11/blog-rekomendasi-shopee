const products = [
  {
    id: 1,
    name: "Basreng Pedas Daun Jeruk/ Original / Balado 100 Gram",
    href: "https://s.shopee.co.id/7KeuM8OLVl",
    price: "Rp 5.000",
    imageSrc:
      "https://down-bs-id.img.susercontent.com/id-11134207-7r98x-lub6y79geeaeeb.webp",
    imageAlt: "Basreng Pedas.",
  },
];

export default function ProductFoods() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Foods
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Makanan.</p>
        </div>
      </main>

      {/* Product grid */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
