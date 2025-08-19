"use client";

import Header from "../../components/header";
import Footer from "../../components/footer";
import { useState } from "react";

export default function DownloadNextPage() {
  const [selectedPlatform, setSelectedPlatform] = useState("Linux");

  const downloadData = {
    Linux: [
      {
        description: "ARM64 Compressed Archive",
        fileSize: "229.37 MB",
        downloadLink: "https://download.oracle.com/java/24/latest/jdk-24_linux-aarch64_bin.tar.gz",
        sha256: "sha256"
      },
      {
        description: "ARM64 RPM Package",
        fileSize: "228.98 MB",
        downloadLink: "https://download.oracle.com/java/24/latest/jdk-24_linux-aarch64_bin.rpm",
        sha256: "sha256 (OL 9 GPG Key)"
      },
      {
        description: "x64 Compressed Archive",
        fileSize: "232.15 MB",
        downloadLink: "https://download.oracle.com/java/24/latest/jdk-24_linux-x64_bin.tar.gz",
        sha256: "sha256"
      },
      {
        description: "x64 Debian Package",
        fileSize: "200.21 MB",
        downloadLink: "https://download.oracle.com/java/24/latest/jdk-24_linux-x64_bin.deb",
        sha256: "sha256"
      },
      {
        description: "x64 RPM Package",
        fileSize: "231.71 MB",
        downloadLink: "https://download.oracle.com/java/24/latest/jdk-24_linux-x64_bin.rpm",
        sha256: "sha256 (OL 9 GPG Key)"
      }
    ],
    Windows: [
      {
        description: "x64 Installer",
        fileSize: "245.89 MB",
        downloadLink: "https://download.oracle.com/java/24/latest/jdk-24_windows-x64_bin.exe",
        sha256: "sha256"
      },
      {
        description: "x64 MSI Installer",
        fileSize: "248.12 MB",
        downloadLink: "https://download.oracle.com/java/24/latest/jdk-24_windows-x64_bin.msi",
        sha256: "sha256"
      },
      {
        description: "x64 Compressed Archive",
        fileSize: "235.67 MB",
        downloadLink: "https://download.oracle.com/java/24/latest/jdk-24_windows-x64_bin.zip",
        sha256: "sha256"
      }
    ],
    macOS: [
      {
        description: "ARM64 DMG Installer",
        fileSize: "218.45 MB",
        downloadLink: "https://download.oracle.com/java/24/latest/jdk-24_macos-aarch64_bin.dmg",
        sha256: "sha256"
      },
      {
        description: "x64 DMG Installer",
        fileSize: "220.78 MB",
        downloadLink: "https://download.oracle.com/java/24/latest/jdk-24_macos-x64_bin.dmg",
        sha256: "sha256"
      },
      {
        description: "ARM64 Compressed Archive",
        fileSize: "215.92 MB",
        downloadLink: "https://download.oracle.com/java/24/latest/jdk-24_macos-aarch64_bin.tar.gz",
        sha256: "sha256"
      },
      {
        description: "x64 Compressed Archive",
        fileSize: "218.34 MB",
        downloadLink: "https://download.oracle.com/java/24/latest/jdk-24_macos-x64_bin.tar.gz",
        sha256: "sha256"
      }
    ]
  };

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
              {downloadData[selectedPlatform].map((item, index) => (
                <tr key={index} className="hover:bg-white/10 transition-colors duration-150">
                  <td className="px-6 py-4 text-sm text-white">
                    {item.description}
                  </td>
                  <td className="px-6 py-4 text-sm text-white text-right bg-white/5">
                    {item.fileSize}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = item.downloadLink;
                        link.download = item.description.replace(/\s+/g, '_') + '.zip';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg"
                    >
                      Download
                    </button>
                    <span className="text-gray-300 ml-2">({item.sha256})</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


      </section>

      <Footer textColor="white" />
    </div>
  );
} 