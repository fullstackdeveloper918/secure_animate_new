// Add "use client" to mark this as a Client Component
'use client';

import React, { useEffect, useState } from 'react';
import ContactMain from '@/pages/contact/contact';
import { config } from '../../../../config';

export const metadata = {
  title: 'Secure 365 - Contact page',
};

const ContactPage = () => {
  const [contactData, setContactData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        // Fetch the contact data
        const response = await fetch(`${config.APP_URL}/secure-plugin/v1/contact`, {
          cache: 'no-store',
        });

        // Check if the response is OK
        if (!response.ok) {
          throw new Error('Failed to fetch contact data');
        }

        // Parse JSON response
        const data = await response.json();
        setContactData(data?.data || null);
      } catch (error) {
        console.error('Error fetching contact data:', error);
        setError('Failed to load contact data');
      }
    };

    fetchContactData();
  }, []);

  // If there's an error, show a fallback message
  if (error) {
    return <div>{error}</div>;
  }

  // If contactData is not loaded yet, show a loading state
  if (!contactData) {
    return <div>Loading...</div>;
  }

  return <ContactMain contactData={contactData} />;
};

export default ContactPage;
