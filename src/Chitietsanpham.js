// src/Chitietsanpham.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "./models/product";

export default function Chitietsanpham() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div style={{ padding: 20 }}>
        <h3>Không tìm thấy sản phẩm!</h3>
        <button onClick={() => navigate("/trang1")}>Quay lại Trang 1</button>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #000000, #1a0000)",
        color: "#fff",
        minHeight: "100vh",
        padding: "60px 100px",
      }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{
          background: "none",
          color: "#fff",
          border: "1px solid #b22222",
          padding: "6px 16px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "14px",
          marginBottom: "30px",
          transition: "all 0.3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#b22222";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "none";
        }}
      >
        ← Quay lại
      </button>

      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "420px",
            height: "420px",
            background: "#111",
            borderRadius: "12px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 25px rgba(255,0,0,0.15)",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>

        {/*Phần mô tả sản phẩm ở đây */}
        <div style={{ maxWidth: "500px" }}>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: "700",
              color: "#fff",
              marginBottom: "15px",
            }}
          >
            {product.title}
          </h2>

          <p style={{ color: "#bbb", fontSize: "18px", marginBottom: "20px" }}>
            <strong>Giá:</strong> {product.price}$
          </p>

          <p
            style={{
              color: "#ccc",
              fontSize: "15px",
              lineHeight: "1.6",
            }}
          >
            <strong>Loại:</strong> {product.category || "Chưa phân loại"}
            <br />
            <strong>Mô tả:</strong>{" "}
            {product.description ||
              "Sản phẩm cao cấp, thiết kế hiện đại và chất lượng vượt trội."}
          </p>
        </div>
      </div>
    </div>
  );
}
