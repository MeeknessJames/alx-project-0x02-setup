import React from 'react';
import { type UserProps } from '@/interfaces'; 

const UserCard: React.FC<UserProps> = ({ name, email, address, phone, website, company }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-96 border border-gray-200">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{name}</h2>
      <p className="text-gray-700 text-sm mb-1">Email: {email}</p>
      <p className="text-gray-700 text-sm mb-1">Phone: {phone}</p>
      <p className="text-gray-700 text-sm mb-1">Website: <a href={`http://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{website}</a></p>
      <p className="text-gray-700 text-sm mb-1">Company: {company.name}</p>
      <p className="text-gray-700 text-sm mt-2">Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
    </div>
  );
};

export default UserCard;