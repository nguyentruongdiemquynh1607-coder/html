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
          borderBottom: "2px solid #b22222",
        }}
      >
        Danh sách sản phẩm
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "32px",
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/sanpham/${p.id}`)}
            style={{
              backgroundColor: "#212020",
              borderRadius: "16px",
              overflow: "hidden",
              textAlign: "center",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              boxShadow: "0 4px 15px rgba(255,255,255,0.05)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 8px 25px rgba(255, 0, 0, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(255,255,255,0.05)";
            }}
          >
            <div
              style={{
                width: "100%",
                height: "300px",
                backgroundColor: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={p.image}
                alt={p.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>

            <div style={{ padding: "16px 12px 20px" }}>
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#fff",
                  marginBottom: "8px",
                }}
              >
                {p.title}
              </h4>
              <p
                style={{
                  color: "#ccc",
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
