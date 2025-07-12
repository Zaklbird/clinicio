import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Tailwind is working! 🎉</h1>
      <Link href={'/login'}>
        <h1 className="text-4xl font-bold text-blue-600" >
          lets get started
        </h1>
      </Link>
    </main >
  );
}
