'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { userStore } from '@/store/adminStore';
import { toast } from '@/lib/toast';

export default function AdminLogin() {
  const router = useRouter();

  const { error, success, loading, setUser } = userStore();

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObj = Object.fromEntries(formData.entries());

    setUser(formObj);
  };

  // Redirect immediately when success becomes true
  useEffect(() => {
    if (success) {
      router.push("/admin/dashboard");
    }
  }, [success, router]);

  // Toast notification for errors
  useEffect(() => { 
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', padding: '24px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h2 style={{ marginBottom: '16px', textAlign: 'center' }}>Admin Login</h2>

      {error && (
        <div style={{ padding: '8px', marginBottom: '12px', background: '#ffe6e6', color: '#cc0000', borderRadius: '4px', textAlign: 'center' }}>
          {error}
        </div>
      )}

      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '6px' }}>Username or Email</label>
          <input
            type="text"
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            name="user"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '6px' }}>Password</label>
          <input
            type="password"
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            name="password"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{ width: '100%', padding: '10px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}