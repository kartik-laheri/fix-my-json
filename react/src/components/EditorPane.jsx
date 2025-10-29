import { forwardRef } from "react";
import Editor from "@monaco-editor/react";
import styles from "./EditorPane.module.css";

const EditorPane = forwardRef(({ label, value, onChange, readOnly }, ref) => {
  return (
    <div className={styles.editorPane}>
      <div className={styles.label}>{label}</div>
      <Editor
        height="77vh"
        defaultLanguage="json"
        theme="vs-dark"
        value={value}
        onChange={(val) => onChange && onChange(val || "")}
        options={{
          readOnly: readOnly,
          autoClosingBrackets: "always",
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          fontSize: 14,
        }}
      />
    </div>
  );
});

export default EditorPane;
