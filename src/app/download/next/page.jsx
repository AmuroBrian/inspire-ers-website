"use client";

import Header from "../../components/header";
import Footer from "../../components/footer";
import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '@/firebase/firebaseConfig'; 

export default function DownloadNextPage() {
  const [selectedPlatform, setSelectedPlatform] = useState("Linux");
  const [installers, setInstallers] = useState([]);
  const [loading, setLoading] = useState(true);

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  useEffect(() => {
    const fetchInstallers = async () => {
      setLoading(true);
      setInstallers([]);
      try {
        const q = query(
          collection(db, "installers"),
          where("platform", "==", selectedPlatform)
        );
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setInstallers(data);
      } catch (error) {
        console.error("Error fetching installers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstallers();
  }, [selectedPlatform]);

  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <Header />

      {/* Main Content Section */}
      <section className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Inspire ERS Development Kit Downloads
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-4">
            Download the latest version of our Employee Record System development kit for your preferred platform.
          </p>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            All downloads are subject to our license agreement. Please ensure you have the latest version for optimal performance and security updates.
          </p>
        </div>

        {/* Platform Selection Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            {["Linux", "macOS", "Windows"].map((platform) => (
              <button
                key={platform}
                onClick={() => setSelectedPlatform(platform)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  selectedPlatform === platform
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-black hover:text-gray-800"
                }`}
              >
                {platform}
              </button>
            ))}
          </div>
        </div>

        {/* Download Table */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden shadow-lg">
          <table className="w-full">
            <thead className="bg-white/20">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white border-b border-white/20">
                  Product/file description
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-white border-b border-white/20 bg-white/10">
                  File size
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white border-b border-white/20">
                  Download
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/20">
              {loading ? (
                <tr>
                  <td colSpan={3} className="px-6 py-8 text-center text-white">
                    Loading...
                  </td>
                </tr>
              ) : installers.length === 0 ? (
                <tr>
                  <td colSpan={3} className="px-6 py-8 text-center text-white">
                    No installers found for {selectedPlatform}.
                  </td>
                </tr>
              ) : (
                installers.map((item) => (
                  <tr key={item.id} className="hover:bg-white/10 transition-colors duration-150">
                    <td className="px-6 py-4 text-sm text-white">
                      {item.fileName}
                    </td>
                    <td className="px-6 py-4 text-sm text-white text-right bg-white/5">
                      {formatFileSize(item.fileSize)}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <a
                        href={item.fileUrl}
                        download={item.fileName}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg"
                      >
                        Download
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      <Footer textColor="white" />
    </div>
  );
}