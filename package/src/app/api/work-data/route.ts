import { NextResponse } from "next/server";

const workData = [
    {
        image: "/images/work/YB-spa.webp",
        title: "YB Spa Brand Identity Design",
        client: "YB Spa",
        slug: "https://www.behance.net/gallery/177567583/YB-Spa-Brand-Identity"
    },
    {
        image: "/images/work/Trinh-vintage.webp",
        title: "Trinh Vintage Brand Identity Design",
        client: "Trinh Vintage",
        slug: "https://www.behance.net/gallery/181323193/Trinh-Vintage-Brand-Identity"
    },
    {
        image: "/images/work/miu.webp",
        title: "MIU Store Brand Identity Design",
        client: "MIU Store",
        slug: "https://www.behance.net/gallery/179815547/MIU-Store-Brand-Identity"
    },
    {
        image: "/images/work/dino.webp",
        title: "Dino Itakids Marketing Design",
        client: "GiaTam Pharma",
        slug: "https://www.behance.net/gallery/185317147/Dino-Itakids-Advertising-Campaign"
    },
    {
        image: "/images/work/work-img-5.jpg",
        title: "Mobile App Design",
        client: "John Honnai",
        slug: "mobile-app-design"
    },
    {
        image: "/images/work/work-img-6.jpg",
        title: "Mug Sticker Designing",
        client: "John Honnai",
        slug: "mug-sticker-designing"
    },
    
];




export const GET = async () => {
    return NextResponse.json({
        workData
    });
};
