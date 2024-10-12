const products = [
  {
    id: 1,
    name: "celana pendek polos pria/short pants men sport/celana olahraga santai polos hitam olahraga",
    href: "https://s.shopee.co.id/LVA3NoFst",
    price: "Rp 10.000",
    imageSrc:
      "https://down-tx-id.img.susercontent.com/38e3acc2af17e2bab5d9f57691f008af.webp",
    imageAlt: "Basreng Pedas.",
  },
  {
    id: 2,
    name: "Sandal wanita YUN HEE wedges tinggi ringan empuk kokoh lentur gasper sandal kekinian anti slip ringan",
    href: "https://s.shopee.co.id/3L8ldBIVAS",
    price: "Rp 44.999",
    imageSrc:
      "https://down-tx-id.img.susercontent.com/sg-11134201-7rdy6-lyln55hyv4v670.webp",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Kaos Distro Pria Lengan Pendek NY Kaos Oblong Cowok Kaos Pria Atasan Pria Baju Oblong Pria",
    href: "https://s.shopee.co.id/BBjrc6MDz",
    price: "Rp 16.060",
    imageSrc:
      "https://down-tx-id.img.susercontent.com/id-11134207-7r98x-loppzyi7jyb01e.webp",
    imageAlt: "kaos",
  },
  {
    id: 4,
    name: "Sepatu Sneakers Wanita Korea Casual Fashion Collection 01",
    href: "https://s.shopee.co.id/6ASx0oFIDw",
    price: "Rp 37.850",
    imageSrc:
      "https://down-id.img.susercontent.com/file/ce78cb1b8ff10430204d93436343364c@resize_w450_nl.webp",
    imageAlt: "Sepatu Sneakers Wanita Korea Casual Fashion Collection 01",
  },
  {
    id: 4,
    name: "Sandal jepit pria distro terbaru",
    href: "https://s.shopee.co.id/2ft4qjsn4r",
    price: "Rp 7.200",
    imageSrc:
      "https://down-id.img.susercontent.com/file/id-11134201-7r990-lni8ixj0607b59@resize_w450_nl.webp",
    imageAlt: "SANDAL JEPIT PRIA DISTRO KEREN TERBARU",
  },
  {
    id: 5,
    name: "Sepatu Wanita Kasual Sneakers Korean Putih",
    href: "https://s.shopee.co.id/7fHkp0DEF0",
    price: "Rp 52.889",
    imageSrc:
      "https://down-tx-id.img.susercontent.com/id-11134207-7r98v-lygboci95pnk88.webp",
    imageAlt: "Sepatu Wanita Kasual Sneakers Korean Putih",
  },
];

export default function ProductCLothes() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Clothes
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Pakaian dan Sepatu.
          </p>
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
