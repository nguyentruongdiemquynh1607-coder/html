import React from "react";
import { products } from "./models/product";
import { useNavigate } from "react-router-dom";

const Trang1 = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #000000, #1a0000)",
        color: "#fff",
        minHeight: "100vh",
        padding: "60px 80px",
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "700",
          color: "#fff",
          display: "inline-block",
          marginBottom: "40px",
          paddingBottom: "10px",
        }}
      >
        Danh sách sản phẩm
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "24px",
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/sanpham/${p.id}`)}
            style={{
              backgroundColor: "#222",
              borderRadius: "8px",
              overflow: "hidden",
              textAlign: "center",
              cursor: "pointer",
              transition: "transform 0.3s, box-shadow 0.3s",
              borderBottom: "3px solid #b22222",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(255,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{
                width: "100%",
                height: "240px",
                objectFit: "contain",
                backgroundColor: "#fff",
              }}
            />
            <div style={{ padding: "12px" }}>
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#fff",
                  marginBottom: "6px",
                }}
              >
                {p.title}
              </h4>
              <p
                style={{
                  color: "#bbb",
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {p.price}$
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trang1;
