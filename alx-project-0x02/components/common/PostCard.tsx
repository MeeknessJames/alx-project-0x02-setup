import React from 'react';
import { type PostProps } from '@/interfaces'; 

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-96 border border-gray-200">
      <h2 className="text-xl font-semibold mb-2 text-gray-800 capitalize">{title}</h2>
      <p className="text-gray-700 text-sm mb-4">{body}</p>
      <div className="text-right text-gray-500 text-xs">User ID: {userId}</div>
    </div>
  );
};

export default PostCard;