import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission Control | Sys-Admin",
  description: "Restricted Area - System Administration",
};

export default function SysAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0a0f18] text-white selection:bg-[#72B9F1] selection:text-[#0a0f18]">
      {children}
    </div>
  );
}