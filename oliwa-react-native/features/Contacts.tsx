import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import * as Contacts from 'expo-contacts';

type Contact = Contacts.Contact & {
  name?: string;
};

export default function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      (async () => {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
          updatedSince: new Date(Date.now() - 86400000), // check for updates in the past 24 hours
        });

        if (data.length > 0) {
          const updatedContacts = contacts.map((contact) => {
            const updatedContact = data.find((c) => c.id === contact.id);
            return updatedContact || contact;
          });

          setContacts(updatedContacts);
        }
      })();
    }, 300000); // check for updates every 5 minutes

    return () => clearInterval(interval);
  }, [contacts]);

  return (
    <View>
      {contacts.map((contact) => (
        <Text key={contact.id}>
          {contact.name || contact.firstName || contact.lastName}
        </Text>
      ))}
    </View>
  );
}
