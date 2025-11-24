import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-4">
        <h1 className="text-2xl font-bold">Snapshots</h1>
        <p className="text-gray-500">Take snapshots of your life</p>
        <ul className="flex gap-2">
          <li className="bg-blue-500 text-white p-2 rounded-md">
            <Link href="/portfolio" className="text-white">Portfolio</Link>
          </li>
          <li className="bg-blue-500 text-white p-2 rounded-md">
            <Link href="/blog" className="text-white">Blog</Link>
          </li>
          <li className="bg-blue-500 text-white p-2 rounded-md">
            <Link href="/clients" className="text-white">Clients</Link>
          </li>
        </ul>
    </div>
    );
}