import { IContacts } from "@/types";
import React from "react";

interface Props {
  contacts: IContacts
}
interface FormData {
  name: { value: string };
  email: { value: string };
  massage: { value: string };
}

const Contacts:React.FC<Props> = ({contacts}) => {
  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, massage } = e.target as typeof e.target & FormData;
    console.log(name.value);
    console.log(email.value);
    console.log(massage.value);
  };
  
  if(contacts)
  return (
    <div className="mx-16 pr-16 text-white flex w-full h-screen justify-center items-center relative border-l-[1px]" id="contacts">
      <h2 className="text-[30px] font-[800] leading[109%] tracking-[0.13em] uppercase rotate-[270deg] absolute top-[72%] left-[-72px]">
        Contacts
      </h2>
      <div className="flex flex-col w-full h-auto items-star justify-around px-[15%]">
        <div className="mb-10">
          <h1 className="text-left">{contacts.title}</h1>
          <p className="text-left">{contacts.desc}</p>
        </div>

        <div className="w-full h-full flex justify-between items-center">
          <div className="flex flex-row mr-5">
            <form
              className="flex flex-col items-start w-[350px] h-auto"
              onSubmit={(e) => formHandler(e)}
            >
              <div className="mb-5 border-2 w-full h-auto relative">
                <label
                  className=" absolute left-6 top-[-10px] font-[500] text-[15px] leading-[109%] tracking-[0.1em] bg-black px-4"
                  htmlFor="name"
                >
                  Full name
                </label>
                <input
                  className="bg-transparent w-full h-[43px]"
                  id="name"
                  name="name"
                  placeholder="Enter your first name"
                  type="text"
                />
              </div>
              <div className="mb-5 border-2 w-full h-auto relative">
                <label
                  className=" absolute left-6 top-[-10px] font-[500] text-[15px] leading-[109%] tracking-[0.1em] bg-black px-4"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="bg-transparent w-full h-[43px]"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  type="text"
                />
              </div>
              <div className="mb-5 border-2 w-full h-auto relative">
                <label
                  className=" absolute left-6 top-[-10px] font-[500] text-[15px] leading-[109%] tracking-[0.1em] bg-black px-4"
                  htmlFor="massage"
                >
                  How can we help?
                </label>
                <textarea
                  className="bg-transparent resize-none w-full h-[85px] mt-[10px]"
                  id="massage"
                  name="massage"
                  placeholder="Your massage"
                ></textarea>
              </div>
              <button
                className="w-[147px] h-[33px] bg-[#FB1B3D] font-[800] size-[15px] leading-[109%] tracking-[0.01em]"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
          <div className="flex flex-col text-left max-w-[370px]">
            <div className="flex flex-col">
              <div className="mb-[15px] font-[400] text-[16px] leading-[132%]">
                <a href="tel:">{contacts.phone}</a>
              </div>
              <div className="mb-[15px] font-[400] text-[16px] leading-[132%]">
                <a href="mailto:">{contacts.email}</a>
              </div>
              <div className="mb-[15px] font-[400] text-[16px] leading-[132%]">
                <p>{contacts.address}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-5  w-[374px] h-auto">
              <div className="w-[165px] h-[103px] bg-black border-2 flex items-start justify-center flex-col p-[15px]">
                <p className="font-[600] text-[12px] leading-[132%]">
                  BECOME A CLIENT
                </p>
                <p className="font-[500] text-[12px] leading-[132%] mb-2">
                  business@LEAD.com
                </p>
                <svg
                  width="91"
                  height="8"
                  viewBox="0 0 91 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M90.3536 4.35355C90.5488 4.15829 90.5488 3.84171 90.3536 3.64645L87.1716 0.464466C86.9763 0.269204 86.6597 0.269204 86.4645 0.464466C86.2692 0.659728 86.2692 0.976311 86.4645 1.17157L89.2929 4L86.4645 6.82843C86.2692 7.02369 86.2692 7.34027 86.4645 7.53553C86.6597 7.7308 86.9763 7.7308 87.1716 7.53553L90.3536 4.35355ZM0 4.5H90V3.5H0V4.5Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="w-[165px] h-[103px]flex flex flex-col items-start justify-center p-[15px]">
                <h5 className="mb-[15px] font-[500] text-[15px] leading-[109%] tracking-[0.1em] uppercase">
                  Follow us
                </h5>
                <div className="flex w-full h-auto justify-between">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_34_4841)">
                      <path
                        d="M13.6822 13.471C13.6822 11.8672 12.5911 11.8672 12.5911 11.8672H12.0134H8.10205V15.3086H12.3128C13.0405 15.3082 13.6822 15.0755 13.6822 13.471Z"
                        fill="white"
                      />
                      <path
                        d="M12.5914 17.6856H8.10205V21.8073H12.3841C13.0283 21.7889 14.2172 21.5871 14.2172 19.8038C14.2172 17.664 12.5914 17.6856 12.5914 17.6856Z"
                        fill="white"
                      />
                      <path
                        d="M24.0846 15.3086C21.7023 15.3086 21.3701 17.686 21.3701 17.686H26.4362C26.4366 17.686 26.4668 15.3086 24.0846 15.3086Z"
                        fill="white"
                      />
                      <path
                        d="M17 0C7.61113 0 0 7.61148 0 17C0 26.3885 7.61113 34 17 34C26.3889 34 34 26.3885 34 17C34 7.61148 26.3889 0 17 0ZM20.7064 10.0341H27.0696V11.9332H20.7064V10.0341ZM17.4904 19.9951C17.4904 24.7023 12.5917 24.5475 12.5917 24.5475H8.10226H7.97044H4.56626V9.12557H7.97044H8.10226H12.5913C15.0303 9.12557 16.9555 10.472 16.9555 13.2317C16.9555 15.9917 14.6021 16.1666 14.6021 16.1666C17.7043 16.1666 17.4904 19.9951 17.4904 19.9951ZM24.1148 22.4275C26.6783 22.4275 26.5875 20.7683 26.5875 20.7683H29.3016C29.3016 25.1715 24.0243 24.8699 24.0243 24.8699C17.6915 24.8699 18.0988 18.9743 18.0988 18.9743C18.0988 18.9743 18.0939 13.0494 24.0237 13.0494C30.2661 13.0494 29.392 19.7433 29.392 19.7433H21.4007C21.4007 22.609 24.1148 22.4275 24.1148 22.4275Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_34_4841">
                        <rect width="34" height="34" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="35"
                    height="34"
                    viewBox="0 0 35 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_34_4838)">
                      <path
                        d="M17.5 0C7.83499 0 0 7.61113 0 17C0 26.3889 7.83499 34 17.5 34C27.165 34 35 26.3889 35 17C35 7.61113 27.165 0 17.5 0ZM24.1763 8.65739L21.7559 8.65843C19.8578 8.65843 19.4908 9.53461 19.4908 10.8202V13.655H24.017L24.0148 18.095H19.4912V29.489H14.7702V18.095H10.8237V13.655H14.7702V10.3805C14.7702 6.58052 17.1602 4.51096 20.6495 4.51096L24.1767 4.51617V8.65739H24.1763Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_34_4838">
                        <rect width="35" height="34" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="36"
                    height="34"
                    viewBox="0 0 36 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_34_4834)">
                      <path
                        d="M21.4453 17C21.4453 18.7971 19.9028 20.2539 18 20.2539C16.0972 20.2539 14.5547 18.7971 14.5547 17C14.5547 15.2029 16.0972 13.7461 18 13.7461C19.9028 13.7461 21.4453 15.2029 21.4453 17Z"
                        fill="white"
                      />
                      <path
                        d="M26.0575 11.2427C25.8919 10.8188 25.6277 10.4352 25.2843 10.1203C24.9509 9.79602 24.545 9.54648 24.0959 9.39006C23.7317 9.25647 23.1846 9.09746 22.1768 9.05414C21.0867 9.00719 20.7599 8.99707 18.0001 8.99707C15.2401 8.99707 14.9132 9.00693 13.8234 9.05388C12.8157 9.09746 12.2683 9.25647 11.9044 9.39006C11.4553 9.54648 11.0491 9.79602 10.7159 10.1203C10.3726 10.4352 10.1084 10.8186 9.94247 11.2427C9.80103 11.5867 9.63266 12.1036 9.58679 13.0554C9.53708 14.0847 9.52637 14.3934 9.52637 17.0001C9.52637 19.6065 9.53708 19.9152 9.58679 20.9448C9.63266 21.8965 9.80103 22.4132 9.94247 22.7572C10.1084 23.1813 10.3723 23.5647 10.7156 23.8796C11.0491 24.2038 11.455 24.4534 11.9041 24.6098C12.2683 24.7437 12.8157 24.9027 13.8234 24.946C14.9132 24.9929 15.2398 25.0028 17.9998 25.0028C20.7602 25.0028 21.087 24.9929 22.1766 24.946C23.1843 24.9027 23.7317 24.7437 24.0959 24.6098C24.9973 24.2814 25.7098 23.6085 26.0575 22.7572C26.1989 22.4132 26.3673 21.8965 26.4135 20.9448C26.4632 19.9152 26.4736 19.6065 26.4736 17.0001C26.4736 14.3934 26.4632 14.0847 26.4135 13.0554C26.3676 12.1036 26.1992 11.5867 26.0575 11.2427V11.2427ZM18.0001 22.0124C15.0687 22.0124 12.6924 19.7684 12.6924 16.9998C12.6924 14.2312 15.0687 11.9872 18.0001 11.9872C20.9313 11.9872 23.3076 14.2312 23.3076 16.9998C23.3076 19.7684 20.9313 22.0124 18.0001 22.0124ZM23.5175 12.9604C22.8325 12.9604 22.2771 12.4359 22.2771 11.789C22.2771 11.142 22.8325 10.6175 23.5175 10.6175C24.2025 10.6175 24.7578 11.142 24.7578 11.789C24.7575 12.4359 24.2025 12.9604 23.5175 12.9604Z"
                        fill="white"
                      />
                      <path
                        d="M18 0C8.06039 0 0 7.61259 0 17C0 26.3874 8.06039 34 18 34C27.9396 34 36 26.3874 36 17C36 7.61259 27.9396 0 18 0ZM28.2736 21.0246C28.2236 22.0637 28.0486 22.7732 27.7932 23.3942C27.2563 24.7055 26.1587 25.742 24.7703 26.2491C24.1131 26.4904 23.3616 26.6554 22.2616 26.7028C21.1594 26.7503 20.8073 26.7617 18.0003 26.7617C15.193 26.7617 14.8412 26.7503 13.7387 26.7028C12.6387 26.6554 11.8872 26.4904 11.2299 26.2491C10.54 26.004 9.91544 25.6198 9.39908 25.1231C8.87338 24.6357 8.46661 24.0455 8.20706 23.3942C7.95163 22.7735 7.77667 22.0637 7.72668 21.0248C7.67587 19.9836 7.66406 19.6511 7.66406 17C7.66406 14.3489 7.67587 14.0164 7.72641 12.9754C7.7764 11.9363 7.95108 11.2268 8.20651 10.6058C8.46606 9.95445 8.87311 9.36432 9.39908 8.87691C9.91516 8.38016 10.54 7.99599 11.2297 7.75085C11.8872 7.50961 12.6384 7.34463 13.7387 7.29716C14.8409 7.24969 15.193 7.23828 18 7.23828C20.807 7.23828 21.1591 7.24969 22.2613 7.29742C23.3616 7.34463 24.1128 7.50961 24.7703 7.7506C25.46 7.99573 26.0848 8.38016 26.6012 8.87691C27.1269 9.36458 27.5339 9.95445 27.7932 10.6058C28.0489 11.2268 28.2236 11.9363 28.2739 12.9754C28.3241 14.0164 28.3359 14.3489 28.3359 17C28.3359 19.6511 28.3241 19.9836 28.2736 21.0246V21.0246Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_34_4834">
                        <rect width="36" height="34" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="w-[165px] h-[103px] bg-white text-black border-2 flex items-start justify-center flex-col p-[15px]">
                <p className="font-[600] text-[12px] leading-[132%]">
                  BECOME A CLIENT
                </p>
                <p className="font-[500] text-[12px] leading-[132%] mb-2">
                  business@LEAD.com
                </p>
                <svg
                  width="91"
                  height="8"
                  viewBox="0 0 91 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M90.3536 4.35355C90.5488 4.15829 90.5488 3.84171 90.3536 3.64645L87.1716 0.464466C86.9763 0.269204 86.6597 0.269204 86.4645 0.464466C86.2692 0.659728 86.2692 0.976311 86.4645 1.17157L89.2929 4L86.4645 6.82843C86.2692 7.02369 86.2692 7.34027 86.4645 7.53553C86.6597 7.7308 86.9763 7.7308 87.1716 7.53553L90.3536 4.35355ZM0 4.5H90V3.5H0V4.5Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="w-[165px] h-[103px] bg-black border-2 flex items-start justify-center flex-col p-[15px]">
                <p className="font-[600] text-[12px] leading-[132%]">
                  BECOME A CLIENT
                </p>
                <p className="font-[500] text-[12px] leading-[132%] mb-2">
                  business@LEAD.com
                </p>
                <svg
                  width="91"
                  height="8"
                  viewBox="0 0 91 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M90.3536 4.35355C90.5488 4.15829 90.5488 3.84171 90.3536 3.64645L87.1716 0.464466C86.9763 0.269204 86.6597 0.269204 86.4645 0.464466C86.2692 0.659728 86.2692 0.976311 86.4645 1.17157L89.2929 4L86.4645 6.82843C86.2692 7.02369 86.2692 7.34027 86.4645 7.53553C86.6597 7.7308 86.9763 7.7308 87.1716 7.53553L90.3536 4.35355ZM0 4.5H90V3.5H0V4.5Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
