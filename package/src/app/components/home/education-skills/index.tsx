"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const EducationSkills = () => {
  const [educationData, setEductionData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setEductionData(data?.educationData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="border-t border-softGray overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src={"/images/home/education-skill/edu-skill-vector.svg"}
              alt="vector"
              width={260}
              height={170}
              className="no-print absolute top-0 left-0 transform -translate-y-1/2"
            />
          </motion.div>
          <div className="relative z-10 py-16 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16"
            >
              <h2>Kiến thức & Kỹ năng</h2>
              <p className="text-xl text-orange-500">( 03 )</p>
            </motion.div>
            <div className="flex flex-col lg:flex-row items-start gap-10 xl:gap-20">
              <div className="w-full lg:max-w-md flex flex-col gap-0 xl:gap-8">
                {educationData?.education?.map((value: any, index: any) => {
                  return (
                    <div key={index} className="flex items-start gap-6">
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 * index }}
                        viewport={{ once: true }}
                        className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                      </motion.div>
                      <div className="flex-1 flex flex-col gap-4">
                        <h5>{value?.title}</h5>
                        <p className="font-normal">{value?.description}</p>
                        <p>
                          Xem thêm thông tin tại{" "}
                          <Link href={"https://www.aptech-worldwide.com/"}>
                            <span className="font-bold text-primary hover:opacity-80">
                              đây
                            </span>
                          </Link>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="grid grid-cols-2 xs:grid-cols-3 gap-5 xl:gap-7 w-full">
                {educationData?.skills?.map((value: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className="p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-5 sm:gap-10 items-center justify-between"
                    >
                      <div className="flex flex-col items-center gap-5">
                        <Image
                          src={value?.icon}
                          alt="icon"
                          width={70}
                          height={70}
                        />
                        <p className="text-black font-normal">{value?.name}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            width="9"
                            height="9"
                            viewBox="0 0 9 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="9"
                              height="9"
                              rx="4.5"
                              fill={i < value?.rating ? "#FE4300" : "#C0D8E0"}
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
