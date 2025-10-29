const Trang2 = () => {
  const dssv = [
    {
      id: 1,
      hoten: "Kim Namjoon",
      lop: "BTS",
      email: "Bangtan@1306.bighit.com",
      anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUm9VMD2w9IYrs34o5qRoTYKrYAWGErKr4aEs9s1pmz6j-tjlPZvP9u2qzx9IUamdGl7_9CQ",
    },
    {
      id: 2,
      hoten: "Kim Seok Jin",
      lop: "BTS",
      email: "Bangtan@1306.bighit.com",
      anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1EmYGPaINBJD1vmU7t1M_3jkMqCZ-e7m3ggLObx7kNyHEUtdShYzFXpFLvVEa9Hd6TUYtw",
    },
    {
      id: 3,
      hoten: "Min Yoongi",
      lop: "BTS",
      email: "Bangtan@1306.bighit.com",
      anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdC-LOaqdZgAUM2iIdaeGQdP6lrU3peutAAUo20AP_p1isJ9CH4RsqYY6S49QOcTskCPBgw",
    },
    {
      id: 4,
      hoten: "Jung Hoseok",
      lop: "BTS",
      email: "Bangtan@1306.bighit.com",
      anh: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSoLi1knQdKVux88d85rLSYm2LZxaDniymn7E9Lrg3vG5itRZemm-dhA07TltjahHzdeZEiQQ",
    },
    {
      id: 5,
      hoten: "Park Jimin",
      lop: "BTS",
      email: "Bangtan@1306.bighit.com",
      anh: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRPBAsZKlbWf4qGCQUw-hbfm3CwxsuaQGA5cL6w-HyqU5PFcrKtRpjFxvNcFbaVxMdWb_I9Jw",
    },
    {
      id: 6,
      hoten: "Kim Taehyung",
      lop: "BTS",
      email: "Bangtan@1306.bighit.com",
      anh: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTxY7MDPS-6xE-D1-cvCnEiafR92n4p_oraBo88E2Wll2R3vYOfXw5MQZ0IS0rgnU-eH-mk",
    },
    {
      id: 7,
      hoten: "Jeon Jungkook",
      lop: "BTS",
      email: "Bangtan@1306.bighit.com",
      anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdG3f3t4CJ-IIymicdR05e6YfAcGbyLTT_qgOfMQbDgy81cWR94CJSLw3B2kWTuOL5fKRg",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh", // Chiếm toàn bộ chiều cao màn hình
        display: "flex",
        justifyContent: "center", // Căn giữa ngang

        backgroundColor: "#F1E5FF", // Tuỳ chọn
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
              color: "#FAEBEF", //màu chữ
              backgroundColor: "#0E4274", //màu xanh nền
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
