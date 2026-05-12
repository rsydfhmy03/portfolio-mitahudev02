'use client';

import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

export default function SysAdminDashboard() {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
    router.push('/sys-admin/login');
  };

  return (
    <div className="p-8 md:p-12 font-mono">
      <div className="flex items-center justify-between mb-12 border-b-4 border-[#25406D] pb-6">
        <div>
          <h1 className="text-4xl font-black text-[#72B9F1] uppercase tracking-tighter">
            MISSION CONTROL_
          </h1>
          <p className="text-zinc-400 mt-2">Welcome to the central command, Admin.</p>
        </div>
        
        <button 
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white font-black uppercase text-sm border-2 border-red-700 shadow-[4px_4px_0_0_#450a0a] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Placeholder Menu */}
        <div className="bg-[#152440] border-2 border-[#25406D] p-6 shadow-[4px_4px_0_0_#0a0f18]">
          <h2 className="text-xl font-black text-white mb-2">Projects Data</h2>
          <p className="text-sm text-zinc-400">Manage your showcase archives.</p>
        </div>
        
        <div className="bg-[#152440] border-2 border-[#25406D] p-6 shadow-[4px_4px_0_0_#0a0f18]">
          <h2 className="text-xl font-black text-white mb-2">Site Settings</h2>
          <p className="text-sm text-zinc-400">Update global configurations.</p>
        </div>
      </div>
    </div>
  );
}