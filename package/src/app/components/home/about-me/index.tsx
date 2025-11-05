"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section>
      <div className="relative bg-softGray py-10 md:py-32">
        <div className="absolute top-0 w-full px-9">
          <Image
            src="/images/home/about-me/resume-bg-img.svg"
            alt="resume-bg-img"
            width={1200}
            height={348}
            className="w-full"
          />
        </div>

        <div className="relative z-10">
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
                <h2>Giới thiệu</h2>
                <p className="text-xl text-primary">( 01 )</p>
              </div>
            </motion.div>
            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              <div className="w-[303px] h-[440px] hidden lg:flex">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/images/home/about-me/about-banner-img.svg"
                    alt="about-banner"
                    width={303}
                    height={440}
                    className="w-full h-full"
                  />
                </motion.div>
              </div>

              <div className="w-full lg:max-w-2xl flex-1">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p>
                    Với tư duy thẩm mỹ tinh tế và sự hiểu biết sâu về nhu cầu
                    thị trường, tôi hướng tới việc tạo ra những thiết kế truyền
                    tải rõ ràng thông điệp thương hiệu và gây ấn tượng mạnh về
                    thị giác. Mỗi dự án là một câu chuyện riêng, nơi tôi kết hợp
                    giữa tính sáng tạo và chiến lược thương hiệu để tạo nên sản
                    phẩm thẩm mỹ, hiệu quả và bền vững.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-mistGray"
                >
                  {[
                    { count: "10", label: "Năm kinh nghiệm" },
                    { count: "200+", label: "Khách hàng hài lòng" },
                    { count: "1800+", label: "Dự án đã hoàn thành" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + i * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <h3>{item.count}</h3>
                      <p className="text-base md:text-lg text-black">
                        {item.label}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  viewport={{ once: true }}
                  className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4"
                >
                  <div className="flex items-center gap-3.5">
                    <Image
                      src="/images/icon/lang-icon.svg"
                      alt="lang-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-base xl:text-xl text-black">Ngôn ngữ</p>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-2.5">
                    {["Tiếng Việt", "English"].map((lang, i) => (
                      <motion.p
                        key={lang}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 + i * 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white py-2 md:py-3.5 px-4 md:px-5 w-fit rounded-full text-base xl:text-xl"
                      >
                        {lang}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
