import type { Metadata } from "next";
import { Harness } from "./Harness";

export const metadata: Metadata = {
  title: "Homepage prototypes",
  robots: { index: false },
};

export default async function Page({ searchParams }: PageProps<"/prototypes/home">) {
  const v = Number((await searchParams).v);
  const initial = Number.isInteger(v) && v >= 1 && v <= 3 ? v - 1 : 0;
  return <Harness initial={initial} />;
}
