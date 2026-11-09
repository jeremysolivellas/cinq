import Link from "next/link";

export default function NonTrouvee() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col justify-center px-5">
      <p className="font-titre text-5xl font-bold text-ocre">404</p>
      <h1 className="mt-3 font-titre text-3xl font-bold">
        Cette page n&apos;existe pas.
      </h1>
      <p className="mt-3 text-doux">
        Le lien est peut-être ancien ou mal recopié.
      </p>
      <Link
        href="/"
        className="mt-8 flex min-h-14 items-center justify-center rounded-lg bg-sapin px-6 text-lg font-semibold text-papier"
      >
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
