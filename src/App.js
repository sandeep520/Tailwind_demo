
import React from 'react';
import './App.css';
import plan from './plan.jpg';
import cup from './image/cup.png';
import home from './image/home.jpg';
import home1 from './image/home1.jpg';
import home2 from './image/home2.jpg';
import home3 from './image/home3.jpg';
import home4 from './image/home4.jpg';
import room1 from './image/room1.jpg';
import room2 from './image/room2.jpg';
import icon2 from './image/icon2.png';
import icon3 from './image/icon3.png';
import icon4 from './image/icon4.png';
import room3 from './image/room3.jpg';








import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import SendIcon from '@material-ui/icons/Send';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';







function App() {
  var settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    centerMode: true,
    centeralpadding: '30',
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      }

    ]
  };

  var slick = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      }
    ]
  };
  
  var slider = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      }
    ]
  };

  return (
    <div className="App overflow-hidden ">

      <nav class="navbar p-3">

        <div class="flex justify-between">

          <ul class="text-black-500 sm:self-center text-1xl border-t sm:border-none">
            <li class="sm:inline-block">
              <a href="#" class=" hover:text-bold-white sm:text-xs md:text-xl lg:text-2xl font-bold sm:mr-3 md:mr-5 lg:mr-5">Funiro.</a>
            </li>

            <li class="sm:inline-block flex-col">
              <a href="#" class="  sm:text-xs md:text-xl lg:text-2xl ">Products</a>
              <ArrowDropDownIcon class="inline-block  sm:mr-3 md:mr-5 lg:mr-10 w-6" />
            </li>
            <li class="sm:inline-block ">
              <a href="#" class=" sm:text-xs md:text-xl lg:text-2xl ">Rooms</a>
              <ArrowDropDownIcon class="inline-block  sm:mr-3 md:mr-5 lg:mr-10 w-6" />
            </li>
            <li class="sm:inline-block">
              <a href="#" class="  sm:text-xs md:text-xl lg:text-2xl sm:mr-3 md:mr-5 lg:mr-5">Inspirations</a>
            </li>
            <span class="justify-end items-center text-black-500">
              <SearchIcon />
              <input class=" w-70 text-sm h-5 rounded " type="" placeholder="Search for minimalist " />
            </span>
          </ul>


          <div class="sm:flex flex justify-between " >
            <FavoriteBorderIcon class="sm:mr-1 lg:mr-5 xl:mr-3 h-8 w-8" />
            <ShoppingCartOutlinedIcon class="sm:mr-1 lg:mr-5 xl:mr-3 h-8 w-8" />
            <div className=" ">
              <img className=" sm:mr-1 lg:mr-1 xl:mr-5 h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="" />
            </div>
          </div>
        </div>
      </nav>


      <div class=" slickSlider relative  min:w-50 p-3 overflow-hidden">
        <div class="boxContent  absolute   p-1 border-4 ">
          <h2 class="text-xs sm:text-1xl md:text-2xl lg:text-4xl font-bold">High-Quality</h2>
          <p class="text-xs sm:text-1xl md:text-2xl lg:text-4xl font-bold">furniture</p>
          <p class="text-xs sm:text-1xl md:text-2xl lg:text-4xl font-bold">Just</p>
          <p class="text-xs sm:text-xs md:text-xs lg:text-2xl  text-gray-600">Our furniture is made from selected and best quality materials that are suitable for your dream </p>
          <button class=" btn bg-red-500   relative hover:bg-red-200   text-white font-bold sm:text-xs   rounded">Shop Now </button>
          <div>
            {/* <button class=" btn bg-red-500 hover:bg-red-200 p-5 sm:xs text-white font-bold    rounded">Shop Now </button> */}

          </div>
        </div>



        <Slider className slickSlider {...settings}>
          <div class="p-4 ">
            <img src={room3} />
          </div>
          <div class="p-4">
            <img src={room3} />
          </div>
          <div class="p-4">
            <img src={room3} />
          </div>
          <div class="p-4">
            <img src={room3} />
          </div>
          <div class="p-4">
            <img src={room3} />
          </div>
        </Slider>
      </div>
      {/* <div class="banner flex justify-between w-1/2   p-5 max-w-40 md:mx-4 w-full mt-12 w-1/4 "> */}
      <div className="banner ">
        <div class="flex flex-row  items-center ">
          <img src={cup} class="  w-6 h-6 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-20 xl:h-20" alt="Logo" />
          <div class="flex-col p-4 ">
            <h1 class="font-bold sm:text-xs md:text-xl lg:text-2xl">High Quality</h1>
            <p class="sm:text-xs md:text-xl lg:text-2xl">crafted from top materials</p>
          </div>
        </div>

        <div class="flex   flex-row  items-center ">

          <img src={icon2} class="  w-6 h-6 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-20 xl:h-20" alt="Logo" />
          <div class="flex-col p-4 ">
            <h1 class="font-bold sm:text-xs md:text-xl lg:text-2xl">Warrancy Protection</h1>
            <p class="sm:text-xs md:text-xl lg:text-2xl">Over 2 Years</p>
          </div>
        </div>

        <div class="flex   flex-row items-center ">

          <img src={icon3} class="  w-6 h-6 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-20 xl:h-20" alt="Logo" />
          <div class="flex-col p-4 ">
            <h1 class="font-bold sm:text-xs md:text-xl lg:text-2xl">Free Shipping</h1>
            <p class="sm:text-xs md:text-xl lg:text-2xl">Order over 150 $</p>
          </div>
        </div>
        <div class="flex   flex-row items-center ">

          <img src={icon4} class="  w-6 h-6 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-20 xl:h-20" alt="Logo" />
          <div class="flex-col p-4 ">
            <h1 class="font-bold sm:text-xs md:text-xl lg:text-2xl">24/7 Support</h1>
            <p class="sm:text-xs md:text-xl lg:text-2xl">Dedicated support</p>
          </div>
        </div>

      </div>

      <div class="text-center ">
        <p class="font-black m-8 sm:text-xs md:text-xl lg:text-3xl xl:text-5xl ">Our Products</p>
      </div>



      <div class="container mx-auto p-4">
        <div class="grid gap-10 gap-y-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <div class="bg-white rounded-md overflow-hidden relative shadow-md">
            <div class="w-full  absolute image-cover rounded-t-md" >
              <div class="p-2 m-4 w-16 h-16 text-center  bg-red-400 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                <span class="text-xl tracking-wide flex item-center my-3 my-0   md:font-xl font-bold font-sans">-30%</span>

              </div>
            </div>
            <div>



              <img class="w-full group-hover:opacity-25" src="https://lorempixel.com/640/360/food/" alt="Recipe Title" />

            </div>
            <div class="p-4 bg-gray-200  ">

              <h2 class="text-2xl font-bold text-black-400">Syltherine</h2>
              <div class=" inline-block  mt-4 mb-4 text-gray-500">
                <p class="text-gray-700 ">Stylish cafe chair</p>
                <div>
                  <span class="font-bold text-lg mb-2">Rp 2,500.000</span>
                </div>
              </div>
            </div>

          </div>

          <div class="bg-white rounded-md overflow-hidden relative shadow-md">
            <div class="w-full  absolute image-cover rounded-t-md" >
              <div class="p-2 m-4 w-16 h-16 text-center bg-red-400 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                <span class="text-xl flex item-center my-3 my-0  tracking-wide  md:font-xl font-bold font-sans">-50%</span>

              </div>
            </div>
            <div>
              <img class="w-full" src="https://lorempixel.com/640/360/food/" alt="Recipe Title" />
            </div>
            <div class="p-4 bg-gray-200  ">
              <h2 class="text-2xl font-bold text-black-400">Leviosa</h2>
              <div class=" inline-block  mt-4 mb-4 text-gray-500">
                <p class="text-gray-700 ">Stylish cafe chair</p>
                <div>
                  <span class="font-bold text-lg mb-2">Rp 2,500.000</span>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-md overflow-hidden relative shadow-md">
            <div class="w-full  absolute image-cover rounded-t-md" >
              <div class="p-2 m-4 w-16 h-16 text-center bg-red-400 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                <span class="text-xl flex item-center my-3 my-0  tracking-wide  md:font-xl font-bold font-sans">-30%</span>

              </div>
            </div>
            <div>
              <img class="w-full" src="https://lorempixel.com/640/360/food/" alt="Recipe Title" />
            </div>
            <div class="p-4 bg-gray-200  ">
              <h2 class="text-2xl font-bold text-black-400">Lolita</h2>
              <div class=" inline-block  mt-4 mb-4 text-gray-500">
                <p class="text-gray-700 ">Luxury big sofa</p>
                <div>
                  <span class="font-bold text-lg mb-2">Rp 7,000.000</span>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-md overflow-hidden relative shadow-md">
            <div class="w-full  absolute image-cover rounded-t-md" >
              <div class="p-2 m-4 w-16 h-16 text-center bg-green-300 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                <span class="text-xl flex item-center my-3 my-0  tracking-wide  md:font-xl font-bold font-sans">New</span>

              </div>
            </div>
            <div>
              <img class="w-full" src="https://lorempixel.com/640/360/food/" alt="Recipe Title" />
            </div>
            <div class="p-4 bg-gray-200  ">
              <h2 class="text-2xl font-bold text-black-400">Respira</h2>
              <div class=" inline-block  mt-4 mb-4 text-gray-500">
                <p class="text-gray-700 ">Minimalist</p>
                <div>
                  <span class="font-bold text-lg mb-2">Rp 500.000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div class="container mx-auto p-4">
        <div class="grid gap-10 gap-y-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <div class="bg-white rounded-md overflow-hidden relative shadow-md">
            <div>
              <img class="w-full" src="https://lorempixel.com/640/360/food/" alt="Recipe Title" />
            </div>
            <div class="p-4 bg-gray-200  ">
              <h2 class="text-2xl font-bold text-black-400">Grifo</h2>
              <div class=" inline-block  mt-4 mb-4 text-gray-500">
                <p class="text-gray-700 ">Night lamp</p>
                <div>
                  <span class="font-bold text-lg mb-2">Rp 1,500.000</span>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-md overflow-hidden relative shadow-md">
            <div class="w-full  absolute image-cover rounded-t-md" >
              <div class="p-2 m-4 w-16 h-16 text-center bg-green-300 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                <span class="text-xl flex item-center my-3 my-0  tracking-wide  md:font-xl font-bold font-sans">New</span>

              </div>
            </div>
            <div>
              <img class="w-full" src="https://lorempixel.com/640/360/food/" alt="Recipe Title" />
            </div>
            <div class="p-4 bg-gray-200  ">
              <h2 class="text-2xl font-bold text-black-400">Muggo</h2>
              <div class=" inline-block  mt-4 mb-4 text-gray-500">
                <p class="text-gray-700 ">Small mug</p>
                <div>
                  <span class="font-bold text-lg mb-2">Rp 150.000</span>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-md overflow-hidden relative shadow-md">
            <div class="w-full  absolute image-cover rounded-t-md" >
              <div class="p-2 m-4 w-16 h-16 text-center bg-red-400 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                <span class="text-xl flex item-center my-3 my-0  tracking-wide  md:font-xl font-bold font-sans">-50%</span>

              </div>
            </div>
            <div>
              <img class="w-full" src="https://lorempixel.com/640/360/food/" alt="Recipe Title" />
            </div>
            <div class="p-4 bg-gray-200  ">
              <h2 class="text-2xl font-bold text-black-400">Pingky</h2>
              <div class=" inline-block  mt-4 mb-4 text-gray-500">
                <p class="text-gray-700 ">Cute bad set</p>
                <div>
                  <span class="font-bold text-lg mb-2">Rp 7.000.000</span>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-md overflow-hidden relative shadow-md">
            <div class="w-full  absolute image-cover rounded-t-md" >
              <div class="p-2 m-4 w-16 h-16 text-center bg-green-300 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                <span class="text-xl flex item-center my-3 my-0  tracking-wide  md:font-xl font-bold font-sans">New</span>

              </div>
            </div>
            <div>
              <img class="w-full" src="https://lorempixel.com/640/360/food/" alt="Recipe Title" />
            </div>
            <div class="p-4 bg-gray-200  ">
              <h2 class="text-2xl font-bold text-black-400">Potty</h2>
              <div class=" inline-block  mt-4 mb-4 text-gray-500">
                <p class="text-gray-700 ">Minimalist flower pot</p>
                <div>
                  <span class="font-bold text-lg mb-2">Rp 500.000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button class="text-red-400 bg-white-100 p-4 rounded-md  item-center justify-center px-6 py-3 mx-auto block mb-10 uppercase">Show More</button>


      <div className="inspirations flex gap-2 px-2 flex-col bg-red-50 lg:flex-row overflow-hidden">
        <div className="flex-1 flex flex-col justify-center items-center m-6 2xl:px-12">
          <h1 className=" font-bold text-base md:text-3xl lg:text-5xl">50+ Beautiful rooms Inspirations</h1>
          <p className="mt-3 md:text-lg">Our designer lready made a lot of beautiful prototipe of rooms that inspires you</p>
          <a className="exploreMore bg-red-400 text-white py-1 w-1/2 text-center mt-3 md:w-1/3 py-3">Explore More</a>
        </div>
        <div className="flex-1 relative">
          <div className="flex absolute items-end bottom-2 left-2 z-10 2xl:bottom-12 left-12 opacity-80">
            <span className="bg-white rounded p-2 2xl:p-12">
              <h4 className="text-lg 2xl:text-2xl">01 -- Bed Room</h4>
              <h1 className="font-bold text-2xl 2xl:text-3xl">Inner Peace</h1>
            </span>
            <ArrowForwardIcon className="ArrowForwardIcon bg-red-500 2xl:text-2xl" />
          </div>
          <img className="z-1 h-96 md:h-auto" src={room1} />
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="App pb-12">
            <Slider {...slick} >
              <div className="slicklist_div h-full "><img className="flex w-100 px-3 " src={room1} /></div>
              <div className="slicklist_div h-full "><img className="flex w-100 px-3 " src={room1} /></div>
              <div className="slicklist_div h-full "><img className="flex w-100 px-3 " src={room1} /></div>
            </Slider>
          </div>
        </div>
      </div>





      <div class="text-center ">
        <p class="font-black mt-10 text-4xl ">Tip & Tricks</p>
      </div>

      <div class="slick w-100  mb-10 lg:p-4  hover:mousemove ">
        <Slider {...slider}>
          <div className=" p-4  shadow-md">
            <img className="w-full" src={room2} />
            <span class="font-bold">How to create a living room to love</span>
            <div>
              <span class="font-bold text-gray-400">20 jan 2020</span>
            </div>

          </div>
          <div class="p-4 shadow-2xl">
            <img className="w-full" src={room2} />
            <span class="font-bold">Solution for clean look working space</span>
            <div>
              <span class="font-bold text-gray-400">10 jan 2020</span>
            </div>

          </div>
          <div class="p-4 shadow-2xl">
            <img className="w-full" src={room2} />
            <span class="font-bold">Make your cooking activity more fun with good setup</span>
            <div>
              <span class="font-bold text-gray-400">20 jan 2020</span>
            </div>
          </div>
          <div class="p-4 shadow-2xl">
            <img className="w-full" src={room2} />
            <span class="font-bold">Solution for clean look working space</span>
            <div>
              <span class="font-bold text-gray-400">10 jan 2020</span>
            </div>
          </div>
          <div class="p-4 shadow-2xl">
            <img className="w-full" src={room2} />
            <span class="font-bold">How to create a living room to love</span>
            <div>
              <span class="font-bold text-gray-400">20 jan 2020</span>
            </div>
          </div>
        </Slider>
      </div>




      <div className="relative  my-6 w-full md:my-12">
        <span className="relative  w-full md:absolute">
          <h4 className="text-center text-bold text-base text-center md:text-lg">Share Your Set Up With</h4>
          <h1 className="text-center font-bold text-2xl md:text-4xl lg:text-5xl">#FuniroFurniture</h1>
        </span>
        <div className="grid-container  flex flex-wrap">
          <div className="commonCard grid-item1  items-end p-1"><img className="h-32 md:h-96 " src={home2} /></div>
          <div className="commonCard grid-item2 flex items-end p-1"><img className="h-32 md:h-80 " src={room2} /></div>
          <div className="commonCard grid-item3 flex justify-center items-center p-1"><img className="h-32 md:h-96 " src={home2} /></div>
          <div className="commonCard grid-item4 flex items-end p-1"><img className="h-32 md:h-80 " src={home} /></div>
          <div className="commonCard grid-item5 flex items-end p-1"><img className="h-32 md:h-96 " src={home4} /></div>
          <div className="commonCard grid-item6 p-1"><img className="h-32 md:h-96 " src={home} /></div>
          <div className="commonCard grid-item7 flex items-start p-1"><img className="h-32 md:h-80 " src={home} /></div>
          <div className="commonCard grid-item8 flex items-start p-1"><img className="h-32 md:h-80 " src={home1} /></div>
          <div className="commonCard grid-item9 flex items-start p-1"><img className="h-32 md:h-60 " src={room2} /></div>
        </div>
      </div>


      <div class="sm:flex sm:flex-wrap sm:mx-8 md:py-4">
        <div class="px-4 sm:w-1/2  xl:w-1/6">
          <h5 class="text-xl font-bold mb-6 text-3xl">Funiro</h5>
          <ul class="">
            <li class="mb-2">
              <h3 class="border-b border-solid border-transparent font-bold text-gray-600 text-2xl ">Worldwide </h3>
              <h2 class="text-2xl font-bold text-gray-600 ">furniture store</h2>
            </li>

            <li class="flex mb-2">
              <LocationOnIcon class="flex h-6" />
              <h2 class="border-b border-solid border-transparent text-gray-400  hover:text-purple-800">Sawojajar Malang, Indonesia</h2>
            </li>

            <li class="flex mb-2 ">
              <CallIcon class="flex h-6 " />
              <h2 class="border-b border-solid border-transparent text-gray-400  hover:text-purple-800"> +6289 456 3455</h2>
            </li>
            <li class="mb-2">
              <h2 href="#" class="border-b border-solid border-transparent text-gray-400  hover:text-purple-800">www.funiro.com</h2>
            </li>
          </ul>
        </div>

        <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
          <h5 class="text-xl font-bold mb-6">Menu</h5>
          <ul class="list-none footer-links">
            <li class="mb-2">
              <h2 href="#" class="border-b border-solid border-transparent text-gray-400 hover:text-purple-800">Products</h2>
            </li>
            <li class="mb-2">
              <h2 href="#" class="border-b border-solid border-transparent text-gray-400 hover:text-purple-800">Rooms</h2>
            </li>
            <li class="mb-2">
              <h2 href="#" class="border-b border-solid border-transparent text-gray-400 hover:text-purple-800">Inspirations</h2>
            </li>
            <li class="mb-2">
              <h2 href="#" class="border-b border-solid border-transparent text-gray-400 hover:text-purple-800">About Us</h2>
            </li>
            <li class="mb-2">
              <h2 href="#" class="border-b border-solid border-transparent text-gray-400 hover:text-purple-800">Terms & Policy</h2>
            </li>
          </ul>
        </div>

        <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
          <h5 class="text-xl font-bold mb-6">Account</h5>
          <ul class="list-none footer-links">
            <li class="mb-2">
              <h2 href="#" class="border-b border-solid border-transparent text-gray-400 hover:text-purple-800">My Account</h2>
            </li>
            <li class="mb-2">
              <h2 href="#" class="border-b border-solid border-transparent text-gray-400 hover:text-purple-800">Checkout</h2>
            </li>
            <li class="mb-2">
              <h2 href="#" class="border-b border-solid border-transparent text-gray-400 hover:text-purple-800">Inspirations</h2>
            </li>
            <li class="mb-2">
              <h2 href="#" class="border-b border-solid border-transparent text-gray-400 hover:text-purple-800">My Cart</h2>
            </li>
            <li class="mb-2">
              <h2 href="#" class="border-b border-solid border-transparent text-gray-400 hover:text-purple-800">My catalog</h2>
            </li>
          </ul>
        </div>

        <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
          <h5 class="text-xl font-bold mb-6">Stay Connected</h5>
          <ul class="list-none footer-links">
            <li class="mb-2">
              <h2 href="#" class="border-b border-solid border-transparent text-gray-400 hover:text-purple-800">Facebook</h2>
            </li>
            <li class="mb-2">
              <h2 href="#" class="border-b border-solid border-transparent text-gray-400 hover:text-purple-800">Instagram</h2>
            </li>
            <li class="mb-2">
              <h2 href="#" class="border-b border-solid border-transparent text-gray-400 hover:text-purple-800">Twitter</h2>
            </li>

          </ul>
        </div>


        <div class=" px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
          <h5 class="text-xl font-bold mb-6">Stay Connected</h5>
          <div class="flex ">
            <input class="bg-gray-200 " type="text" placeholder="Enter your email" />
            <span class="m-1"><SendIcon class="flex w-6 h-6 bg-yellow-500" /></span>
          </div>


        </div>
      </div>




    </div>
  );
}




















export default App;
