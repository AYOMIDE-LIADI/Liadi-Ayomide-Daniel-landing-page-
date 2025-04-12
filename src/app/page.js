"use client"
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { FaCreativeCommonsSamplingPlus } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { useEffect, useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { FaImages } from "react-icons/fa";
import { IoFileTraySharp } from "react-icons/io5";






export default function Home() {
  const images = ["/po1.webp", "/po2.png", "/po3.webp", "/po4.png","/po6.png"];
  const [translateX, setTranslateX] = useState(0);
  const imageWidth = 460; 
  const totalWidth = imageWidth * images.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prev) => {
        const next = prev + imageWidth;
        return next >= totalWidth ? 0 : next;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);


  const [index, setIndex] = useState(0);
  const imageCount = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imageCount);
    }, 5000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  const imageSources = [
    '/smallimage.jpg',
    '/smallimage2.jpg',
    '/smallimage3.jpg',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    if (currentIndex < imageSources.length - 1) {
      setCurrentIndex(currentIndex + 1); 
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); 
    }
  };
  
  const blogPosts = [
    {
      image: "/niceimage.jpg",
      title: "Why do project manager need to focus on strategy?",
      category: "MEDIA SEO",
      date: "April 21, 2020 . 0 comments",
    },
    {
      image: "/niceimage1.jpg",
      title: "Creative collaboration in remote teams",
      category: "MEDIA SEO",
      date: "April 22, 2020 . 2 comments",
    },
    {
      image: "/niceimage2.jpg",
      title: "Design thinking in modern business",
      category: "MEDIA SEO",
      date: "April 23, 2020 . 5 comments",
    },
    {
      image: "/niceimage3.jpg",
      title: "How tech innovation fuels growth",
      category: "MEDIA SEO",
      date: "April 24, 2020 . 1 comment",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 3;
  const gap = 60;
  const totalSlides = blogPosts.length;

  const extendedPosts = [...blogPosts, ...blogPosts];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev =>
        (prev + 1) % totalSlides
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  
  
 
 
  return (
    <div className="text-black overflow-hidden relative">
     <div className="fixed top-60 right-0 flex flex-col items-center z-50">
        <div className="bg-blue-950 h-[50px] w-[50px] p-4 text-center mb-1 cursor-pointer text-white">
          <FiShoppingCart  size={20}/>
        </div>
        <div className="bg-blue-950 h-[50px] w-[50px] p-4 text-center mb-1 text-white cursor-pointer">
          <IoFileTraySharp size={20}/>
        </div>
        <div className="bg-blue-950 h-[50px] w-[50px] p-4 text-center mb-1 text-white cursor-pointer">
          <FaImages size={20}/>
        </div>
      </div>

      <div className=" w-full h-screen bg-cover bg-center bg-no-repeat pt-3 overflow-hidden" style={{ backgroundImage: "url('/bgbg.webp')",zIndex: 1, }}>
          <div className=" px-[55px] flex justify-between  items-center">
            <div className="flex gap-[30px] text-white font-bold items-center">
              <Image 
                src="/topic.webp" 
                alt="Single Image" 
                width={140}
                height={10} 
              />
              <p>Home</p>
              <p>Pages</p>
              <p>Portfolio</p>
              <p>Blog</p>
              <p>Contacts</p>

              <FaSearch size={26}/>
            </div>
            <div className="flex gap-[40px] items-center">
                <div className="rounded-full h-[40px] w-[40px] bg-blue-950 text-white items-center justify-center flex"><LuPhoneCall/></div>
                <p className="font-bold text-white text-[25px]">1 800 458 56 97</p>
                <div className="bg-blue-600 text-center rounded-full py-3 px-[33px] text-white font-semibold cursor-pointer">Lets talk</div>
            </div>
          </div>
          <div className="text-white items-center justify-center  min-h-screen ">
            <div className="mt-[180px]">
                      <p className="font-extrabold text-6xl w-screen px-[440px]  text-center">Turning Creative Ideas Into Success</p>
                      <p className="w-screen px-[505px] font-semibold mt-[30px] text-center">Consectetur adipiscing elit, sed do eiusmod tempor incididuntdolore magna aliqua quis nostrud exerc.</p>
                      <div className="inline-block bg-[#A9C7CC] text-center rounded-full py-3 mt-[70px] px-6 ml-[700px] text-white text-[15px] font-semibold cursor-pointer">
                        Discover now
                      </div>
            </div>
          </div>
      </div>
      <div className="flex py-[120px] px-[120px] gap-[140px] bg-blue-50">
          <div className="relative w-[50%]">
              <Image
                src="/pic1.webp" 
                alt="Image" 
                width={400}
                height={400}
                className="absolute  top-0 right-0 left-0"
              />
              <Image
                src="/pic2.webp" 
                alt="Image" 
                width={440}
                height={400}
                className="absolute z-20 top-[120px] right-0 left-[170px]"
              />
          </div>
          <div className="w-[50%] pt-[80px]">
            <p className="text-blue-950 font-extrabold text-[14px] tracking-[0.2em]">CREATIVE AGENCY</p>
            <p className="text-blue-950 font-extrabold text-[54px] leading-tight mt-3">We help your business grow</p>
            <p className="text-gray-500 font-semibold mt-[30px]">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
            <div className="mt-[55px]">
              <div className="flex gap-[50px] items-center">
               <FaCreativeCommonsSamplingPlus size={50}/>
                <div>
                  <p className="text-blue-950 font-bold text-[22px]">Creative design</p>
                  <p className="text-gray-500 font-semibold mt-2">Natus error sit voluptatem accus antium doloremque.</p>
                </div>
              </div>
              <div className="flex gap-[50px] items-center mt-4">
               <MdOutlineDesignServices size={50}/>
                <div>
                  <p className="text-blue-950 font-bold text-[22px]">Endless Possibilities</p>
                  <p className="text-gray-500 font-semibold mt-2">Sit voluptatem accus antium doloremque laudan.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="bg-blue-50 py-[60px] px-[150px]">
        
        <div className="grid grid-cols-4 pb-[200px]">
            <div className="relative">
                <p className="text-white font-extrabold absolute text-[200px]">98</p>
                <p className="absolute text-blue-950 font-bold text-[25px] top-[135px] left-[70px]">Projects</p>
                <hr className="absolute top-[125px] left-[285px] h-[72px] w-0.5 bg-gray-200"></hr>
            </div>
           
            <div className="relative">
                <p className="text-white font-extrabold absolute text-[200px]">65</p>
                <p className="absolute text-blue-950 font-bold text-[25px] top-[135px] left-[70px]">People</p>
                <hr className="absolute top-[125px] left-[285px] h-[72px] w-0.5 bg-gray-200"></hr>
            </div>
           
            <div className="relative">
                <p className="text-white font-extrabold absolute text-[200px]">10</p>
                <p className="absolute text-blue-950 font-bold text-[25px] top-[135px] left-[70px]">Years</p>
                <hr className="absolute top-[125px] left-[285px] h-[72px] w-0.5 bg-gray-200"></hr>
            </div>
           
            <div className="relative">
                <p className="text-white font-extrabold absolute text-[200px]">15</p>
                <p className="absolute text-blue-950 font-bold text-[25px] top-[135px] left-[70px]">Offices</p>
            </div>  
        </div>
        <div className="flex mt-[170px]">
          <div className="w-[50%]">
            <div className="tracking-[0.2em] text-blue-950 font-extrabold">CREATIVE SOLUTIONS</div>
            <p className="text-blue-950 font-extrabold text-[54px] leading-tight mt-2.5">We make unique & memorable brands</p>
          </div>
          <div className="w-[50%]">
            <p className="text-gray-500 font-semibold">At vero eos et accusamus et iusto odio dignissimos ducimus qui
               blanditiis praesentium voluptatum deleniti atque lorem in voluptate velit iusto odio dignissimos duci esse.</p>
             <p className="text-gray-500 font-semibold mt-[40px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>  

             <p className="relative text-blue-950 font-extrabold mt-[30px] cursor-pointer inline-block group">
              Read More
              <span className="absolute left-0 bottom-0  w-0 h-[2px] bg-blue-950 transition-all duration-300 group-hover:w-full"></span>
            </p>

          </div>
        </div>
      <div className=" bg-blue-50 py-[60px]">
      <div
        className="flex gap-[70px] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${translateX}px)`,
          width: `${imageWidth * images.length * 2}px`,
        }}
      >
        {[...images, ...images].map((src, idx) => (
          <Image key={idx} src={src} alt={`Image ${idx}`} width={440} height={400} className="rounded-xl" />
        ))}
      </div>
    </div>

    <div className="flex gap-[45px] pt-[50px]">
          <div className="w-[40%]">
          <p className="text-blue-950 font-extrabold text-[50px] leading-tight mt-2.5">Subscribe For the exclusive Updates!</p>

          </div>
          <div className="w-[55%]">
            <div className="mt-[20px] flex gap-[30px] items-center">
               <input placeholder="Enter Your Email Address" className="bg-white  rounded-full px-4 py-5 text-sm w-[80%]"/>
                <div className="rounded-full bg-blue-600 flex items-center gap-3 text-white font-bold text-[16px] px-7 py-4 cursor-pointer"><FaRegPaperPlane/> Subscribe</div>
            </div>
            <label className="flex items-center space-x-2 mt-3.5">
                <input type="checkbox" className="form-checkbox text-blue-600 w-4 h-4" />
                <span className="text-sm text-gray-700">I agree to the terms</span>
          </label>
          </div>
    </div>

    <div className="relative overflow-hidden pt-[120px]">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, 
        }}
      >
        {imageSources.map((src, idx) => (
          <div key={idx} className="flex-shrink-0 w-full ">
            <div className="rounded-full h-[90px] w-[90px] overflow-hidden mx-auto">
              <Image
                src={src}
                alt={`Image ${idx}`}
                width={90}
                height={90}
                className="rounded-full object-cover"
              />
            </div>
            <p className="mt-4 text-sm text-blue-950 font-semibold text-[22px] w-[90%] mx-auto text-center">
              Every great achievement starts with a single step, taken with courage and belief, even when the path isn't clear.
            </p>
            <FaQuoteLeft className="text-green-300  mt-[39px] ml-[600px]" size={30} />
            <p className="text-blue-950 font-bold text-[22px] text-center mt-2.5">Sandy Williams</p>
            <p className="text-gray-400 mt-1 text-center">CEO, Business Co.</p>
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2  rounded-full h-[50px] w-[50px] items-center border cursor-pointer border-black text-black p-2"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        &#60;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full h-[50px] w-[50px] items-center border cursor-pointer border-black text-black p-2"
        onClick={handleNext}
        disabled={currentIndex === imageSources.length - 1}
      >
        &#62;
      </button>

      <div className="flex justify-center mt-[60px]">
        {imageSources.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full mx-2 cursor-pointer ${currentIndex === idx ? 'bg-blue-950' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(idx)}
          ></div>
        ))}
      </div>
    </div>

    <div className="flex py-[190px]">
        <div className="w-[50%]">
              <p className="tracking-[0.2em] text-blue-950 font-extrabold">WHO ARE WE</p>
              <p className="text-blue-950 font-extrabold text-[50px] leading-tight mt-2.5">We provide best digital services</p>
              <p className="text-gray-500 font-semibold mt-2">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.</p>
              <div className="inline-block bg-[#A9C7CC] text-center rounded-full py-4 mt-[70px] px-7  text-white text-[15px] font-semibold cursor-pointer">
                        Discover now
              </div>
        </div>
        
          <div className="relative w-[50%]">
                <Image
                  src="/imggg.webp" 
                  alt="Image" 
                  width={400}
                  height={400}
                  className="absolute  top-0 right-0"
                />
                <Image
                  src="/imgg.webp" 
                  alt="Image" 
                  width={400}
                  height={450}
                  className="absolute z-20 top-[120px]  right-[170px]"
                />
                <Image
                  src="/pluss.webp" 
                  alt="Image" 
                  width={80}
                  height={80}
                  className="absolute z-20 top-[10px]  right-[470px]"
                />
                <Image
                  src="/circle.webp" 
                  alt="Image" 
                  width={80}
                  height={80}
                  className="absolute z-20 top-[500px]  right-[70px]"
                />
            </div>
        
    </div>
    <div className="flex justify-between py-[130px]">
          {[
            '/icon.webp',
            '/icon1.webp',
            '/icon2.webp',
            '/icon3.webp',
            '/icon4.webp',
            '/icon5.webp'
          ].map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`Image ${idx}`}
              width={180}
              height={80}
              className="transition-all duration-500 grayscale opacity-30 hover:grayscale-0 hover:opacity-100"
            />
          ))}
    </div>
    <div className="overflow-hidden py-[100px]">
      <p className="tracking-[0.2em] text-blue-950 font-bold text-center">
        OUR BLOG
      </p>
      <p className="text-blue-950 font-extrabold text-[50px] text-center leading-tight mt-2.5 mb-4">
        Latest articles
      </p>

      <div className="relative mt-10">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(440 + gap) * currentSlide}px)`,
            gap: `${gap}px`,
            width: `${(440 + gap) * extendedPosts.length}px`,
          }}
        >
          {extendedPosts.map((post, idx) => (
            <div key={idx} className="w-[440px] flex-shrink-0">
              <Image
                src={post.image}
                alt="Blog"
                width={400}
                height={400}
                className="rounded-xl object-cover"
              />
              <p className="tracking-[0.2em] text-blue-950 font-bold mt-1.5 text-[13px]">
                {post.category}
              </p>
              <p className="text-blue-950 font-extrabold text-[27px] leading-tight mt-2.5 mb-4">
                {post.title}
              </p>
              <p className="text-gray-500 font-semibold">{post.date}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-3">
          {[...Array(totalSlides)].map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === i ? "bg-blue-800" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>

  </div>
    <div className="bg-black py-[90px] px-[80px] grid grid-cols-4 ">
          <div>
            <p className="text-white font-bold">Office</p>
            <p className="text-gray-600 mt-3">Germany —
                785 15h Street, Office 478
                Berlin, De 81566</p>
             <p className="text-gray-600 mt-3">info@email.com</p>   
             <p className="text-white font-bold mt-4">+1 840 841 25 69</p>
          </div>
          <div>
            <p className="text-white font-bold">Links</p>
            <p className="text-gray-600 mt-3">Home</p>
             <p className="text-gray-600 mt-3">Services</p>   
             <p className="text-gray-600 mt-3">About Us</p>
             <p className="text-gray-600 mt-3">Our Team</p>
             <p className="text-gray-600 mt-3">Contact</p>
          </div>
          <div>
            <p className="text-white font-bold">Socials</p>
            <p className="text-gray-600 mt-3">Facebook</p>
             <p className="text-gray-600 mt-3">Twitter</p>   
             <p className="text-gray-600 mt-3">Instagram</p>
             <p className="text-gray-600 mt-3">Dribbble</p>
          </div>
          <div>
            <p className="text-white font-bold">Newsletter</p>
            <div className="mt-[20px] flex gap-[30px] items-center">
            <div className="relative">
              <MdOutlineMail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="email"
                placeholder="Enter Your Email Address"
                className="bg-gray-600 rounded-full px-12 py-3 text-sm w-[100%]  text-white" 
              />
            </div>
                <div className="rounded-full bg-blue-600 text-white font-bold text-[16px] px-4 py-4 cursor-pointer"><FaArrowRight/> </div>
            </div>
            <label className="flex items-center space-x-2 mt-3.5">
                <input type="checkbox" className="form-checkbox text-blue-600 w-4 h-4" />
                <span className="text-sm text-gray-700">I agree to the terms</span>
          </label>
          </div>
    </div>
    </div>
  );
}
