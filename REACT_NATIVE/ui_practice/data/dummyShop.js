const shop = [
  {
    id: "s1",
    title: "Power-Up Market",
    imgUrl: "https://cdn.logo.com/hotlink-ok/logo-social.png",
    description:
      "Get the latest power-up in order to finish your tasks with more ease and earn achievements.",
    btnText: "Browse Market",
    items: [
      {
        id: "i1",
        isAvailable: true, // if true title== In Inventory else Available
        title: "Ice of Boreas",
        imgUrl: "https://cdn.logo.com/hotlink-ok/logo-social.png",
        description:
          "Ice of Boreas allows you to freeze your learning streak for a day of inactivity. Doesn't work with challenges.",
        amount: 20,
      },
      {
        id: "i2",
        title: "Wing of Icarus",
        isAvailable: false,
        imgUrl: "https://cdn.logo.com/hotlink-ok/logo-social.png",
        description:
          "Wing of Icarus allows you to remain your streak in for a day of inactivity.",
        amount: 60,
      },
    ],
  },
  {
    id: "s2",
    title: "Armor Market",
    imgUrl: "https://cdn.logo.com/hotlink-ok/logo-social.png",
    description:
      "Get the legendary armor items in order to finish your tasks with ease and earn achievements.",
    btnText: "Browse Market",
    items: [
      {
        id: "i1",
        title: "The Cloak of hercules",
        isAvailable: false,
        imgUrl: "https://cdn.logo.com/hotlink-ok/logo-social.png",
        description:
          "The Cloak of Hercules grants you special power that will allow you to finish your challenges with more ease.",
        amount: 500,
      },
      {
        id: "i2",
        title: "Shield of Achilles",
        isAvailable: true,
        imgUrl: "https://cdn.logo.com/hotlink-ok/logo-social.png",
        description:
          "The shield of Achilles grant you special power that will allow you to finish your challenges with more ease.",
        amount: 200,
      },
    ],
  },
];
export default shop;
//button-text format==> isAvailable ? "Use Power-Up" : "Buy" + item.title+ (amount.toString());
