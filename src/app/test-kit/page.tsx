'use client';

import KitIntegrationTest from '@/components/KitIntegrationTest';

export default function TestKitPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-10">Kit Integration Test Page</h1>
        <KitIntegrationTest />
      </div>
    </div>
  );
} 