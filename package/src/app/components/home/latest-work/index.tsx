"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LatestWork = () => {
  const [workData, setWorkData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/work-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setWorkData(data?.workData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32 ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16"
            >
              <h2>Các dự án</h2>
              <p className="text-xl text-orange-500">( 04 )</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
              {workData?.map((value: any, index: any) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                    viewport={{ once: true }}
                    className="group flex flex-col gap-3 xl:gap-6"
                  >
                    <motion.div
                      initial={{ scale: 0.9 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 * index + 0.2 }}
                      viewport={{ once: true }}
                      className="relative h-full"
                    >
                      <Image
                        src={value?.image}
                        alt="image"
                        width={570}
                        height={414}
                        className="rounded-lg w-full h-full"
                      />
                      <Link
                        href={`${value.slug}`}
                        className="absolute top-0 left-0 backdrop-blur-md bg-primary/15 w-full h-full opacity-0 group-hover:opacity-100 group-hover:flex transition ease-in rounded-lg"
                      >
                        <span className="flex justify-center items-center p-5 w-full">
                          <svg
                            width="65"
                            height="64"
                            viewBox="0 0 65 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.333374"
                              width="64"
                              height="64"
                              rx="32"
                              fill="#FE4300"
                            />
                            <path
                              d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666"
                              stroke="#FFFF"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </Link>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 * index + 0.4 }}
                      viewport={{ once: true }}
                      className="flex flex-col gap-0 xl:gap-2"
                    >
                      <div className="flex items-center justify-between">
                        <Link href={`${value.slug}`}>
                          <h5>{value?.title}</h5>
                        </Link>
                        <motion.div
                          initial={{ x: -10 }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image
                            src={"/images/icon/right-arrow-icon.svg"}
                            alt="right-arrow-icon"
                            width={30}
                            height={30}
                          />
                        </motion.div>
                      </div>
                      <p>Client: {value?.client}</p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
