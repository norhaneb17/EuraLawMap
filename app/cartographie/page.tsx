"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  ReactFlow,
  Background,
  Controls,
  Panel,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
  NodeProps,
  Node,
  Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

// ─── Types ────────────────────────────────────────────────────────────────────

type RegulationNodeData = {
  acronym: string;
  name: string;
  href: string;
  bg: string;
  border: string;
  text: string;
  label: string;
};

type RegulationNode = Node<RegulationNodeData, "regulation">;

// ─── Group colors ─────────────────────────────────────────────────────────────

const G = {
  donnees:     { bg: "#EFF6FF", border: "#3B82F6", text: "#1D4ED8", label: "Données" },
  plateformes: { bg: "#F5F3FF", border: "#8B5CF6", text: "#6D28D9", label: "Plateformes" },
  cyber:       { bg: "#FFF7ED", border: "#F97316", text: "#C2410C", label: "Cybersécurité" },
  ia:          { bg: "#F0FDF4", border: "#22C55E", text: "#15803D", label: "Intelligence artificielle" },
  finance:     { bg: "#FFFBEB", border: "#F59E0B", text: "#92400E", label: "Finance & crypto" },
  identite:    { bg: "#F8FAFC", border: "#94A3B8", text: "#475569", label: "Identité & droits num." },
};

// ─── Custom node ──────────────────────────────────────────────────────────────

const h = {
  opacity: 0,
  width: 1,
  height: 1,
  minWidth: 1,
  minHeight: 1,
  borderWidth: 0,
  background: "transparent",
};

