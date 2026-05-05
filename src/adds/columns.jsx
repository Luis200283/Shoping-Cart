function Card() {
  return (
    <div className="break-inside-avoid-column lg:break-inside-column . p-(--card-padding) mb-10  max-w-sm md:max-w-md rounded-(--card-radius) bg-gray-900 [--card-radius:var(--radius-3xl)] [--card-padding:--spacing(3)]">
      <div
        id="Card"
        className="bg-white max-w-sm md:max-w-md shadow-md rounded-[calc(var(--card-radius)-var(--card-padding))]"
      >
        <img
          className="w-full aspect-video object-cover rounded-t-[calc(var(--card-radius)-var(--card-padding))]"
          src="/src/assets/building.avif"
          alt=""
        />
        <div className="p-6">
          <div className="text-sky-500 text-sm font-semibold uppercase">
            Card subTitle
          </div>
          <div className="text-lg font-medium mb-1.5">
            Aqui puedes ver una bonita obra de arte estructural
          </div>
          <p className="text-gray-500">
            This is a simple card component. You can add any content here, such
            as
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Columns() {
  return (
    <div className="w-full flex justify-center">
      <div className="scroll-auto gap-2 columns-1 md:columns-2 lg:columns-3 sm:gap-8 px-10 py-4 bg-gray-700 mx-auto">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
