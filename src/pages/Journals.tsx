import { useMemo } from 'react';
import { Link } from 'react-router-dom';

const journals = [
  { name: 'Nature', slug: 'nature' },
  { name: 'Cell', slug: 'cell' },
  { name: 'Science', slug: 'science' },
  { name: 'Elsevier', slug: 'elsevier' },
  { name: 'ACS', slug: 'acs' },
];

export default function Journals() {
  const list = useMemo(() => journals, []);
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">Journal Figure Requirements</h1>
      <p className="mt-3 text-gray-600">Quick links to common journal figure guidelines and templates.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(j => (
          <Link key={j.slug} to={"/journals/" + j.slug} className="p-5 rounded-xl border hover:shadow">
            <div className="text-lg font-semibold">{j.name}</div>
            <div className="text-sm text-gray-500">Open template & sizing guide</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
