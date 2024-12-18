"use client";

import React, { useState } from "react";
import { Users, ShoppingBag, Store } from "lucide-react";
import { useRouter } from "next/navigation";

const UserTypeSelection = () => {
  const [selectedUserType, setSelectedUserType] = useState<string>();
  const router = useRouter();
  const userTypes = [
    {
      id: "lister",
      title: "Lister",
      description: "Create and manage your dating profile",
      icon: <Users className="w-12 h-12 text-purple-600" />,
    },
    {
      id: "shopper",
      title: "Shopper",
      description: "Browse and connect with potential matches",
      icon: <ShoppingBag className="w-12 h-12 text-pink-600" />,
    },
    {
      id: "vendor",
      title: "Vendor",
      description: "Provide dating services and experiences",
      icon: <Store className="w-12 h-12 text-blue-600" />,
    },
  ];
  const handleUserTypeSelect = (type: string) => {
    setSelectedUserType(type);
    router.push(`/${type}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Choose Your Experience
        </h1>
        <p className="text-gray-600 mb-8">
          Select how you want to interact with our dating platform
        </p>

        <div className="space-y-4">
          {userTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => handleUserTypeSelect(type.id)}
              className={`w-full flex items-center p-4 rounded-lg border-2 transition-all duration-300 
                ${
                  selectedUserType === type.id
                    ? "border-purple-500 bg-purple-50 scale-105"
                    : "border-gray-200 hover:border-purple-300 hover:bg-purple-50"
                }`}
            >
              <div className="mr-4">{type.icon}</div>
              <div className="text-left">
                <h3 className="font-bold text-xl text-gray-800">
                  {type.title}
                </h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>
            </button>
          ))}
        </div>

        {selectedUserType && (
          <div className="mt-6 animate-fade-in">
            <p className="text-sm text-gray-500">
              Selected Experience:{" "}
              <span className="font-bold">{selectedUserType}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserTypeSelection;
