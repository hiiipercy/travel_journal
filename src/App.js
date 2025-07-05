import React,{useEffect,useState} from "react";
import data from "./data";
import Style from "./Style.css";
import Header from "./Header";
import Content from "./Content"

function App() {
  const dataElement = data.map(item=>{
    return <Content
            title={item.title}
            location={item.location}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            imageUrl={item.imageUrl}
            />
  })
  const [isDarkMode, setDarkMode] = useState(false);

  // Effect to check for dark mode preference in local storage
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    setDarkMode(storedDarkMode === 'true');
  }, []);

  // Effect to update local storage when dark mode changes
  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header
      dark={isDarkMode}
      mode={toggleDarkMode}
      />
      {dataElement}
    </div>
  );
}
export default App;
// React-based Succinct NFT Creator UI
// This example assumes use of ethers.js and a pre-deployed ERC-721 contract

import { useState } from "react";
import { ethers } from "ethers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

// Replace with your deployed NFT contract address and ABI
const NFT_CONTRACT_ADDRESS = "0xYourContractAddress";
const NFT_ABI = [
  "function mintNFT(address recipient, string memory tokenURI) public returns (uint256)"
];

export default function SuccinctNFTMinter() {
  const [tokenURI, setTokenURI] = useState("");
  const [status, setStatus] = useState("");

  const handleMint = async () => {
    try {
      if (!window.ethereum) throw new Error("Please install MetaMask");

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const nftContract = new ethers.Contract(NFT_CONTRACT_ADDRESS, NFT_ABI, signer);

      const tx = await nftContract.mintNFT(await signer.getAddress(), tokenURI);
      setStatus("Minting...");
      await tx.wait();
      setStatus("NFT Minted Successfully ✅");
    } catch (err) {
      console.error(err);
      setStatus("Error: " + err.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-xl font-bold">Create Your Succinct NFT</h2>
          <Input
            type="text"
            placeholder="Enter Token URI (e.g., IPFS link)"
            value={tokenURI}
            onChange={(e) => setTokenURI(e.target.value)}
          />
          <Button onClick={handleMint}>Mint NFT</Button>
          {status && <p className="text-sm text-gray-500">{status}</p>}
        </CardContent>
      </Card>
    </div>
  );
}


