"use client";

import Image from "next/image";
import styles from "./page.module.css";
// import { Uploader } from "@irys/upload";
// import { Ethereum } from "@irys/upload-ethereum";

export default function Home() {
  const exampleManifestID = "G2RYHJXUhqamBxc1A3cFjoNbpBih9UN6fS7udRYCBxST";

  const accountActive = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

  const downloadOriginalManifest = async (exampleManifestID) => {
    try {
      const response = await fetch(
        `https://gateway.irys.xyz/mutable/${exampleManifestID}`
      );
      if (!response.ok) throw new Error("Failed to fetch original manifest");
      return response.json();
    } catch (error) {
      console.error("Error downloading original manifest", error);
      throw error;
    }
  };

  async function runCode() {
    // Via online docs
    const originalManifest = await downloadOriginalManifest(exampleManifestID);
    console.log(originalManifest);
    const userDataManifestPathID2 = originalManifest[accountActive];
    console.log(userDataManifestPathID2);

    // Via alternative path

    const gatewayUrlUserDataManifestURL = `https://gateway.irys.xyz/mutable/${exampleManifestID}`;
    const fetchResponseUserDataManifest = await fetch(
      gatewayUrlUserDataManifestURL
    );
    const dataUserDataManifest = await fetchResponseUserDataManifest.text();
    const parsedUserDataManifestData = JSON.parse(dataUserDataManifest);
    console.log(parsedUserDataManifestData);
    const userDataManifestPathID =
      parsedUserDataManifestData.paths[accountActive];
    console.log(userDataManifestPathID);
  }

  runCode();

  return <div className={styles.page}>Hirys</div>;
}
