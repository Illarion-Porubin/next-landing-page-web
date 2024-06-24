import Image from "next/image";
import React from "react";

const Contacts = () => {
  return (
    <div className="mx-16 text-white flex w-full h-screen justify-center items-center relative border-l-[1px]">
      <h2 className="text-[30px] font-[800] leading[109%] tracking-[0.13em] uppercase rotate-[270deg] absolute top-[72%] left-[-72px]">
        Contacts
      </h2>
      <div>
        <div>
            <h1>Contact us</h1>
            <p>Let’s get to the nex level together</p>
        </div>
        <div>
            <form action="">
                <input type="text" />
                <input type="text" />
                <textarea name="" id="">

                </textarea>
                <button>Send</button>
            </form>
        </div>
        <div>
            <div>
            <a href="tel:"></a>

            </div>
            <div>
            <a href="mailto:"></a>

            </div>
            <div>

             <p>Margaretenstraße 70/3, 1050 Vienna, Austria</p>
            </div>
        </div>
        <div>
            <div>
                <p>BECOME A CLIENT </p>
                <p>business@LEAD.com</p>
                <p>{`->`}</p>
            </div>
            <div>
                <h5>Follow us</h5>
                svg
                svg
                svg
            </div>
            <div>
                <p>BECOME A CLIENT </p>
                <p>business@LEAD.com</p>
                <p>{`->`}</p>
            </div>
            <div>
                <p>BECOME A CLIENT </p>
                <p>business@LEAD.com</p>
                <p>{`->`}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
