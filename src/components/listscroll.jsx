const list = ["user1", "user2", "user3", "user4", "user5", "user6"];

export default function ListScroll() {
  return (
    <div className="w-ful bg-[#0F141E] p-10 mt-20">
      <div className="w-full sm:w-2/3 md:w-100 mx-auto rounded-2xl overflow-y-auto h-100 ">
        <div className="sticky text-white top-0 right-0 left-0 w-full bg-gray-700/90 p-3 font-bold">
          Contacts
        </div>
        <div className="text-white bg-gray-800">
          {list.map((user) => (
            <div
              key={user}
              className="flex items-center p-4 gap-4 border-b border-gray-700 pb-2"
            >
              <img
                className="size-16 rounded-full"
                src={`/public/users/${user}.avif`}
                alt="image of user"
              />
              <div>
                <h2 className="font-bold">Hector Adams</h2>
                <p className="text-gray-400">Software Engineer</p>
              </div>
            </div>
          ))}
        </div>

        <div className="sticky text-white top-0 right-0 left-0 w-full bg-gray-700 p-3 font-bold">
          Otros Contactos
        </div>
        <div className="text-white bg-gray-800 ">
          {list.map((user) => (
            <div
              key={user}
              className="flex items-center p-4 gap-4 mb-4 border-b border-gray-700 pb-2"
            >
              <img
                className="size-16 rounded-full"
                src={`/public/users/${user}.avif`}
                alt="image of user"
              />
              <div>
                <h2 className="font-bold">Hector Adams</h2>
                <p className="text-gray-400">Software Engineer</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
