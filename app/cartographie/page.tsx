import dynamic from "next/dynamic";

const CartographieGraph = dynamic(() => import("./CartographieGraph"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
      <p className="text-sm text-gray-400">Chargement de la cartographie…</p>
    </div>
  ),
});

export default function CartographiePage() {
  return <CartographieGraph />;
}
