function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial", background: "#f5f5f5" }}>
      <h1 style={{ textAlign: "center" }}>黃元 (Tim Huang)</h1>
      <h3 style={{ textAlign: "center", color: "gray" }}>
        AI / Computer Vision Engineer
      </h3>

      {/* About */}
      <div style={card}>
        <h2>About</h2>
        <p>
          專注於影像辨識與深度學習，熟悉 YOLOv8、OpenCV，
          具備樂譜辨識系統開發經驗，專攻小物件偵測與模型優化。
        </p>
      </div>

      {/* Projects */}
      <div style={card}>
        <h2>Projects</h2>

        <div style={projectCard}>
          <h3>🎵 Music Score Recognition</h3>
          <p>使用 YOLOv8 進行音符偵測，解決小物件問題</p>
        </div>

        <div style={projectCard}>
          <h3>🚦 Traffic Light Detection</h3>
          <p>使用 OpenCV 進行顏色分割與辨識</p>
        </div>
      </div>

      {/* Skills */}
      <div style={card}>
        <h2>Skills</h2>
        <p>Python / PyTorch / OpenCV / YOLO</p>
      </div>

      {/* Contact */}
      <div style={card}>
        <h2>Contact</h2>
        <p>Email: ryanhuang1121@icloud.com</p>
      </div>
    </div>
  );
}

const card = {
  background: "white",
  padding: "20px",
  margin: "20px auto",
  borderRadius: "10px",
  maxWidth: "800px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
};

const projectCard = {
  background: "#fafafa",
  padding: "15px",
  marginTop: "10px",
  borderRadius: "8px"
};

export default App;