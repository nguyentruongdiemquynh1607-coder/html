const Trang2 = () => {
  const dssv = [
    {
      id: 1,
      hoten: "Choi Hyeonjun",
      lop: "T1 Doran",
      email: "Choihyeonjun.soc.com",
      anh: "https://specs.gg/assets/include/upload/image.php?name=Doran&t=2025-11-02%2016:41:48",
    },
    {
      id: 2,
      hoten: "Mun Hyeonjun",
      lop: "T1 Oner",
      email: "Munhyeonjun.ho.com",
      anh: "https://specs.gg/assets/include/upload/image.php?name=Oner&t=2025-11-02%2016:55:16",
    },
    {
      id: 3,
      hoten: "Lee Sanghyeok",
      lop: "T1 Faker",
      email: "Leesanghyeok.meo.com",
      anh: "https://specs.gg/assets/include/upload/image.php?name=Faker&t=2025-11-02%2017:24:52",
    },
    {
      id: 4,
      hoten: "Lee Minhyung",
      lop: "T1 Gumayusi",
      email: "Leeminhyung.gau.com",
      anh: "https://specs.gg/assets/include/upload/image.php?name=4113098964ff00a5250ad&t=2025-11-02%2017:22:15",
    },
    {
      id: 5,
      hoten: "Ryu Minseok",
      lop: "T1 Keria",
      email: "Ryuminseok.cun.com",
      anh: "https://specs.gg/assets/include/upload/image.php?name=Keria&t=2025-11-02%2017:13:16",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0d0d0d", // nền đen sâu
        padding: "40px",
        fontFamily: "Inter, sans-serif",
        color: "#f5f5f5",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "24px",
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        {dssv.map((sv) => (
          <div
            key={sv.id}
            style={{
              backgroundColor: "#1c1c1e", // nền thẻ tối hơn
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
            }}
          >
            <img
              src={sv.anh}
              alt={sv.hoten}
              style={{
                width: "180%",
                height: "250px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "15px" }}>
              <h3
                style={{
                  margin: "8px 0 4px",
                  fontSize: "16px",
                  color: "#ffffff",
                }}
              >
                {sv.hoten}
              </h3>
              <p
                style={{
                  margin: "4px 0",
                  color: "#cccccc",
                  fontSize: "14px",
                }}
              >
                {sv.lop}
              </p>
              <p
                style={{
                  margin: "0",
                  fontSize: "13px",
                  color: "#888888",
                }}
              >
                {sv.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trang2;

