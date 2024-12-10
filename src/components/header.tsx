import Link from "next/link";

export function Header() {
  return (
    <div className="md:fixed top-0 z-10 px-6 py-2 w-full flex justify-between items-center bg-background backdrop-filter backdrop-blur-sm bg-opacity-30">
      <Link href="/" className="font-medium font-mono text-sm">
        cursor.directory
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/learn" className="text-sm font-medium">
          Learn
        </Link>
      </div>
    </div>
  );
}
