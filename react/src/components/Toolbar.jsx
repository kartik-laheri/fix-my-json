import styles from "./Toolbar.module.css";

export default function Toolbar({ onUpload, onCopy, onClear, onFormat, onFix }) {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => onUpload(event.target.result);
    reader.readAsText(file);
  };

  return (
    <div className={styles.toolbar}>
      <label className={styles.btn}>
        📂 Upload
        <input
          type="file"
          accept=".json"
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
      </label>

      <button className={styles.btn} onClick={onCopy}>
        📋 Copy Output
      </button>

      <button className={styles.btn} onClick={onClear}>
        🧹 Clear
      </button>

      <button className={styles.btn} onClick={onFormat}>🔧 Format</button>

      <button onClick={onFix} className={styles.fixBtn}>
        🩹 Fix JSON
      </button>
    </div>
  );
}
