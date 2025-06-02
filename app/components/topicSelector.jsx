export default function TopicSelector({ onSelect }) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 md:gap-12">
      <h1 className="text-3xl text-[#104585] font-bold text-center">Ahla bik , fesh najem n3awnek?</h1>
      <div className="flex gap-4 flex-wrap justify-center">
        <button
          onClick={() => onSelect('general')}
          className="px-6 py-3 rounded-full shadow-md font-semibold text-[ivory] bg-gradient-to-br from-[#3eabe2] to-[#78c8e3] hover:opacity-90 transition"
        >
          Informations Générales
        </button>
        <button
          onClick={() => onSelect('hygiene')}
          className="px-6 py-3 rounded-full shadow-md font-semibold text-[ivory] bg-gradient-to-br from-[#3eabe2] to-[#78c8e3] hover:opacity-90 transition"
        >
          Conseils & Hygiène
        </button>
        <button
          onClick={() => onSelect('map')}
          className="px-6 py-3 rounded-full shadow-md font-semibold text-[ivory] bg-gradient-to-br from-[#3eabe2] to-[#78c8e3] hover:opacity-90 transition"
        >
          Carte & Emplacement
        </button>
        <button
          onClick={() => onSelect('other')}
          className="px-6 py-3 rounded-full shadow-md font-semibold text-[ivory] bg-gradient-to-br from-[#3eabe2] to-[#78c8e3] hover:opacity-90 transition"
        >
          Autres questions & suggestions
        </button>
      </div>
    </div>
  );
}
