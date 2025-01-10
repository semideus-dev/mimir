import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen">
      <section className="hidden flex-col items-center bg-primary p-10 text-primary-foreground lg:flex">
        <div className="flex items-center space-x-4">
          <Image
            src="/assets/mimir-logo.png"
            alt="mimir logo"
            width={40}
            height={40}
            className="h-auto"
          />

          <h1 className="text-3xl font-light uppercase">mimir</h1>
        </div>
        <div className="mt-10 space-y-5 text-center">
          <h1 className="text-3xl font-medium">
            Bringing Communities Together
          </h1>
          <p className="text-xs">
            We are a vibrant community platform that empowers people <br />
            to connect, collaborate, and grow together.
          </p>
        </div>
      </section>
      <section className="flex flex-1 flex-col items-center p-4 py-10 lg:justify-center lg:p-10">
        {/* <div className="mb-16 hidden">
        </div> */}
        {children}
      </section>
    </main>
  );
}
