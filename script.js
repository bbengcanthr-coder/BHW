// ข้อมูลสมาชิกและเหล่า
const clans = [
  {
    name: "เหล่าราชหัสดิน",
    img: "images/clan1.png",
    members: [
      "รวิกานต์ ศิริอมรเศรษฐ์",
      "พิชญะ ภู่ทองงาม",
      "เสน่ห์จันทร์ ใจจำรูญรัก",
      "มัชชาระ ศิรวัชรปัญญา",
      "ฐิติภูมิ วิลัยลักษณ์",
      "เมสัน เลห์มันน์",
      "วรัญดนย์ กุสุมาลย์โชติ",
      "แพรวริน จตุตักรศิขรินทร์",
      "ธีรนนท์ สุรเวชวรากุล",
      "อันดามัน ครามวารี"
    ]
  },
  {
    name: "เหล่าชลาศัย",
    img: "images/clan2.png",
    members: ["ตัวอย่าง 1", "ตัวอย่าง 2"]
  },
  {
    name: "เหล่าจตุรงค์",
    img: "images/clan3.png",
    members: ["ตัวอย่าง 3", "ตัวอย่าง 4"]
  }
];

const nameInput = document.getElementById("nameInput");
const checkBtn = document.getElementById("checkBtn");
const resultDiv = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (!name) {
    alert("กรุณากรอกชื่อของคุณ");
    return;
  }

  let found = false;

  clans.forEach(clan => {
    if (clan.members.some(member => member.includes(name))) {
      resultDiv.innerHTML = `
        <p>🎉 ยินดีด้วย! ท่านอยู่เหล่า <strong>${clan.name}</strong></p>
        <img src="${clan.img}" alt="${clan.name}">
      `;
      found = true;
    }
  });

  if (!found) {
    resultDiv.innerHTML = `<p>❌ ไม่พบชื่อของคุณในระบบ</p>`;
  }
});
