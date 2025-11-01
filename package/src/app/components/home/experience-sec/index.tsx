import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2015",
            title: "Junior Graphic Designer",
            company: "AMC Mekong Company",
            type: "Fulltime",
            description: "Thiết kế đồ hoạ quang cáo, ấn phẩm, nhận diện thương hiệu, bao bì sản phẩm, giao diện người dùng tai AMC Mekong"
        },
        {
            year: "2018",
            title: "Senior Designer",
            company: "PNF JSC",
            type: "Fulltime",
            description: "Vận hành và phát triển nhận diện thương hiệu và các ấn phẩm quảng cáo, lập chiến lược truyền thông thị trường, quản lý đội nhóm thiết kế tại PNF JSC"
        },
        {
            year: "2021",
            title: "Senior Designer",
            company: "GiaTam Pharma, PNF JSC, Tay Do JSC, Meko Trading, ",
            type: "Remote",
            description: "Vận hành và phát triển nhận diện thương hiệu, phát triển các ấn phẩm quảng cáo, lập chiến lược truyền thông thị trường, quản lý đội nhóm thiết kế"
        },
        {
            year: "2022+",
            title: "Freelance Designer",
            company: "Self-Employed",
            type: "Freelancer",
            description: "Cung cấp các dịch vụ thiết kế đồ hoạ đa dạng bao gồm nhận diện thương hiệu, đồ hoạ quảng cáo, ấn phẩm, 3D và giao diện người dùng cho các khách hàng cá nhân và doanh nghiệp."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Kinh nghiệm</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 1 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;