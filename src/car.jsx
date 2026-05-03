import Product from "./routes/Product";

const ProductCarousel = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-10">
      {/* Contenedor con efecto de difuminado (Mask) */}
      <div
        className="relative overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {/* Contenedor del Scroll */}
        <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth no-scrollbar px-10">
            <Product />
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
