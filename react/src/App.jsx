import { useState, useRef } from "react";
import EditorPane from "./components/EditorPane";
import Toolbar from "./components/Toolbar";
import { formatJson } from "./utils/formatJson";
import { fixJson } from "./utils/fixJson";
import styles from "./App.module.css";

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const outputRef = useRef(null);

  const handleFormat = () => {
    const result = formatJson(input);
    setOutput(result);
  };

  const handleFix = () => {
    const result = fixJson(input);
    setOutput(result);
  };

  const handleUpload = (fileContent) => {
    setInput(fileContent);
  };

  const handleCopy = () => {
    if (outputRef.current) {
      navigator.clipboard.writeText(output);
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>FixMyJSON</header>

      <Toolbar
        onUpload={handleUpload}
        onCopy={handleCopy}
        onClear={handleClear}
        onFormat={handleFormat}
        onFix={handleFix}
      />

      <div className={styles.editors}>
        <EditorPane label="Input JSON" value={input} onChange={setInput} />
        <EditorPane
          label="Output JSON"
          value={output}
          readOnly
          ref={outputRef}
        />
      </div>

    </div>
  );
}
