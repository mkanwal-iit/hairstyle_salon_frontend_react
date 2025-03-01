export function HairstylistsIndex({ hairstylists = [], onShow }) {
  return (
    <div className="bg-gray-900 p-6">
      <h1 className="text-2xl font-bold mb-4 text-yellow-400">All Hairstylists ({hairstylists.length} total)</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {hairstylists.map((hairstylist) => (
          <div key={hairstylist.id} className="border p-4 bg-gray-800 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-white">{hairstylist.name}</h2>
            <img
              src={hairstylist.hairstylist_image}
              alt={hairstylist.name}
              className="rounded-t w-full aspect-[4/3] object-cover"
            />
            <p className="mb-1 text-white">Bio: {hairstylist.bio}</p>
            <button className="bg-yellow-500 text-black px-4 py-2 mt-2 rounded" onClick={() => onShow(hairstylist)}>
              Ours Hairstylists
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