function RegulationNodeComponent({ data }: NodeProps<RegulationNode>) {
  return (
    <div
      style={{
        backgroundColor: data.bg,
        borderColor: data.border,
        color: data.text,
        borderWidth: 2,
        borderStyle: "solid",
        borderRadius: 12,
        padding: "10px 14px",
        width: 164,
        textAlign: "center",
        cursor: "pointer",
        boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
        transition: "box-shadow 0.15s, transform 0.15s",
        userSelect: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 4px 14px ${data.border}55`;
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.07)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <Handle type="source" position={Position.Top}    id="s-top"    style={h} />
      <Handle type="source" position={Position.Bottom} id="s-bottom" style={h} />
      <Handle type="source" position={Position.Left}   id="s-left"   style={h} />
      <Handle type="source" position={Position.Right}  id="s-right"  style={h} />
      <Handle type="target" position={Position.Top}    id="t-top"    style={h} />
      <Handle type="target" position={Position.Bottom} id="t-bottom" style={h} />
      <Handle type="target" position={Position.Left}   id="t-left"   style={h} />
      <Handle type="target" position={Position.Right}  id="t-right"  style={h} />

      <div style={{ fontWeight: 700, fontSize: 15, lineHeight: "1.2" }}>{data.acronym}</div>
      <div style={{ fontSize: 10.5, marginTop: 3, opacity: 0.65, lineHeight: "1.35" }}>{data.name}</div>
    </div>
  );
}

const nodeTypes = { regulation: RegulationNodeComponent };

// ─── Nodes ────────────────────────────────────────────────────────────────────

const initialNodes: RegulationNode[] = [
  // DONNÉES
  { id: "rgpd",      type: "regulation", position: { x: 100, y: 100 }, data: { acronym: "RGPD",      name: "Protection des données",              href: "/reglement/rgpd",        ...G.donnees } },
  { id: "dga",       type: "regulation", position: { x: -20, y: 260 }, data: { acronym: "DGA",       name: "Gouvernance des données",             href: "/reglement/dga",         ...G.donnees } },
  { id: "dataact",   type: "regulation", position: { x: 240, y: 260 }, data: { acronym: "Data Act",  name: "Accès et partage des données",        href: "/reglement/dataact",     ...G.donnees } },
  // IA
  { id: "aiact",     type: "regulation", position: { x: 550, y: 100 }, data: { acronym: "AI Act",    name: "Intelligence artificielle",           href: "/reglement/aiact",       ...G.ia } },
  // PLATEFORMES
  { id: "dsa",       type: "regulation", position: { x: 920, y: 60  }, data: { acronym: "DSA",       name: "Services numériques",                 href: "/reglement/dsa",         ...G.plateformes } },
  { id: "dma",       type: "regulation", position: { x: 1100, y: 200 }, data: { acronym: "DMA",      name: "Marchés numériques",                  href: "/reglement/dma",         ...G.plateformes } },
  { id: "p2b",       type: "regulation", position: { x: 920, y: 330 }, data: { acronym: "P2B",       name: "Relations plateformes-entreprises",   href: "/reglement/p2b",         ...G.plateformes } },
  // CYBERSÉCURITÉ
  { id: "nis2",      type: "regulation", position: { x: 1070, y: 450 }, data: { acronym: "NIS 2",    name: "Sécurité des réseaux",                href: "/reglement/nis2",        ...G.cyber } },
  { id: "cra",       type: "regulation", position: { x: 1240, y: 580 }, data: { acronym: "CRA",      name: "Cyber-résilience des produits",       href: "/reglement/cra",         ...G.cyber } },
  { id: "csa",       type: "regulation", position: { x: 900, y: 580 }, data: { acronym: "CSA",       name: "Certification cybersécurité",         href: "/reglement/cybersecact", ...G.cyber } },
  // FINANCE
  { id: "dora",      type: "regulation", position: { x: 660, y: 460 }, data: { acronym: "DORA",      name: "Résilience opérationnelle",           href: "/reglement/dora",        ...G.finance } },
  { id: "mica",      type: "regulation", position: { x: 520, y: 590 }, data: { acronym: "MiCA",      name: "Marchés de crypto-actifs",            href: "/reglement/mica",        ...G.finance } },
  // IDENTITÉ & DROITS NUM.
  { id: "eidas2",    type: "regulation", position: { x: 80,  y: 450 }, data: { acronym: "eIDAS 2",   name: "Identité numérique",                 href: "/reglement/eidas2",      ...G.identite } },
  { id: "copyright", type: "regulation", position: { x: 230, y: 600 }, data: { acronym: "Dir. ©",    name: "Droit d’auteur numérique",       href: "/reglement/copyright",   ...G.identite } },
  { id: "eprivacy",  type: "regulation", position: { x: -60, y: 600 }, data: { acronym: "ePrivacy",  name: "Vie privée et communications",        href: "/reglement/eprivacy",    ...G.identite } },
];

// ─── Edges ────────────────────────────────────────────────────────────────────

const edgeDefaults = {
  type: "smoothstep" as const,
  style: { stroke: "#94A3B8", strokeWidth: 1.5, strokeDasharray: "6 3" },
  labelStyle: { fontSize: 9.5, fill: "#374151", fontWeight: 500 },
  labelBgStyle: { fill: "#ffffff", fillOpacity: 0.9 },
  labelBgPadding: [5, 3] as [number, number],
  labelBgBorderRadius: 4,
};

const initialEdges: Edge[] = [
  {
    id: "e-aiact-rgpd",
    source: "aiact", sourceHandle: "s-left",
    target: "rgpd",  targetHandle: "t-right",
    label: "Les systèmes d'IA traitent souvent des données personnelles",
    ...edgeDefaults,
  },
  {
    id: "e-aiact-dsa",
    source: "aiact", sourceHandle: "s-right",
    target: "dsa",   targetHandle: "t-left",
    label: "Obligations de transparence algorithmique communes",
    ...edgeDefaults,
  },
  {
    id: "e-dora-nis2",
    source: "dora", sourceHandle: "s-right",
    target: "nis2", targetHandle: "t-left",
    label: "DORA est la lex specialis de NIS 2 pour le secteur financier",
    ...edgeDefaults,
  },
  {
    id: "e-eidas2-rgpd",
    source: "eidas2", sourceHandle: "s-top",
    target: "rgpd",   targetHandle: "t-bottom",
    label: "Le portefeuille d'identité traite des données personnelles",
    ...edgeDefaults,
  },
  {
    id: "e-eprivacy-rgpd",
    source: "eprivacy", sourceHandle: "s-top",
    target: "rgpd",     targetHandle: "t-bottom",
    label: "ePrivacy est la lex specialis du RGPD pour les communications",
    ...edgeDefaults,
  },
];

// ─── Legend data ──────────────────────────────────────────────────────────────

const legend = Object.values(G);

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CartographiePage() {
  const router = useRouter();
  const [nodes, , onNodesChange] = useNodesState<RegulationNode>(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      router.push((node.data as RegulationNodeData).href);
    },
    [router]
  );

  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 4rem)" }}>
      {/* Header */}
      <div className="flex-shrink-0 px-4 sm:px-8 py-5 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
        <h1 className="font-serif-display text-2xl md:text-3xl font-bold text-navy-950 dark:text-white">
          Cartographie des règlements
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
          Visualisez les liens entre les 15 textes fondamentaux du droit européen du numérique — cliquez sur un règlement pour l&apos;explorer
        </p>
      </div>

      {/* Graph */}
      <div className="flex-1 min-h-0">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.12 }}
          nodesDraggable={false}
          nodesConnectable={false}
          panOnScroll
          zoomOnScroll
          minZoom={0.25}
          maxZoom={2}
          colorMode="light"
        >
          <Background color="#E2E8F0" variant={BackgroundVariant.Dots} gap={22} size={1.2} />
          <Controls showInteractive={false} style={{ bottom: 16, right: 16, top: "auto", left: "auto" }} />

          {/* Legend */}
          <Panel position="bottom-left">
            <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm mb-2 ml-2" style={{ maxWidth: 200 }}>
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-2">Groupes thématiques</p>
              <div className="flex flex-col gap-1.5">
                {legend.map((g) => (
                  <div key={g.label} className="flex items-center gap-2">
                    <div
                      style={{ background: g.bg, borderColor: g.border, borderWidth: 2, borderStyle: "solid" }}
                      className="w-3.5 h-3.5 rounded flex-shrink-0"
                    />
                    <span className="text-xs text-gray-600">{g.label}</span>
                  </div>
                ))}
                <div className="border-t border-gray-100 mt-2 pt-2">
                  <div className="flex items-start gap-2">
                    <svg width="18" height="6" className="flex-shrink-0 mt-1"><line x1="0" y1="3" x2="18" y2="3" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4 2" /></svg>
                    <span className="text-[10px] text-gray-400 leading-tight">Articulation juridique entre textes de domaines différents</span>
                  </div>
                </div>
              </div>
            </div>
          </Panel>
        </ReactFlow>
      </div>
    </div>
  );
}
