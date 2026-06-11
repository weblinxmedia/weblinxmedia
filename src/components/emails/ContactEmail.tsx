// src/components/emails/ContactEmail.tsx
import * as React from 'react';

interface ContactEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<Readonly<ContactEmailProps>> = ({
  firstName, lastName, email, phone, service, budget, message
}) => (
  <div style={{ fontFamily: 'sans-serif', padding: '40px', backgroundColor: '#f9f9f9' }}>
    <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '12px', border: '1px solid #eee' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111', marginBottom: '24px' }}>New Project Inquiry</h1>
      <p><strong>From:</strong> {firstName} {lastName}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Service:</strong> {service}</p>
      <p><strong>Budget:</strong> {budget}</p>
      <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '24px 0' }} />
      <p><strong>Message:</strong></p>
      <p style={{ lineHeight: '1.6', color: '#444' }}>{message}</p>
    </div>
  </div>
);