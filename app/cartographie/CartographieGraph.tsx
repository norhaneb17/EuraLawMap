"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  ReactFlow, Background, Controls, Panel, BackgroundVariant,
  useNodesState, useEdgesState,
  Handle, Position, NodeProps, Node, Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

// ─── Types ────────────────────────────────────────────────────────────────────

type RegulationNodeData = {
  acronym: string; name: string; href: string;
  bg: string; border: string; text: string; label: string;
};
type RegulationNode = Node<RegulationNodeData, "regulation">;

type GroupNodeData = { label: string; bg: string; border: string; color: string };
type GroupNodeType = Node<GroupNodeData, "groupNode">;

// ─── Group colors ─────────────────────────────────────────────────────────────

const G = {
  donnees:     { bg: "#EFF6FF", border: "#3B82F6", text: "#1D4ED8", label: "Données" },
  plateformes: { bg: "#F5F3FF", border: "#8B5CF6", text: "#6D28D9", label: "Plateformes" },
  cyber:       { bg: "#FFF7ED", border: "#F97316", text: "#C2410C", label: "Cybersécurité" },
  ia:          { bg: "#F0FDF4", border: "#22C55E", text: "#15803D", label: "Intelligence artificielle" },
  finance:     { bg: "#FFFBEB", border: "#F59E0B", text: "#92400E", label: "Finance & crypto" },
  identite:    { bg: "#F8FAFC", border: "#94A3B8", text: "#475569", label: "Identité numérique" },
  propintell:  { bg: "#FFF1F2", border: "#F43F5E", text: "#BE123C", label: "Propriété intellectuelle" },
  eprivacy:    { bg: "#F0FDFA", border: "#14B8A6", text: "#0F766E", label: "ePrivacy" },
};

// ─── Custom nodes ─────────────────────────────────────────────────────────────

const hStyle = {
  opacity: 0, width: 1, height: 1,
  minWidth: 1, minHeight: 1, borderWidth: 0, background: "transparent",
};

