"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1>Lucas Nguyen</h1>
                </motion.div>
                <div className="wave">
                  <Image
                    src={"/images/home/banner/wave-icon.svg"}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className=""
                  />
                </div>
              </div>
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1>Designer</h1>
              </motion.div>
            </div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-secondary font-normal max-w-md xl:max-w-xl">
                Tôi là Hoà, một nhà thiết kế đồ hoạ với 10 năm kinh nghiệm, tôi
                thiết kế đa dạng các sản phẩm từ nhận diện thương hiệu, đồ hoạ
                quảng cáo, ấn phẩm, 3D và giao diện người dùng
              </p>
            </motion.div>
            <Link href={"https://lucasnguyen.vercel.app/"}>
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <button className="relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group">
                  <span className="relative z-10 text-sm font-medium text-black group-hover:text-white transition-colors duration-300 sm:text-xl">
                    Xem bảng giá dịch vụ
                  </span>
                </button>
              </motion.div>
            </Link>
          </div>

          <Image
            src={"/images/home/banner/banner-img.png"}
            alt="banner-img"
            width={685}
            height={650}
            className="block lg:hidden"
          />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
          <Image
            src={"/images/home/banner/avt-img.webp"}
            alt="banner-img"
            width={685}
            height={650}
            className=" absolute right-0 top-0 z-1"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default index;
