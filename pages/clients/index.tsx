import Link from "next/link";

export default function ClientsPage() {
  return (
    <div className="p-4">
        <h1 className="text-2xl font-bold">Clients</h1>
        <p className="text-gray-500">Your clients</p>
        <ul className="flex gap-2">
            <li className="bg-blue-500 text-white p-2 rounded-md">
                <Link href="/clients/Maxwell" className="text-white">Maxwell</Link>
            </li>
            <li className="bg-blue-500 text-white p-2 rounded-md">
                <Link href="/clients/John" className="text-white">John</Link>
            </li>
            <li className="bg-blue-500 text-white p-2 rounded-md">
                <Link href="/clients/Jane" className="text-white">Jane</Link>
            </li>
        </ul>
    </div>
  );
}