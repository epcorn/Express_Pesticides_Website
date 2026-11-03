"use client";

import Button from '@/components/Button';
import { printInvoiceDirectly } from '@/data/bookservicemodelData';
import React from 'react';
import useSWR from 'swr';

function BookedServices() {
  const fetcher = (url) =>
    fetch(url).then((res) => {
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    });

  const {
    data,
    error,
    isLoading: loading,
  } = useSWR("/api/booked-service", fetcher, {
    revalidateOnFocus: true,
  });

  const services = data?.data || [];

  if (loading) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        Loading booked services...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "40px", textAlign: "center", color: "red" }}>
        Failed to load bookings.
      </div>
    );
  }

  const handlePrint = (bookingData) => {
    printInvoiceDirectly({
      formData: bookingData,
      cost: "",
    });
  };

  return (
    <div>
      {services.length === 0 ? (
        <p>No bookings found yet.</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "left",
            }}>
            <thead>
              <tr className='bg-gray-300'>
                <th style={{ padding: "12px" }}>Date</th>
                <th style={{ padding: "12px" }}>Customer</th>
                <th style={{ padding: "12px" }}>Service</th>
                <th style={{ padding: "12px" }}>Amount Paid</th>
                <th style={{ padding: "12px" }}>Payment ID</th>
                <th style={{ padding: "12px" }}>Status</th>
                <th style={{ padding: "12px" }}>Print</th>
              </tr>
            </thead>
            <tbody>
              {services.map((booking) => (
                <tr
                  key={booking._id}
                  style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "12px" }}>
                    {booking.createdAt ? new Date(booking.createdAt).toLocaleDateString("en-IN") : "N/A"}
                  </td>
                  <td style={{ padding: "12px" }}>
                    <div>
                      <strong>{booking.name}</strong>
                    </div>
                    <div style={{ fontSize: "12px", color: "#666" }}>
                      {booking.phone}
                    </div>
                  </td>
                  <td style={{ padding: "12px" }}>
                    {booking.category} ({booking.bhkType || booking.area})
                  </td>
                  <td style={{ padding: "12px", fontWeight: "bold" }}>
                    ₹{booking.amountPaid}
                  </td>
                  <td
                    style={{
                      padding: "12px",
                      fontFamily: "monospace",
                      fontSize: "12px",
                    }}>
                    {booking.paymentId}
                  </td>
                  <td style={{ padding: "12px" }}>
                    <span
                      style={{
                        padding: "4px 8px",
                        borderRadius: "4px",
                        backgroundColor: "#d4edda",
                        color: "#155724",
                        fontSize: "12px",
                      }}>
                      {booking?.paymentStatus || "Success"}
                    </span>
                  </td>
                  <td
                    style={{
                      padding: "12px",
                      fontFamily: "monospace",
                      fontSize: "12px",
                    }}>
                    <Button onClick={() => handlePrint(booking)}>Print</Button>
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

export default BookedServices;