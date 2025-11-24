import Link from "next/link";

export default function ClientsPage() {
    const clients = [
        { id: 'maxwell', name: 'Maxwell' },
        { id: 'john', name: 'John' },
        { id: 'jane', name: 'Jane' },
    ];
  return (
    <div className="p-4">
        <h1 className="text-2xl font-bold">Clients</h1>
        <p className="text-gray-500">Your clients</p>
        <ul className="flex gap-2">
            {clients.map((client) => (
                <li key={client.id} className="bg-blue-500 text-white p-2 rounded-md">
                    <Link href={`/clients/${client.id}`} className="text-white">{client.name}</Link>
                </li>
            ))}
        </ul>
    </div>
  );
}