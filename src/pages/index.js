import { useState, useEffect } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import SearchBar from "@/components/SearchBar";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/cjs";

import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import HashLoader from "react-spinners/HashLoader";
import { useTheme } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    setInputVal(e.target.value);
  };

  const handleApi = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://ai-bot-flax.vercel.app/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: inputVal,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setData(data?.response);
      setInputVal("");
      setIsLoading(false);
    } catch (error) {
      console.error("There was an error!", error);
      setIsLoading(false);
    }
  };
  return (
    <>
      <Head>
        <title>AI bot</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p></p>
          <div style={{ color: "white" }}>
            <a>AI bot By Ajay Jha</a>
          </div>
        </div>

        <div className={styles.center}>
          {isLoading ? (
            <div style={{ position: "relative", bottom: "50px" }}>
              <HashLoader color={"#36d7b7"} />
            </div>
          ) : (
            <div style={{ width: "80%" }}>
              <SyntaxHighlighter language="javascript" style={darcula}>
                {data}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
      </main>
      <div>
        <SearchBar handleApi={handleApi} handleChange={handleChange} />
      </div>
    </>
  );
}
