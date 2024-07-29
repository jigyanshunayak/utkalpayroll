// src/pages/DashboardPage.tsx
import React from 'react';
import Card from './Card';// 
import { CardProps } from '@/src/utils/admin';

// Sample data for demonstration
const cardData: CardProps[] = [
  { id: 1, title: 'Card 1', count: 10, img: { src: '/path/to/image1.png' } },
  { id: 2, title: 'Card 2', count: 20, img: { src: '/path/to/image2.png' } },
  // Add more card data as needed
];

const DashboardPage: React.FC = () => {
  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