function RegulationNodeComponent({ data }: NodeProps<RegulationNode>) {
  return (
    <div
      style={{
        backgroundColor: data.bg, borderColor: data.border, color: data.text,
        borderWidth: 2, borderStyle: "solid", borderRadius: 10,
        padding: "8px 12px", width: 148, textAlign: "center",
        cursor: "pointer", boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        transition: "box-shadow 0.15s, transform 0.15s", userSelect: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 4px 14px ${data.border}55`;
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.08)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <Handle type="source" position={Position.Top}    id="s-top"    style={hStyle} />
      <Handle type="source" position={Position.Bottom} id="s-bottom" style={hStyle} />
      <Handle type="source" position={Position.Left}   id="s-left"   style={hStyle} />
      <Handle type="source" position={Position.Right}  id="s-right"  style={hStyle} />
      <Handle type="target" position={Position.Top}    id="t-top"    style={hStyle} />
      <Handle type="target" position={Position.Bottom} id="t-bottom" style={hStyle} />
      <Handle type="target" position={Position.Left}   id="t-left"   style={hStyle} />
      <Handle type="target" position={Position.Right}  id="t-right"  style={hStyle} />
      <div style={{ fontWeight: 700, fontSize: 14, lineHeight: "1.2" }}>{data.acronym}</div>
      <div style={{ fontSize: 10, marginTop: 2, opacity: 0.65, lineHeight: "1.3" }}>{data.name}</div>
    </div>
  );
}

function GroupNodeComponent({ data }: NodeProps<GroupNodeType>) {
  return (
    <div style={{
      width: "100%", height: "100%", position: "relative",
      backgroundColor: data.bg + "99",
      borderRadius: 14,
      border: `1.5px solid ${data.border}`,
      boxSizing: "border-box",
      pointerEvents: "none",
    }}>
      <span style={{
        position: "absolute", top: 8, left: 12,
        fontSize: 9, fontWeight: 700, color: data.color,
        textTransform: "uppercase", letterSpacing: "0.07em", opacity: 0.75,
      }}>
        {data.label}
      </span>
    </div>
  );
}

const nodeTypes = {
  regulation: RegulationNodeComponent,
  groupNode: GroupNodeComponent,
};

// ─── Nodes ────────────────────────────────────────────────────────────────────

const initialNodes: (RegulationNode | GroupNodeType)[] = [

  // Zones de groupe (arrière-plan)
  { id: "grp-donnees",     type: "groupNode", zIndex: -1, selectable: false, draggable: false, position: { x: 20,  y: 20  }, style: { width: 440, height: 320 }, data: { ...G.donnees,     color: G.donnees.text     } },
  { id: "grp-ia",          type: "groupNode", zIndex: -1, selectable: false, draggable: false, position: { x: 530, y: 68  }, style: { width: 190, height: 125 }, data: { ...G.ia,           color: G.ia.text           } },
  { id: "grp-plateformes", type: "groupNode", zIndex: -1, selectable: false, draggable: false, position: { x: 790, y: 18  }, style: { width: 380, height: 310 }, data: { ...G.plateformes,  color: G.plateformes.text  } },
  { id: "grp-cyber",       type: "groupNode", zIndex: -1, selectable: false, draggable: false, position: { x: 880, y: 415 }, style: { width: 400, height: 295 }, data: { ...G.cyber,        color: G.cyber.text        } },
  { id: "grp-finance",     type: "groupNode", zIndex: -1, selectable: false, draggable: false, position: { x: 600, y: 418 }, style: { width: 215, height: 270 }, data: { ...G.finance,      color: G.finance.text      } },
  { id: "grp-identite",    type: "groupNode", zIndex: -1, selectable: false, draggable: false, position: { x: 110, y: 415 }, style: { width: 210, height: 115 }, data: { ...G.identite,    color: G.identite.text    } },
  { id: "grp-propintell",  type: "groupNode", zIndex: -1, selectable: false, draggable: false, position: { x: 240, y: 545 }, style: { width: 210, height: 115 }, data: { ...G.propintell,  color: G.propintell.text  } },
  { id: "grp-eprivacy",    type: "groupNode", zIndex: -1, selectable: false, draggable: false, position: { x: 15,  y: 545 }, style: { width: 210, height: 115 }, data: { ...G.eprivacy,    color: G.eprivacy.text    } },

  // Données
  { id: "rgpd",      type: "regulation", position: { x: 145, y: 105 }, data: { acronym: "RGPD",      name: "Protection des données",            href: "/reglement/rgpd",        ...G.donnees } },
  { id: "dga",       type: "regulation", position: { x: 30,  y: 220 }, data: { acronym: "DGA",       name: "Gouvernance des données",           href: "/reglement/dga",         ...G.donnees } },
  { id: "dataact",   type: "regulation", position: { x: 265, y: 220 }, data: { acronym: "Data Act",  name: "Accès et partage des données",      href: "/reglement/dataact",     ...G.donnees } },

  // IA
  { id: "aiact",     type: "regulation", position: { x: 540, y: 97  }, data: { acronym: "AI Act",    name: "Intelligence artificielle",         href: "/reglement/aiact",       ...G.ia } },

  // Plateformes
  { id: "dsa",       type: "regulation", position: { x: 900, y: 60  }, data: { acronym: "DSA",       name: "Services numériques",               href: "/reglement/dsa",         ...G.plateformes } },
  { id: "dma",       type: "regulation", position: { x: 1010, y: 165 }, data: { acronym: "DMA",      name: "Marchés numériques",                href: "/reglement/dma",         ...G.plateformes } },
  { id: "p2b",       type: "regulation", position: { x: 803, y: 240 }, data: { acronym: "P2B",       name: "Relations plateformes-entreprises", href: "/reglement/p2b",         ...G.plateformes } },

  // Cybersécurité
  { id: "nis2",      type: "regulation", position: { x: 1000, y: 455 }, data: { acronym: "NIS 2",    name: "Sécurité des réseaux",              href: "/reglement/nis2",        ...G.cyber } },
  { id: "cra",       type: "regulation", position: { x: 1110, y: 570 }, data: { acronym: "CRA",      name: "Cyber-résilience des produits",     href: "/reglement/cra",         ...G.cyber } },
  { id: "csa",       type: "regulation", position: { x: 888, y: 570 }, data: { acronym: "CSA",       name: "Certification cybersécurité",       href: "/reglement/cybersecact", ...G.cyber } },

  // Finance
  { id: "dora",      type: "regulation", position: { x: 617, y: 455 }, data: { acronym: "DORA",      name: "Résilience opérationnelle",         href: "/reglement/dora",        ...G.finance } },
  { id: "mica",      type: "regulation", position: { x: 617, y: 575 }, data: { acronym: "MiCA",      name: "Marchés de crypto-actifs",          href: "/reglement/mica",        ...G.finance } },

  // Identité & droits num.
  { id: "eidas2",    type: "regulation", position: { x: 148, y: 448 }, data: { acronym: "eIDAS 2",   name: "Identité numérique",           href: "/reglement/eidas2",    ...G.identite   } },
  { id: "copyright", type: "regulation", position: { x: 253, y: 573 }, data: { acronym: "Dir. ©",    name: "Droit d’auteur numérique",     href: "/reglement/copyright", ...G.propintell  } },
  { id: "eprivacy",  type: "regulation", position: { x: 28,  y: 573 }, data: { acronym: "ePrivacy",  name: "Vie privée et communications", href: "/reglement/eprivacy",  ...G.eprivacy    } },
];

// ─── Edges ────────────────────────────────────────────────────────────────────

const eBase = {
  type: "smoothstep" as const,
  style: { stroke: "#64748B", strokeWidth: 1.5, strokeDasharray: "6 3" },
  labelStyle: { fontSize: 9.5, fill: "#1E293B", fontWeight: 600 },
  labelBgStyle: { fill: "#FFFFFF", fillOpacity: 0.92 },
  labelBgPadding: [5, 3] as [number, number],
  labelBgBorderRadius: 4,
};

const initialEdges: Edge[] = [
  { id: "e-aiact-rgpd",    source: "aiact",    sourceHandle: "s-left",  target: "rgpd",   targetHandle: "t-right",  label: "Données personnelles",       ...eBase },
  { id: "e-aiact-dsa",     source: "aiact",    sourceHandle: "s-right", target: "dsa",    targetHandle: "t-left",   label: "Transparence algorithmique", ...eBase },
  { id: "e-dora-nis2",     source: "dora",     sourceHandle: "s-right", target: "nis2",   targetHandle: "t-left",   label: "Lex specialis financière",   ...eBase },
  { id: "e-eidas2-rgpd",   source: "eidas2",   sourceHandle: "s-top",   target: "rgpd",   targetHandle: "t-bottom", label: "Données d’identité",    ...eBase },
  { id: "e-eprivacy-rgpd", source: "eprivacy", sourceHandle: "s-top",   target: "rgpd",   targetHandle: "t-bottom", label: "Lex specialis communications",...eBase },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CartographieGraph() {
  const router = useRouter();
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      if (node.type === "regulation") {
        router.push((node.data as RegulationNodeData).href);
      }
    },
    [router]
  );

  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 4rem)" }}>
      {/* Header */}
      <div className="flex-shrink-0 px-4 sm:px-8 py-5 border-b border-gray-100 bg-white">
        <h1 className="font-serif-display text-2xl md:text-3xl font-bold text-navy-950">
          Cartographie des textes européens
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          15 textes organisés par domaine — cliquez sur un texte pour l&apos;explorer. Les flèches indiquent des articulations juridiques spécifiques.
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
          fitViewOptions={{ padding: 0.1 }}
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

          <Panel position="bottom-left">
            <div className="bg-white border border-gray-200 rounded-xl px-3 py-2.5 shadow-sm mb-2 ml-2 text-[10px] text-gray-400 leading-relaxed max-w-[190px]">
              <div className="flex items-start gap-2 mb-1">
                <svg width="18" height="8" className="flex-shrink-0 mt-0.5"><line x1="0" y1="4" x2="18" y2="4" stroke="#64748B" strokeWidth="1.5" strokeDasharray="5 2"/></svg>
                <span>Articulation juridique entre deux textes de domaines différents</span>
              </div>
              <span className="text-gray-300">Cliquez sur un texte pour l&apos;explorer</span>
            </div>
          </Panel>
        </ReactFlow>
      </div>
    </div>
  );
}
