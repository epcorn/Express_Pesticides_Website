'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import Button from '@/components/Button';
import ServiceStore from '@/store/serviceStore';
import { printInvoiceDirectly } from '@/data/bookservicemodelData';

export default function AdminDashboard() {

  const router = useRouter();

  // const { services, error, loading, route, fetchServices } = ServiceStore()

  const fetcher = (url) => fetch(url).then((res) => {
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  });

  const { data, error, isLoading: loading } = useSWR('/api/booked-service', fetcher, { refreshInterval: 20000, revalidateOnFocus: true })

  const services = data?.data;

  const handleLogout = async () => {
    router.push('/admin/login');
  };

  if (loading) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Loading booked services...</div>;
  }

  const handlePrint = (data) => {
    printInvoiceDirectly({
      formData: data,
    })
  }

  return (
    <div style={{ padding: '30px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1>Admin Dashboard — Booked Services</h1>
        <button
          onClick={handleLogout}
          style={{
            padding: '8px 16px',
            backgroundColor: '#dc3545',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Logout
        </button>
      </div>

      {services.length === 0 ? (
        <p>No bookings found yet.</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: '#f2f2f2' }}>
                <th style={{ padding: '12px' }}>Date</th>
                <th style={{ padding: '12px' }}>Customer</th>
                <th style={{ padding: '12px' }}>Service</th>
                <th style={{ padding: '12px' }}>Amount Paid</th>
                <th style={{ padding: '12px' }}>Payment ID</th>
                <th style={{ padding: '12px' }}>Status</th>
                <th style={{ padding: '12px' }}>Print</th>
              </tr>
            </thead>
            <tbody>
              {services?.map((booking) => (
                <tr key={booking._id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '12px' }}>{new Date(booking.createdAt).toLocaleDateString('en-IN')}</td>
                  <td style={{ padding: '12px' }}>
                    <div><strong>{booking.name}</strong></div>
                    <div style={{ fontSize: '12px', color: '#666' }}>{booking.phone}</div>
                  </td>
                  <td style={{ padding: '12px' }}>{booking.category} ({booking.bhkType || booking.area})</td>
                  <td style={{ padding: '12px', fontWeight: 'bold' }}>₹{booking.amountPaid}</td>
                  <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px' }}>{booking.paymentId}</td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: '#d4edda', color: '#155724', fontSize: '12px' }}>
                      {booking?.paymentStatus || 'Success'}
                    </span>
                  </td>
                  <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px' }}>
                    <Button onClick={() => handlePrint(booking)}>
                      Print
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}