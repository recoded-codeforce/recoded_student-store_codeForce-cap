import Image from "next/image"

import Highlighter from "../highlighter"

export default function SideBar({ handleSelectedPage, selectedPage }) {
  return (
    <>
      {/* // * If it is large screen */}
      <section className='hidden lg:block shadow-2xl overflow-hidden h-[100%]'>
        <div className='flex flex-col justify-around text-center w-[331px] pt-10 h-[80%]'>
          <Image
            className='rounded-full mx-auto'
            src='/productImg.png'
            alt='...'
            width={171}
            height={171}
          />
          <div className='text-[22px] op'>
            <h2 className='font-semibold'>User Name</h2>
            <p>User Email</p>
            <p>User Location</p>
          </div>
          <button
            aria-label='Edit Profile'
            onClick={() => handleSelectedPage("EditProfile")}
          >
            <Highlighter
              highlighterStyle={
                selectedPage === "EditProfile" ? "editProfile" : ""
              }
              text='Edit Profile'
              textClassName='text-[30px] hover:opacity-60'
            />
          </button>
          <div className='grid grid-rows-2 gap-8'>
            <button
              aria-label='My Listing'
              onClick={() => handleSelectedPage("UserListings")}
            >
              <Highlighter
                highlighterStyle={
                  selectedPage === "UserListings" ? "listingPage" : ""
                }
                text='My Listings'
                textClassName='text-[40px] hover:opacity-60'
              />
            </button>
            <button
              aria-label='My Orders'
              onClick={() => handleSelectedPage("UserOrders")}
            >
              <Highlighter
                highlighterStyle={
                  selectedPage === "UserOrders" ? "ordersPage" : ""
                }
                text='My Orders'
                textClassName='text-[38px] hover:opacity-60'
              />
            </button>
          </div>
        </div>
      </section>
      {/* // * If the expression false */}
      <section className='block lg:hidden'>
        <div className='grid grid-cols-3 text-[17px] items-center text-purple-dark text-center bg-[#90EEE1] h-[37.5px]'>
          <button
            className='focus:bg-[#7874F2] focus:text-[#d7d7d7]'
            aria-label='My Orders'
            onClick={() => handleSelectedPage("UserOrders")}
          >
            My Orders
          </button>
          <button
            className='focus:bg-[#7874F2] focus:text-[#d7d7d7]'
            aria-label='My Listing'
            onClick={() => handleSelectedPage("UserListings")}
          >
            My Listing
          </button>
          <button
            className='focus:bg-[#7874F2] focus:text-[#d7d7d7]'
            aria-label='Edit Profile'
            onClick={() => handleSelectedPage("EditProfile")}
          >
            Edit Profile
          </button>
        </div>
        <br />
        <br />
        <Highlighter
          highlighterStyle='editProfile'
          text={
            selectedPage === "EditProfile"
              ? "Edit Profile"
              : selectedPage === "UserListings"
              ? "My Listings"
              : "My Orders"
          }
        />
        <br />
        <hr className='w-[89%] h-[1.5px] mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700'></hr>
      </section>
    </>
  )
}
