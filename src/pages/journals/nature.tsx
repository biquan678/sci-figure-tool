export default function JournalPage(){
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">Nature Figure Requirements</h1>
      <div className="mt-4 text-gray-700">
        <div><b>Recommended DPI:</b> 300</div>
        <div><b>Common widths:</b> 85 mm / 180 mm</div>
        <div className="mt-3"><b>Notes:</b> Preferred formats: TIFF, EPS, PDF. Avoid JPG compression.</div>
      </div>
      <div className="mt-6 p-4 rounded-xl border">
        <div className="font-semibold">One?click template</div>
        <div className="text-sm text-gray-600">Open a pre?configured canvas and export at journal?ready size.</div>
        <button className="mt-3 px-4 py-2 rounded-lg bg-black text-white">Open Template</button>
      </div>
    </div>
  );
}
