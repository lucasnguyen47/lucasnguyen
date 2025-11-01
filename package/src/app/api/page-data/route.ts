import { NextResponse } from "next/server";
import { title } from "process";

const contactBar = {
  contactItems: [
    {
      type: "email",
      label: "lucasnguyen69@proton.me",
      icon: "/images/icon/mail-icon.svg",
      link: "mailto:hello@imsruthi.com"
    },
    {
      type: "phone",
      label: "0901 080 160",
      icon: "/images/icon/call-icon.svg",
      link: "tel:+90155882500"
    },
    {
      type: "website",
      label: "behance.net/47lucas",
      icon: "/images/icon/web-icon.svg",
      link: "https://www.behance.net/47lucas"
    }
  ],
  socialItems: [
    {
      platform: "dribbble",
      icon: "/images/icon/dribble-icon.svg",
      link: "https://dribbble.com"
    },
    {
      platform: "linkedin",
      icon: "/images/icon/linkedin-icon.svg",
      link: "https://linkedin.com"
    },
    {
      platform: "facebook",
      icon: "/images/icon/facebook-icon.svg",
      link: "https://facebook.com"
    }
  ]
};


const educationData = {
  education: [
    {
      title: "Tốt nghiệp khoá thiết kế đồ hoạ Quốc tế - APTECH tại Đại Học Cần Thơ 2015",
      description: "APTECH là chương trình đào tạo chuyên về công nghệ thông tin (CNTT) do Aptech Computer Education – một tập đoàn giáo dục toàn cầu có trụ sở tại Ấn Độ – xây dựng và cấp chứng chỉ."
    },
    // {
    //   title: "Master Diploma - 2012",
    //   description: "Combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."
    // },
    // {
    //   title: "Master in User Experience - 2014",
    //   description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
    // }
  ],
  skills: [
    {
      name: "Adobe Illustrator",
      icon: "/images/home/education-skill/adobe_illustrator.svg",
      rating: 5
    },
    {
      name: "Photoshop",
      icon: "/images/home/education-skill/adobe_photoshop.svg",
      rating: 5
    },
    {
      name: "After Effect",
      icon: "/images/home/education-skill/adobe_after_effects.svg",
      rating: 4
    },
    {
      name: "Blender",
      icon: "/images/home/education-skill/blender_icon_512x512.png",
      rating: 4
    },
    {
      name: "Figma",
      icon: "/images/home/education-skill/figma.svg",
      rating: 5
    },
    {
      name: "VS Code",
      icon: "/images/home/education-skill/vscode.svg",
      rating: 3
    }
  ]
}

const contactLinks = {
  socialLinks: [
    {
      title: "Behance",
      href: "https://www.behance.net/47lucas"
    },
    {
      title: "Facebook",
      href: "/"
    },
    {
      title: "Zalo",
      href: "/"
    },
  ],
  contactInfo: [
    {
      type: "email",
      label: "lucasnguyen69@proton.me",
      link: "mailto:lucasnguyen69@proton.me"
    },
    {
      type: "phone",
      label: "0901 080 160",
      link: "tel:+84 901 080 160"
    }
  ]
}



export const GET = async () => {
  return NextResponse.json({
    contactBar,
    educationData,
    contactLinks
  });
};
