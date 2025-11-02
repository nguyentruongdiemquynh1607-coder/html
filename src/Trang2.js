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
        minHeight: "100vh", // Chiếm toàn bộ chiều cao màn hình
        display: "flex",
        justifyContent: "center", // Căn giữa ngang

        backgroundColor: "#141414", // Tuỳ chọn
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
          maxWidth: "1000px", // Giới hạn chiều rộng
          width: "100%",
        }}
      >
        {dssv.map((motsinhvien) => (
          <div
            key={motsinhvien.id}
            style={{
              height: "300px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              color: "#ffffff", //màu chữ
              backgroundColor: "#333132", //màu nền
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={motsinhvien.anh}
              alt={motsinhvien.hoten}
              style={{
                height: "140px",

                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
            <h3 style={{ margin: "10px 0 5px" }}>{motsinhvien.hoten}</h3>
            <p>{motsinhvien.lop}</p>
            <p>{motsinhvien.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trang2;

