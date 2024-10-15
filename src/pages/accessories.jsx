const products = [
  {
    id: 1,
    name: "K101D Gaming Mechanical YOOGOO Keyboard Mechanical 63 Keys Wired Luminous Keyboard",
    href: "https://s.shopee.co.id/2ft4qr7hPv",
    price: "Rp 189.000",
    imageSrc:
      "https://down-tx-id.img.susercontent.com/sg-11134201-7rd4x-lwjpizmgwjmgd8.webp",
    imageAlt: "K101D.",
  },
  {
    id: 2,
    name: "MIIGO- Monitor, Monitor Game Profesional, Monitor 24 Inci, Tampilan Lengkung, Panel IPS, (144HZ/165HZ) Kecepatan Refresh Tinggi, Tampilan HD",
    href: "https://s.shopee.co.id/40OWr3rlUW",
    price: "Rp 939.000",
    imageSrc:
      "https://down-cvs-id.img.susercontent.com/id-11134207-7r98r-llokdu3f0r043b.webp",
    imageAlt: "Monitor.",
  },
  {
    id: 3,
    name: "BASIKE Mouse Wireless 2.4Ghz 1600DPI dengan Receiver USB untuk PC Laptop Tablet Silent Click Mini",
    href: "https://s.shopee.co.id/6piiEYROCy",
    price: "Rp 29.000",
    imageSrc:
      "https://down-cvs-id.img.susercontent.com/id-11134207-7r98p-lsi6xcxy3hsd4c.webp",
    imageAlt: "Mouse.",
  },
  {
    id: 4,
    name: "7S SARUNG JARI JEMPOL / ANTI KERINGAT / SARUNG JEMPOL GAME MOBILE LEGEND FREE FIRE 1SET ISI 2PCS",
    href: "https://s.shopee.co.id/8UqwDjzjVN",
    price: "Rp 650",
    imageSrc:
      "https://down-cvs-id.img.susercontent.com/sg-11134201-22100-c3jwlyoavuivd6.webp",
    imageAlt: "Mouse.",
  },
  {
    id: 5,
    name: "Kacamata Hitam Wanita Kaca Mata Hitam Fashion Retro Vintage Kacamata Persegi Korean -Won",
    href: "https://s.shopee.co.id/8pTmcZT1tK",
    price: "Rp 6.999",
    imageSrc:
      "https://down-cvs-id.img.susercontent.com/683d7a69340f781f4318cd2232dd51aa.webp",
    imageAlt: "Kacamata.",
  },
  {
    id: 6,
    name: "Borongdong - Kaos Kaki Pendek Atas Mata Kaki Pria Wanita/Kaos Kaki Olahraga/Kaos Kaki Sport (New Sport 3/4)",
    href: "https://s.shopee.co.id/1g0c5bkf2k",
    price: "Rp 1.700",
    imageSrc:
      "https://down-tx-id.img.susercontent.com/id-11134207-7qukw-lgisfkx2hpse9a.webp",
    imageAlt: "KaosKaki.",
  },
];

export default function Accessories() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Accessories
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Accessories.</p>
        </div>
      </main>

{/*       main section */}
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
